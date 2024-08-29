import { Box } from "@mui/material";
import styles from "./styles";

const ImageDisplay = ({ img }) => {
  const backgroundImage = `url('${img}')`;
  return <Box sx={{ ...styles.imgContainer, backgroundImage }} />;
};

export default ImageDisplay;
