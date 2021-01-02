import { Button, Logo, SEO, Video } from "components"
import "fontsource-ubuntu" // Defaults to weight 400 with all styles included.
import { motion } from "framer-motion"
import React from "react"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Video />
    <div className="h-screen flex flex-col justify-center items-center">
      <Logo styles="max-w-xs w-50vw" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Button
          text=" 👨🏾‍🎓 Curricula"
          styles="bg-btn hover:bg-gray-50 border-2 border-white rounded hover:rounded-3xl hover:shadow font-mono mt-8 text-yellow-500 hover:text-green-400 tracking-widest transform hover:scale-110 transition-all uppercase p-3"
        />
      </motion.div>
    </div>
  </>
)

export default IndexPage
