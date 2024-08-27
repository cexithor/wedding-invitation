import { Container } from "@mui/material";
import styles from "./styles";

const SolidContainer = (props) => {
  return (
    <Container sx={styles.solidContainer} {...props}>
      {props.children}
    </Container>
  );
};

export default SolidContainer;
