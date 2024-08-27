import { Typography, Divider } from "@mui/material";

const StyledDivider = () => {
  return (
    <Divider
      sx={{
        maxWidth: "900px",
        margin: "auto",
        borderColor: "primary.main",
      }}
    >
      <Typography color="primary">•</Typography>
    </Divider>
  );
};

export default StyledDivider;
