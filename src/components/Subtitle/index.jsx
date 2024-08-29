import { Typography } from "@mui/material";

const Subtitle = ({ text, color = "primary.main", sx }) => {
  return (
    <Typography
      color={color}
      textAlign="center"
      fontFamily="'Playfair Display Variable', serif"
      fontSize="32px"
      sx={sx}
    >
      {text}
    </Typography>
  );
};

export default Subtitle;
