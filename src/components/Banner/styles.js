const styles = {
  wrapper: {
    position: "relative",
  },

  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  dataContainer: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    marginTop: "5rem",

    "& .scroll": {
      fontSize: "14px",
    },
  },

  heading: {
    fontFamily: "Pacifico, cursive",
    fontSize: "60px",
  },

  description: {
    fontSize: "14px",
    width: "45%",
    textAlign: "center",
    textTransform: "uppercase",
    opacity: 0.8,
  },

  icon: {
    color: "white",
  },

  tabWrapper: {
    position: "absolute",
    bottom: 20,
  },

  tabContainer: {
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },

  tab: {
    padding: 0,
    width: "150px",
    fontSize: "12px",
    margin: "1rem",
    // border: "1.5px solid rgb(255,255,255,0.4)",
    borderRadius: "50px",
    backgroundColor: "rgb(255,255,255,0.09)",
    color: "white",
  },

  divider: {
    height: "1px",
    width: "100%",
    backgroundColor: "#88888980",
  },
};

export default styles;
