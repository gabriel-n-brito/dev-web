import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const TeacherTableRow = ({ teacher }) => {
  const { _id, name, university, degree } = teacher;
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td style={{ textAlign: "center" }}>
        <Link to={`/editTeacher/${_id}`} className="btn btn-primary">
          Editar
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <button onClick={()=> {
          axios.delete(`http://localhost:3002/professor/delete/${_id}`)
          window.location.reload();
          }} className="btn btn-danger">Apagar</button>
      </td>
    </tr>
  );
};

export default TeacherTableRow;
