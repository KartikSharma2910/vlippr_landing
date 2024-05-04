import { Box } from "@mui/material";
import EventRenderer from "components/EventRenderer";
import { realityShow } from "constants/realityShow";
import styles from "./styles";

const RealityShow = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.wrapper}>
        {realityShow.map((show, index) => (
          <EventRenderer eventType="Reality Show" {...show} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default RealityShow;
