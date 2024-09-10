import { useState } from "react";
import useSound from "use-sound";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Link,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Envelope from "./components/Envelope";
import ImageDisplay from "./components/ImageDisplay";
import StyledDivider from "./components/StyledDivider";
import CoupleNames from "./components/CoupleNames";
import SeeYouSoon from "./components/SeeYouSoon";
import SolidContainer from "./components/SolidContainer";
import Subtitle from "./components/Subtitle";
import Counter from "./components/Counter";
import ListItemWithIcon from "./components/ListItemWithIcon";
import Attendance from "./components/Attendance";
import itemData from "./utils/itemData";
import terracottaPalette from "./utils/terracottaPalette";
//Icons
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CarRentalIcon from "@mui/icons-material/CarRental";
import VillaIcon from "@mui/icons-material/Villa";
import HotelIcon from "@mui/icons-material/Hotel";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
//Audio
import bgMusic from "/sounds/bg-music.mp3";

const App = () => {
  const [openAttendance, setOpenAttendance] = useState(false);
  const [play] = useSound(bgMusic);

  return (
    <Box bgcolor="#CFDBC3">
      <audio id="audio-tag" src="sounds/bg-music.mp3" loop autoPlay />
      <Envelope playAudio={() => play()} />
      <Attendance
        openAttendance={openAttendance}
        setOpenAttendance={setOpenAttendance}
      />

      <ImageDisplay img="images/couple-picture-0.jpg" />
      <Container maxWidth="md">
        <Typography color="primary.main" textAlign="center" sx={{ pt: "12px" }}>
          Save the Date
          <br />
          13 • 06 • 2025
        </Typography>
        <StyledDivider />
        <Box my={{ xs: "24px" }} maxWidth="600px" m="auto">
          <CoupleNames color="#808A6F" />
        </Box>
        <StyledDivider />
        <Typography color="primary.main" sx={{ mt: "16px" }} textAlign="center">
          ¡A ponerse guapos que nos vamos a casar! Tenemos todo… el traje, el
          avión, el fotógrafo, el destino, las flores… Pero nos falta lo más
          importante: ¡Contar contigo en este día tan especial!
        </Typography>
      </Container>

      <SolidContainer maxWidth="xs" sx={{ my: "32px", py: "32px" }}>
        <Subtitle text="Falta" color="secondary.main" />
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

      <ImageDisplay img="images/couple-picture-1.jpg" />
      <SolidContainer maxWidth="sm" sx={{ py: "32px", mb: "32px" }}>
        <Subtitle text="Tips y Notas" sx={{ color: "secondary.main" }} />
        <StyledDivider
          sx={{
            my: "12px",
            "&.MuiDivider-withChildren::before": {
              borderColor: "secondary.main",
            },
            "&.MuiDivider-withChildren::after": {
              borderColor: "secondary.main",
            },
          }}
          color="secondary.main"
        />
        <Typography color="secondary.main">
          ¡Recuerda que debes planear tu viaje con anticipación, para que
          disfrutes de la mejor manera esta celebración! Te recomendamos lo
          siguiente:
        </Typography>
        <List>
          <ListItemWithIcon
            icon={<FlightTakeoffIcon color="secondary" fontSize="large" />}
            primary="¿Con cuánto tiempo antes debo comprar mi boleto de avión?"
            secondary="El momento para encontrar el mejor precio de los vuelos es de 3 a 6 meses antes del viaje."
          />
          <ListItemWithIcon
            icon={<CarRentalIcon color="secondary" fontSize="large" />}
            primary="¿Debo rentar un coche?"
            secondary="Nuestro hermoso Resort se encuentra a 45 minutos en carro desde el Aeropuerto Internacional de San José del Cabo. Puedes rentar el carro dependiendo de tus actividades durante tu estancia con nosotros, por ejemplo, si deseas quedarte 4 días la renta en promedio puede ser de: 4,500 MXN por tu estancia. En caso de que no quieras rentar el automóvil, puedes tomar un taxi directamente al Resort que tendrá un costo aproximado de: $250 MXN"
          />
          <ListItemWithIcon
            icon={<VillaIcon color="secondary" fontSize="large" />}
            primary="¿En dónde puedo hospedarme? "
            secondary="Te recomendamos hospedarte en el resort donde será el evento,"
          />
          <Box ml={{ xs: 0, sm: "76px" }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              my="16px"
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  window.open(
                    "https://www.sandos.com/es/sandos-finisterra/los-cabos-hotel-todo-incluido",
                    "_blank"
                  )
                }
              >
                Sandos Finisterra
              </Button>
              <Typography variant="body2" color="secondary.main">
                Conoce el Resort
              </Typography>
            </Box>
            <Typography variant="body2" color="secondary.main">
              No tenemos duda que las instalaciones te encantarán y al ser un
              concepto <strong>ALL-INCLUSIVE</strong> nada te faltará.
            </Typography>
          </Box>
          <ListItemWithIcon
            icon={<HotelIcon color="secondary" fontSize="large" />}
            primary="¿Dónde puedo hacer la reservación del hotel?"
            secondary="Puede ser a través de:"
          />
          <List sx={{ ml: { xs: 0, sm: "76px" } }}>
            <ListItem disablePadding>
              <ListItemText
                secondary="Agencia de viajes"
                secondaryTypographyProps={{ color: "secondary.main" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <Link
                href="https://www.bestday.com.mx"
                target="_blank"
                variant="body2"
                color="#ffffff"
              >
                BestDay
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                href="https://www.booking.com"
                target="_blank"
                variant="body2"
                color="#ffffff"
              >
                Booking
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                href="https://bookingengine2.sandos.com"
                target="_blank"
                variant="body2"
                color="#ffffff"
              >
                Directamente en la página del hotel
              </Link>
            </ListItem>
          </List>
        </List>
      </SolidContainer>

      <Container maxWidth="md">
        <Subtitle text="Confirmar la asistencia" />
        <StyledDivider sx={{ my: "16px" }} />
        <Typography color="primary.main">
          Estamos deseando compartir este viaje tan especial con ustedes. Solo
          falta que elijas tu asiento:
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          my="24px"
        >
          <Button variant="contained" onClick={() => setOpenAttendance(true)}>
            ¡Por supuesto que me apunto!
          </Button>
          <Typography variant="body2" textAlign="center">
            Ya tengo la maleta lista y el boleto comprado
          </Typography>
        </Box>
        <StyledDivider sx={{ my: "16px" }} />
        <Subtitle text="Retratos de nuestro amor" />
      </Container>
      <ImageList
        sx={{ width: "100%", maxWidth: "500px", margin: "32px auto" }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <SolidContainer maxWidth="sm" sx={{ py: "32px" }}>
        <Subtitle text="Fiesta" color="secondary.main" />
        <StyledDivider
          sx={{
            my: "12px",
            "&.MuiDivider-withChildren::before": {
              borderColor: "secondary.main",
            },
            "&.MuiDivider-withChildren::after": {
              borderColor: "secondary.main",
            },
          }}
          color="secondary.main"
        />
        <Typography
          color="secondary.main"
          textAlign="center"
          fontStyle="italic"
        >
          La diversión empieza aquí y ahora <br />
          ¡No olvidarás nuestro gran día!
        </Typography>
        <List>
          <ListItemWithIcon
            icon={<CheckroomIcon color="secondary" fontSize="large" />}
            primary="Dress Code"
            secondary={
              <>
                Etiqueta formal de día.
                <br />{" "}
                <em>
                  &quot;El blanco es un color hermoso, pero en nuestra boda, es
                  exclusivo para la novia. ¡Todos los demás colores están
                  disponibles!&quot;
                </em>
                <br />
                Terracota/Verde Olivo
                <br />
                Paleta de colores recomendada:
              </>
            }
          />
          <Box
            mt="12px"
            ml={{ xs: 0, sm: "76px" }}
            display="grid"
            gridTemplateColumns="repeat(6, 1fr)"
            gridTemplateRows="repeat(5, 60px)"
          >
            {terracottaPalette.map((color) => (
              <Box key={color} bgcolor={color} />
            ))}
          </Box>
          <ListItemWithIcon
            icon={<LibraryMusicIcon color="secondary" fontSize="large" />}
            primary="Música/Playlist"
            secondary={
              <>
                ¿Cuál es la canción que no debe faltar en la playlist de la
                fiesta?
                <br /> Añadir canción en{" "}
                <Link
                  href="https://open.spotify.com/playlist/5AnLx0X9sUwH8r9I2p4zBX?si=qj2U9kpYREeop7mroUDP2A&pi=u-W5RWlk6yR86z"
                  target="_blank"
                  variant="body2"
                  color="#ffffff"
                >
                  playlist de Spotify
                </Link>
              </>
            }
          />
          <ListItemWithIcon
            icon={<CardGiftcardIcon color="secondary" fontSize="large" />}
            primary="Regalos"
            secondary="Seguramente estarás pensando en qué regalo deberías hacernos. Para nosotros, tu presencia es lo mejor que podemos recibir. Con la gente que nos quiere ya tenemos todo lo que necesitamos, así que si deseas hacernos un regalo, regálanos tu tiempo en un momento tan especial. Tu cariño y sonrisa son todo lo que deseamos."
          />
        </List>
      </SolidContainer>
      <Container
        maxWidth="sm"
        sx={{ display: "flex", flexDirection: "column", mt: "48px" }}
      >
        <img
          src="images/couple-picture-frame.png"
          alt="couple-picture-frame"
          width="100%"
        />
        <Box width="50%" alignSelf="flex-end" position="relative" top="-48px">
          <SeeYouSoon />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
