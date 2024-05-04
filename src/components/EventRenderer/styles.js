const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "600px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 3rem",
  },

  headerText: {
    fontSize: "14px",
    borderRadius: "50px",
    padding: "0.2rem 1.5rem",
    border: "1px solid rgb(255,255,255,0.1)",
    background: "rgb(255,255,255,0.1)",
  },

  container: {
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  heading: {
    fontSize: "60px",
    whiteSpace: "nowrap",
    fontWeight: 600,
    textTransform: "uppercase",
  },

  description: {
    fontSize: "14px",
    textAlign: "center",
    width: "70%",
  },
};

export default styles;
