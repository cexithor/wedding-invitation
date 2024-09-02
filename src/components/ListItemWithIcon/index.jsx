import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

const ListItemWithIcon = ({ icon, primary, secondary }) => {
  return (
    <ListItem
      disablePadding
      sx={{
        display: { xs: "block", sm: "flex" },
        mt: "32px",
        alignItems: "flex-start",
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: "primary.dark",
            margin: { xs: "0 auto 12px auto", sm: "0 16px 0 0" },
            width: 60,
            height: 60,
          }}
        >
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ color: "secondary.main", fontWeight: "500" }}
        secondaryTypographyProps={{ color: "secondary.main" }}
        primary={primary}
        secondary={secondary}
      />
    </ListItem>
  );
};

export default ListItemWithIcon;
