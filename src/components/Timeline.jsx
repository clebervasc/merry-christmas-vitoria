import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

const Timeline = ({ points, currentPoint, onClick }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#f4f4f4"
      height={100}
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
      }}
    >
      {points.map((point, index) => (
        <Button
          key={index}
          variant={index === currentPoint ? "contained" : "outlined"}
          color="primary"
          onClick={() => onClick(index)}
          sx={{
            margin: "0 10px",
            whiteSpace: "nowrap",
            minWidth: "max-content",
          }}
        >
          {point.title}
        </Button>
      ))}
    </Box>
  );
};

Timeline.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPoint: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Timeline;
