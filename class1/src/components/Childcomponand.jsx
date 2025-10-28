import PropTypes from "prop-types";

export const  Childcomponand = (props) => {
  return (
    <div>{props.children}</div>
  )
}
Childcomponand.propTypes = {
    children: PropTypes.array,
}

