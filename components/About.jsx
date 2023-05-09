import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import backend from "../public/assets/backend.png";
import web from "../public/assets/web.png";
import Image from "next/image";
import { Tilt } from "react-tilt";

const About = () => {
  const services = [
    {
      title: "Front End Developer",
      icon: web,
    },

    {
      title: "Back End Developer",
      icon: backend,
    },
  ];
  const ServiceCard = ({ index, title, icon }) => (
    <Tilt
    // glareEnable={true}
    // tiltMaxAngleX={50}
    // tiltMaxAngleY={50}
    // perspective={100}
    // glareColor={"red"}
    >
      <Stack sx={{ height: "100%", marginX: "2rem" }}>
        <motion.div
          className="About"
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="aboutCArd"
          >
            <Image src={icon} alt="web-development" className="Aboutcardimg" />
            {/* <img src={icon}  /> */}

            <h3 className="AboutCardText">{title}</h3>
          </div>
        </motion.div>
      </Stack>
    </Tilt>
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Stack sx={{ width: "100%", height: "100%", marginTop: "5rem" }}>
        <motion.div
          initial={{ x: -500 }}
          animate={isMounted ? { x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography className="sectionHeading">Introduction</Typography>
          <Typography className="sectionSubHeading">About Me</Typography>
        </motion.div>
        <motion.p
          initial={{ x: -500 }}
          animate={isMounted ? { x: 0 } : {}}
          transition={{ duration: 1 }}
          className="Description"
        >
          I'm a skilled MERN developer with experience in JavaScript, and
          expertise in frameworks like React js ,Vue js , Node.js, and Three.js.
          I'm a quick learner and collaborate closely with clients to create
          efficient, scalable, and user-friendly solutions that solve real-world
          problems. Let's work together to bring your ideas to life!
        </motion.p>
        <Stack className="sect" sx={{ marginY: "4rem" }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
export default About;
