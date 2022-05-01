import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import StudentTableRow from "./StudentTableRow";
import axios from "axios";

function ListStudent() {
  const [students,setStudents] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3002/estudantes/list")
      .then((response) => setStudents(response.data));
  }, []);

  function generateTable() {
    if (!students) return;
    return students.map((student, i) => {
      return <StudentTableRow student={student} key={i} />;
    });
  }

  return (
    <>
      <main>
        <h2>List Student</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>IRA</th>
              <th colSpan={2} style={{ textAlign: "center" }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default ListStudent;
