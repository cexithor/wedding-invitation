import { Box, Container, Typography } from "@mui/material";
import Envelope from "./components/Envelope";
import ImageDisplay from "./components/ImageDisplay";
import StyledDivider from "./components/StyledDivider";
import CoupleNames from "./components/CoupleNames";
import SolidContainer from "./components/SolidContainer";
import Subtitle from "./components/Subtitle";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Box bgcolor="#fefae0">
      <Envelope />
      <ImageDisplay img="https://picsum.photos/1920/1080" />
      <Container maxWidth="md">
        <Typography color="primary.main" textAlign="center" sx={{ pt: "12px" }}>
          Save the Date
          <br />
          13 • 06 • 2025
        </Typography>
        <StyledDivider />
        <Box my={{ xs: "24px" }} maxWidth="600px" m="auto">
          <CoupleNames color="#283618" />
        </Box>
        <StyledDivider />
        <Typography color="primary.main" sx={{ mt: "16px" }} textAlign="center">
          ¡A ponerse guapos que nos vamos a casar! Tenemos todo… el traje, el
          avión, el fotógrafo, el destino, las flores… Pero nos falta lo más
          importante: ¡Contar contigo en este día tan especial!
        </Typography>
      </Container>
      <SolidContainer maxWidth="xs" sx={{ my: "32px", py: "32px" }}>
        <Subtitle text="Falta" color="white" />
        <Counter maxWidth="360px" mx="auto" />
      </SolidContainer>
      <Container maxWidth="md" sx={{ mb: "32px" }}>
        <Subtitle text="Ceremonia y celebración" />
        <StyledDivider sx={{ my: "16px" }} />
        <Typography color="primary.main">
          Nuestro viaje por encontrar el amor verdadero terminó el día que nos
          conocimos. El próximo <strong>Viernes 13 de Junio 2025</strong>{" "}
          comenzaremos un viaje todavía más especial para celebrar que lo
          encontramos y que queremos cuidarlo durante toda nuestra vida.
        </Typography>
        <Typography color="primary.main" sx={{ my: "16px" }}>
          Estamos deseando compartir el inicio de este viaje con ustedes. A las{" "}
          <strong>17:00 pm</strong>, en el{" "}
          <strong>
            Resort Sandos Finisterra, ubicado en Cabo San Lucas, B.C.S.
          </strong>{" "}
          será el punto de partida de este viaje.
        </Typography>
        <Typography color="primary.main">
          El sol, la arena y el mar serán los testigos de nuestra felicidad.
          Esperamos que ustedes también puedan compartir este viaje con
          nosotros, y nos regales tu presencia en un día tan especial.
        </Typography>
      </Container>
      <ImageDisplay img="https://picsum.photos/1920/1080" />
    </Box>
  );
};

export default App;
