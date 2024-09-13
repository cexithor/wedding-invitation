import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import StyledDivider from "../StyledDivider";
//Icons
import EmailIcon from "@mui/icons-material/Email";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Attendance = ({ openAttendance, setOpenAttendance }) => {
  return (
    <Dialog
      maxWidth="xs"
      open={openAttendance}
      onClose={() => setOpenAttendance(false)}
      TransitionComponent={Transition}
      keepMounted
      sx={{ "& .MuiDialog-paper": { backgroundColor: "primary.main" } }}
    >
      <DialogTitle sx={{ color: "secondary.main" }} variant="subtitle2">
        Como confirmar tu asistencia:
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => setOpenAttendance(false)}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.primary.dark,
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText sx={{ color: "secondary.main" }} variant="body2">
          Por favor, ayúdanos a confirmar tu asistencia antes del{" "}
          <strong>15 Noviembre 2024.</strong>
        </DialogContentText>
        <DialogContentText
          sx={{ color: "secondary.main", my: "12px" }}
          variant="body2"
        >
          En caso de que no puedas acudir, te rogamos nos informes por los
          mismos medios.
        </DialogContentText>
        <DialogContentText sx={{ color: "secondary.main" }} variant="body2">
          Incluye en tu mensaje lo siguiente:
        </DialogContentText>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckBoxIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "secondary.main",
                variant: "body2",
              }}
              primary="Nombre completo"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckBoxIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "secondary.main",
                variant: "body2",
              }}
              primary="Confirmación o declinación a la invitación"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckBoxIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "secondary.main",
                variant: "body2",
              }}
              primary="Ingresa algún dato importante a considerar (Ejemplo: Soy vegetariano)"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckBoxIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "secondary.main",
                variant: "body2",
              }}
              primary="En cuanto tengas tu reserva del hotel favor de confirmárnosla para asegurarnos de que tengas una gran bienvenida"
            />
          </ListItem>
        </List>
      </DialogContent>
      <StyledDivider
        sx={{
          mx: "24px",
          "&.MuiDivider-withChildren::before": {
            borderColor: "secondary.main",
          },
          "&.MuiDivider-withChildren::after": {
            borderColor: "secondary.main",
          },
        }}
        color="secondary.main"
      />
      <DialogActions sx={{ p: "0 24px 16px 24px" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            window.open("https://forms.office.com/r/DzrnGL1RW3", "_blank");
            setOpenAttendance(false);
          }}
          fullWidth
        >
          Confirmar <EmailIcon sx={{ ml: "8px" }} color="primary" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Attendance;
