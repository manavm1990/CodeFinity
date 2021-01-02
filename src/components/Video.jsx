import bgMP4 from "assets/bg.mp4"
import bgOGV from "assets/bg.ogv"
import bgWebM from "assets/bg.webm"
import { motion } from "framer-motion"
import React from "react"

const Video = () => (
  <motion.video
    initial={{ width: 0 }}
    animate={{ width: "100vw" }}
    transition={{ ease: "easeIn", duration: 0.9 }}
    autoPlay
    // ⚠️ Must have this to avoid accessibility caption issue
    muted
    className="h-screen w-screen object-cover fixed -z-1"
  >
    <source src={bgMP4} type="video/mp4" />
    <source src={bgOGV} type="video/ogg" />
    <source src={bgWebM} type="video/webm" />
  </motion.video>
)

export default Video
