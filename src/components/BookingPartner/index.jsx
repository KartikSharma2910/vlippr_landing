import { Box } from "@mui/material";
import styles from "./styles";

const BookingPartner = () => {
  return (
    <Box component="section">
      <Box sx={styles.wrapper}>
        <Box sx={styles.headerContainer}>
          <Box sx={styles.heading}>Trusted Booking Partners</Box>
          <Box sx={styles.description}>
            Landing Zone has partnered with leading ticketing platforms to
            ensure a smooth and secure experience.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingPartner;
