import { Box, Button } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles";

const FutureProjects = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.headerContainer}>
          <Box sx={styles.heading}>FUTURE PROJECTS</Box>
          <Box sx={styles.description}>
            Get a glimpse into the exciting world of upcoming vlippr ideas and
            reality shows we're brewing! Here are a few sneak peeks at what's on
            the horizon, with short descriptions to pique your interest
          </Box>
        </Box>
        <Box>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box component="img" src="/carousal1.jpeg" sx={styles.image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box component="img" src="/carousal2.jpeg" sx={styles.image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box component="img" src="/carousal3.jpeg" sx={styles.image} />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box sx={styles.baseBanner}>
          <Box sx={styles.baseBannerContainer}>
            <Box sx={styles.baseHeading}>
              Unleash Your Reality TV Obsession!
            </Box>
            <Box sx={styles.baseText}>
              Now that you've explored the shows, it's time to join the
              experience!
            </Box>
            <Button sx={styles.button}>Get Your Tickets Here!</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FutureProjects;
