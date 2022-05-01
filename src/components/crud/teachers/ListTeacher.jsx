import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TeacherTableRow from "./TeacherTableRow";
import { teachers } from "./data.js";
import axios from "axios";

function Listteacher() {
  
  const [teachers,setProfessor] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3002/professor/list")
      .then((response) => setProfessor(response.data));
  }, []);
  
  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return <TeacherTableRow teacher={teacher} key={i} />;
    });
  }

  return (
    <>
      <main>
        <h2>List teacher</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Universidade</th>
              <th>Titulação</th>
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

export default Listteacher;
