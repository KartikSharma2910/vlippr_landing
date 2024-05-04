import { Box } from "@mui/material";
import styles from "./styles";

const EventRenderer = ({ image, heading, label, description, eventType }) => {
  return (
    <Box sx={{ ...styles.wrapper, backgroundImage: `url(${image})` }}>
      <Box sx={styles.header}>
        <Box sx={styles.headerText}>2024</Box>
        <Box sx={styles.headerText}>{eventType}</Box>
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{label}</Box>
        <Box sx={styles.description}>{description}</Box>
      </Box>
    </Box>
  );
};

export default EventRenderer;
