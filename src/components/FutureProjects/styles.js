const styles = {
  container: {
    padding: "3rem 0",
    height: "min-content",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
  },

  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  heading: {
    fontSize: "30px",
    fontWeight: 600,
  },

  description: {
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.8,
    width: "47%",
    textTransform: "uppercase",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  baseBanner: {
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(/getTickets.jpeg)",
  },

  baseBannerContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },

  baseHeading: {
    fontSize: "26px",
    textTransform: "uppercase",
    fontWeight: 600,
  },

  baseText: {
    fontSize: "14px",
    opacity: 0.8,
  },

  button: {
    fontSize: "14px",
    border: "1px solid white",
    color: "white",
  },
};

export default styles;
