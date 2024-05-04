import { Box } from "@mui/material";
import EventRenderer from "components/EventRenderer";
import { tournament } from "constants/tournament";
import styles from "./styles";

const Tournament = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.wrapper}>
        {tournament.map((show, index) => (
          <EventRenderer eventType="Tournament" {...show} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Tournament;
