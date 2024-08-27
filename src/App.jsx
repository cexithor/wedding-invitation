import { Box, Container, Typography } from "@mui/material";
import Envelope from "./components/Envelope";
import ImageDisplay from "./components/ImageDisplay";
import StyledDivider from "./components/StyledDivider";
import CoupleNames from "./components/CoupleNames";
import SolidContainer from "./components/SolidContainer";

const App = () => {
  return (
    <Box bgcolor="#fefae0">
      <Envelope />
      <ImageDisplay img="https://picsum.photos/1920/1080" />
      <Container maxWidth="md">
        <Typography color="primary.main" textAlign="center" sx={{ pt: "12px" }}>
          13 • 06 • 2025
        </Typography>
        <StyledDivider />
        <Box my={{ xs: "24px" }} maxWidth="600px" m="auto">
          <CoupleNames color="#283618" />
        </Box>
        <StyledDivider />
        <Typography color="primary.main" sx={{ mt: "12px" }} textAlign="center">
          ¡A ponerse guapos que nos vamos a casar! Tenemos todo… el traje, el
          avión, el fotógrafo, el destino, las flores… Pero nos falta lo más
          importante: ¡Contar contigo en este día tan especial!
        </Typography>
      </Container>
      <SolidContainer maxWidth="sm">
        <Typography
          color="white"
          sx={{ py: "24px" }}
          textAlign="center"
          fontFamily="'Playfair Display Variable', serif"
        >
          Falta
        </Typography>
      </SolidContainer>
    </Box>
  );
};

export default App;
