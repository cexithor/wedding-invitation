import { Box } from "@mui/material";
import styles from "./styles";

const ImageDisplay = (props) => {
  const backgroundImage = `url('${props.img}')`;
  return <Box sx={{ ...styles.imgContainer, backgroundImage }} {...props} />;
};

export default ImageDisplay;
