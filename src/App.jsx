import { Typography, Dialog, Box, Container, Button } from "@mui/material";
import coupleNames from "./assets/couple-names.svg";
import lineArtDivider01 from "./assets/line-art-divider-01.svg";
import lineArtDivider02 from "./assets/line-art-divider-02.svg";

const dialogStyle = {
  "& .MuiPaper-root": {
    backgroundColor: "#283618",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowX: "hidden",
  },
};

const topArtStyle = {
  position: "relative",
  right: "50%",
};

const caption = {
  color: "white",
  fontSize: "12px",
  fontStyle: "italic",
  alignSelf: "flex-start",
  padding: "0 16px",
  margin: "16px 0 32px",
};

const coupleStyle = {
  padding: "0 16px",
};

const bottomArtStyle = {
  position: "relative",
  left: "50%",
};

const buttonStyle = {
  alignSelf: "flex-end",
  margin: "32px 16px 24px",
};

const App = () => {
  return (
    <Box height="100vh" bgcolor="#fefae0">
      <Dialog sx={dialogStyle} open={true} fullScreen>
        {/* {transition((style) => (
          <Favorite sx={{ color: "white", ...style }} />
        ))} */}
        <img
          src={lineArtDivider01}
          alt="line-art-divider"
          style={topArtStyle}
        />
        <Typography sx={caption}>
          Te invitamos cordialmente <br />a nuestra boda:
        </Typography>
        <img src={coupleNames} alt="couple-names" style={coupleStyle} />
        <Button variant="contained" sx={buttonStyle}>
          Abrir
        </Button>
        <img
          src={lineArtDivider02}
          alt="line-art-divider"
          style={bottomArtStyle}
        />
      </Dialog>
      <Container maxWidth="lg"></Container>
    </Box>
  );
};

export default App;
