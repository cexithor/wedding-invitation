const styles = {
  dialog: {
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      width: "100%",
      boxShadow: "none",
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "#060E06",
    },
  },

  envelope: {
    backgroundImage: 'url("images/envelope.jpg")',
    backgroundSize: "cover",
    aspectRatio: "2/1.3",
    boxShadow:
      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  },

  caption: {
    color: "white",
    fontSize: "12px",
    fontStyle: "italic",
    mb: { xs: "16px" },
  },

  coupleBox: {
    width: { xs: "160px", sm: "240px" },
    mt: { xs: "16px", sm: "24px" },
    alignSelf: "flex-end",
  },

  btn: {
    width: "70px",
    height: "70px",
    color: "white",
    position: "relative",
    top: "calc(50% - 35px)",
    left: "calc(50% - 35px)",
    opacity: "0.5",
  },
};

export default styles;
