import PropTypes from "prop-types"
// import React, { useEffect } from "react";
export const Oneofsample = (props) => {
  const{color}= props;

  //   useEffect(() => {
  //   if (!["red", "green", "blue"].includes(color)) {
  //     alert(`Warning! Invalid color: ${color}`);
  //   }
  // }, [color]);
  return (
    <div style={{backgroundColor: color , padding:"10px" }}>
      <p>this componand backfground color of {color}</p>
    </div>
  )
}


Oneofsample.propTypes = {
   color: PropTypes.oneOf(["red","green","blue"]).isRequired,
}
