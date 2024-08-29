import { Container } from "@mui/material";
import styles from "./styles";

const SolidContainer = (props) => {
  return (
    <Container
      {...props}
      sx={
        props.sx
          ? { ...styles.solidContainer, ...props.sx }
          : styles.solidContainer
      }
    >
      {props.children}
    </Container>
  );
};

export default SolidContainer;
