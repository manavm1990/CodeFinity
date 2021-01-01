import logo from "assets/images/logo.svg"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ styles }) => (
  <figure className={styles}>
    <img src={logo} alt="CodeFinity Logo" />
  </figure>
)

Logo.propTypes = {
  styles: PropTypes.string,
}

Logo.defaultProps = {
  styles: "w-10",
}

export default Logo
