import React from "react";
import displayStyles from "./display.module.css"

const Display = (props) => {
  console.log("display Props", props)
  return (
    <div className={displayStyles.display}>
      <div className={displayStyles.displayNumber}>
        {props.firstNumber}
        {props.selectedOperator}
        {props.secondNumber}
      </div>
      { props.total ? <div> = {props.total} </div> : <div></div>}
    </div>
  )
};

export default Display
