import PropTypes from "prop-types";

const Functionsample = (props) => {
    const { handleClick}=props
  return (
    <div>
        <button onClick={ handleClick}>click here</button>
    </div>
  )
}

export default Functionsample

Functionsample.PropTypes={
    handleClick:PropTypes.func.isRequired
}