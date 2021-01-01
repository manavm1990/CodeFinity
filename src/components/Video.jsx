import bgMP4 from "assets/bg.mp4"
import bgOGV from "assets/bg.ogv"
import bgWebM from "assets/bg.webm"
import React from "react"

const Video = () => (
  <video autoPlay muted>
    <source src={bgMP4} type="video/mp4" />
    <source src={bgOGV} type="video/ogg" />
    <source src={bgWebM} type="video/webm" />
  </video>
)

export default Video
