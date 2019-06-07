import React from "react"
import "./styles.css"

const View = ({ children }) => {
  return (
    <div className="view">
      {children}
    </div>
  )
}

export default View
