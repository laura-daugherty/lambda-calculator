import React from "react";
import displayStyles from "./display.module.css"

const Display = (props) => {
  return (
    <div className={displayStyles.display}>
      <div className={displayStyles.displayNumber}>
        {props.selectNumber}
      </div>
    </div>
  )
};

export default Display
