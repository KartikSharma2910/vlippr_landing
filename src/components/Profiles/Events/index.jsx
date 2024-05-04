import { Box } from "@mui/material";
import EventRenderer from "components/EventRenderer";
import { events } from "constants/events";
import styles from "./styles";

const Events = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.wrapper}>
        {events.map((show, index) => (
          <EventRenderer eventType="Events" {...show} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Events;
