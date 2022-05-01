import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const StudentTableRow = ({ student }) => {
  const { _id, name, course, ira } = student;
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td style={{ textAlign: "center" }}>
        <Link to={`/editStudent/${_id}`} className="btn btn-primary">
          Editar
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <button onClick={()=> {
          axios.delete(`http://localhost:3002/estudantes/delete/${_id}`)
          window.location.reload();
          }} className="btn btn-danger">Apagar</button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
