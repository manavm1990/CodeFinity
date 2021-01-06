import logo from "assets/images/logo.svg"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ styles }) => (
  <motion.figure
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className={styles}
  >
    <img src={logo} alt="CodeFinity Logo" />
  </motion.figure>
)

Logo.propTypes = {
  styles: PropTypes.string,
}

Logo.defaultProps = {
  styles: "w-10",
}

export default Logo
