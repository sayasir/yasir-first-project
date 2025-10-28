import PropTypes from "prop-types";

export const Student = ({ name = "No name", age = 0, ismarried = false }) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{age}</td>
          </tr>
          <tr>
            <th>Is Married</th>
            <td>{ismarried ? "yes" : "no"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  ismarried: PropTypes.bool,
};


