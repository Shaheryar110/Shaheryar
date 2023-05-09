// import React from "react";
import { motion } from "framer-motion";
// import lottie from "lottie-web";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
// import { useEffect } from "react";
// import HeroAnimate from "../lottieFILES/heroOct.json";
import robots from "../lottieFILES/robots.json";
import Lottie from "react-lottie-player";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Hero() {
  // useEffect(() => {
  //   const animation = lottie.loadAnimation({
  //     container: document.querySelector(".hero"),
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: `${HeroAnimate}`,
  //   });
  // }, []);
  return (
    <>
      <Stack className="hero">
        <Grid Container>
          <Grid
            item
            md={9}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                paddingX: { xs: "0.5rem", sm: "1rem" },
                // position: "absolute",
                inset: "0px",
                // top: "7rem",
                // marginX: "auto",
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              {/* //Line styling */}
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <Stack
                  sx={{
                    width: "1.6rem",
                    height: "1.6rem",
                    borderRadius: "50%",
                    marginBottom: "-0.2rem",
                  }}
                  className="violet-gradient-circle"
                />
                <Stack
                  sx={{
                    width: "0.5rem",
                    height: { xs: "25vh", sm: "30vh" },
                  }}
                  className="violet-gradient"
                />
              </Stack>
              <Stack
                sx={{
                  height: "50vh",
                  marginTop: "3rem",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontSize: {
                      // lg: "80px",
                      sm: "60px",
                      xs: "20px",
                    },
                    marginX: "2rem",
                    fontWeight: "700",
                  }}
                >
                  Hello , I'm <br />
                  <Typography variant="span" sx={{ color: "#804dee" }}>
                    MUHAMMAD SHAHERYAR
                  </Typography>
                </Typography>
                <Typography sx={{ marginX: "2rem", fontSize: "1.4rem" }}>
                  I Develop Front End & Back End Of Web Application <br /> Using
                  Multiple FrameWorks .{" "}
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    marginLeft: "2rem",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#804dee",
                      ":hover": { backgroundColor: "#6630db" },
                    }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      ":hover": {
                        backgroundColor: "#804dee",
                        borderColor: "#804dee",
                      },
                    }}
                  >
                    View Projects{" "}
                    <ArrowCircleRightIcon
                      sx={{ marginX: "0.3rem", padding: "0.1rem" }}
                    />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Lottie
                loop
                animationData={robots}
                play
                style={{ width: "20rem", height: "20rem" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Hero;
