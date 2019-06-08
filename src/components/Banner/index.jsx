import React from "react"

import "./styles.css"

const Banner = ({ children, variant }) => {
  return (
    <div className={`banner ${variant}`}>
      {children}
    </div>
  )
}

export default Banner
