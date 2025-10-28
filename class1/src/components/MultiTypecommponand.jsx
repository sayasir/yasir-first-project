import PropTypes from "prop-types"
import React, { useEffect } from "react";
const MultiTypecommponand = (props) => {
      const { value } = props;

  useEffect(() => {
    if (typeof value !== "string" && typeof value !== "number" && typeof value!=="boolean") {
      alert(`Warning! Invalid type for value: ${value}`);
    }
  }, [value]);
  return (
    <div>MultiTypecommponand{props.value}</div>
  )
}

export default MultiTypecommponand

 MultiTypecommponand.PropTypes={
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
 }