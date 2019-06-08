import React from "react"

import "./styles.css"

const View = ({ align, children }) => {
  return (
    <div className={`view align-${align}`}>
      {children}
    </div>
  )
}

export default View
