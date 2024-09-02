import { Typography, Divider } from "@mui/material";
import styles from "./styles";

const StyledDivider = (props) => {
  return (
    <Divider
      {...props}
      sx={
        props.sx ? { ...styles.dividerStyle, ...props.sx } : styles.dividerStyle
      }
    >
      <Typography color={props.color ? props.color : "primary"}>•</Typography>
    </Divider>
  );
};

export default StyledDivider;
