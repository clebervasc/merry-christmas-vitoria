import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

import PropTypes from "prop-types";

const Modal = ({ open, onClose, point }) => {
  const sendWhatsAppMessage = () => {
    const message = `Eu ganhei ${point.gift} no mapa dos momentos! ❤️`;
    const phoneNumber = "5511965724813";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const renderContent = () => {
    switch (point.contentType) {
      case "image":
        return (
          <img
            src={point.content}
            alt={point.title}
            style={{ width: "100%", objectFit: 'cover', height: '350px' }}
          />
        );
      case "carousel":
        return (
          <Carousel>
            {point.content.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                style={{ width: "100%", objectFit: 'cover', height: '350px' }}
              />
            ))}
          </Carousel>
        );
      case "text":
      default:
        return <Typography>{point.content}</Typography>;
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle align="center">{point.title}</DialogTitle>
      {
        point.content !== "" && (
          <DialogContent>{renderContent()}</DialogContent>
        )
      }
      <DialogContent>
        <Typography>{point.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        {
          point.gift !== "" && (
            <Button
              onClick={sendWhatsAppMessage}
              color="primary"
              variant="contained"
            >
              Resgatar
            </Button>
          )
        }

      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  point: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired,
    gift: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
      .isRequired,
  }).isRequired,
};

export default Modal;
