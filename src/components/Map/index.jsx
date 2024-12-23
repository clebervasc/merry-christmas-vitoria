import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import "./Map.css";

const Map = ({ points, onMarkerClick, currentPoint }) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const mapKey = import.meta.env.VITE_MAP_KEY

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets/style.json?key=${mapKey}`,
        center: points[0].coordinates,
        zoom: 18,
        pitch: 45,
        bearing: -17.6,
        antialias: true,
        fadeDuration: 0,
      });

      points.forEach((point, index) => {
        const marker = new maplibregl.Marker()
          .setLngLat(point.coordinates)
          .addTo(mapInstance.current)
          .getElement();

        marker.addEventListener("click", () => onMarkerClick(index));
      });
    }
  }, [points, onMarkerClick, mapKey]);

  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.flyTo({
        center: points[currentPoint].coordinates,
        zoom: 18,
        pitch: 45,
        bearing: -17.6,
        antialias: true,
        fadeDuration: 0,
      });
    }
  }, [currentPoint, points]);

  return <div id="map" ref={mapContainer} />;
};

Map.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      gift: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  onMarkerClick: PropTypes.func.isRequired,
  currentPoint: PropTypes.number.isRequired,
};

export default Map;
