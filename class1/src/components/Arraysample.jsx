import PropTypes from "prop-types";


export const Arraysample = (props) => {
    const {item}=props
  return (
    <div>
        <h2>item list</h2>
        <ul>
            {item.map((items)=>(<li key={items.id}>
                {items.name}
            </li>))}
        </ul>
    </div>
  )
}

Arraysample.PropTypes = {
    item:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        })
    ).isRequired
}

