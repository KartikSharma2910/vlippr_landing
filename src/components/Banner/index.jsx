import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styles from "./styles";

const Banner = ({ setIndex }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setIndex(newValue);
  };

  return (
    <Box component="section" sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.dataContainer}>
          <Box sx={styles.heading}>Landing Zone</Box>
          <Box sx={styles.description}>
            Craving reality TV? Landing Zone is your fix. Binge the hottest
            shows, discover exclusive vlippr ideas, and fuel your next marathon.
            Landing Zone - drama, love, and social experiments served daily.
            Escape to reality TV bliss.
          </Box>
        </Box>
        <Box sx={styles.scrollContainer}>
          <IconButton>
            <KeyboardDoubleArrowDownIcon sx={styles.icon} />
          </IconButton>
          <Box className="scroll">SCROLL DOWN</Box>
        </Box>
        <Box sx={styles.tabWrapper}>
          <Tabs value={value} onChange={handleChange} sx={styles.tabContainer}>
            <Tab label="REALITY SHOW" sx={styles.tab} />
            <Tab label="TOURNAMENT" sx={styles.tab} />
            <Tab label="EVENTS" sx={styles.tab} />
          </Tabs>
          <Box sx={styles.divider} />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
