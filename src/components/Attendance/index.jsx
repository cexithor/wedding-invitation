import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import StyledDivider from "../StyledDivider";
//Icons
import EmailIcon from "@mui/icons-material/Email";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Attendance = ({ openAttendance, setOpenAttendance }) => {
  return (
    <Dialog
      maxWidth="xs"
      open={openAttendance}
      TransitionComponent={Transition}
      keepMounted
      sx={{ "& .MuiDialog-paper": { backgroundColor: "primary.main" } }}
    >
      <DialogTitle sx={{ color: "secondary.main" }} variant="subtitle2">
        Como confirmar tu asistencia:
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "secondary.main" }} variant="body2">
          Por favor, ayúdanos a confirmar tu asistencia al siguiente número:
        </DialogContentText>
        <DialogContentText
          sx={{ color: "secondary.main", my: "12px" }}
          textAlign="center"
          variant="h6"
        >
          55-3399-9244
        </DialogContentText>
        <DialogContentText sx={{ color: "secondary.main" }} variant="body2">
          o al siguiente correo electrónico:
        </DialogContentText>
        <DialogContentText
          variant="caption"
          textAlign="center"
          sx={{ mt: "12px" }}
        >
          <Link href="mailto:valeria.estephania98@gmail.com" color="secondary">
            valeria.estephania98@gmail.com
          </Link>
        </DialogContentText>
        <Box display="flex" justifyContent="center" mb="12px">
          <EmailIcon color="secondary" />
        </Box>
        <DialogContentText sx={{ color: "secondary.main" }} variant="body2">
          antes del <strong>15 Noviembre 2024.</strong>
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
          onClick={() => setOpenAttendance(false)}
          fullWidth
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Attendance;
