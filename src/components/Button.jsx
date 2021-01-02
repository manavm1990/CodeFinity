import PropTypes from "prop-types"
import React from "react"

const Button = ({ isSubmit, styles, text }) => (
  <button type={isSubmit ? "submit" : "button"} className={styles}>
    {text}
  </button>
)

Button.propTypes = {
  isSubmit: PropTypes.bool,
  styles: PropTypes.string,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  isSubmit: false,
  styles: "",
}

export default Button
