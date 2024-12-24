import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const startJourney = () => {
    navigate("/map");
  };

  return (
    <div className="content">
      <Typography variant="h2" align="center" fontWeight={700}>
        Bem-vinda
      </Typography>

      <Typography variant="h6" align="center">ao Mapa dos Momentos 🎄</Typography>

      <Typography variant="p" align="center" paddingTop={1}>
        Uma jornada mágica para relembrar os momentos mais especiais da nossa
        história.
      </Typography>

      <embed src="https://clebervasc.github.io/merry-christmas-vitoria/sapiens.svg" alt="vitoria" type="image/svg+xml" className="vitoria" />

      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={startJourney}
        sx={{
          marginTop: 3,
          backgroundColor: "#ff8c00",
          "&:hover": {
            backgroundColor: "#e57c00",
          },
        }}
      >
        Iniciar Experiência
      </Button>
    </div>
  );
};

export default Home;
