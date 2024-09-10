import { useState } from "react";
import styles from "./styles";
import { Box, Typography, Dialog, Button } from "@mui/material";
import CoupleNames from "../CoupleNames";

const Envelope = ({ playAudio }) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog sx={styles.dialog} open={open} maxWidth="xs">
      <Typography sx={styles.caption}>
        Te queremos hacer
        <br /> una cordial invitación.
      </Typography>
      <Box sx={styles.envelope}>
        <Button
          sx={styles.btn}
          onClick={() => {
            setOpen(false);
            playAudio();
          }}
        >
          Abrir
        </Button>
      </Box>
      <Box sx={styles.coupleBox}>
        <CoupleNames />
      </Box>
    </Dialog>
  );
};

export default Envelope;
