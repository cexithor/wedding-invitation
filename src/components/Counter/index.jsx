import { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import convertMilliseconds from "../../utils/convertMilliseconds";

const CounterField = ({ number, caption }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography color="secondary.main" fontSize="32px">
        {number}
      </Typography>
      <Typography color="secondary.main" fontSize="20px">
        {caption}
      </Typography>
    </Box>
  );
};

const CounterDivider = () => {
  return (
    <Divider
      orientation="vertical"
      flexItem
      variant="middle"
      sx={{ borderColor: "secondary.main" }}
    />
  );
};

const Counter = (props) => {
  const [milliseconds, setMilliseconds] = useState(
    Date.parse("2025-06-13") - Date.now()
  );

  const { d, h, m, s } = convertMilliseconds(milliseconds);

  useEffect(() => {
    setTimeout(() => {
      setMilliseconds(Date.parse("2025-06-13") - Date.now());
    }, 1000);
  }, [milliseconds]);

  return (
    <Box display="flex" justifyContent="space-between" {...props}>
      <CounterField number={d} caption="días" />
      <CounterDivider />
      <CounterField number={h} caption="hrs" />
      <CounterDivider />
      <CounterField number={m} caption="min" />
      <CounterDivider />
      <CounterField number={s} caption="seg" />
    </Box>
  );
};

export default Counter;
