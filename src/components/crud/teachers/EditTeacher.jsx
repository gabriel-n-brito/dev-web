import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTeacher() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/professor/retrieve/${params.id}`)
      .then((response) => {
        setName(response.data.name);
        setUniversity(response.data.university);
        setDegree(response.data.degree);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProfessor = { name, university, degree };

      axios
      .put(
        `http://localhost:3002/professor/update/${params.id}`,
        updatedProfessor
      )
      .then((response) => {
        alert(`Professor ${name} atualizado.`);
        navigate("/listTeacher");
      });
  };

  return (
    <>
      <main>
        <h2>Editar Professor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome: </label>
            <input
              type="text"
              className="form-control"
              value={name == null || name === undefined ? "" : name}
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Universidade: </label>
            <input
              type="text"
              className="form-control"
              value={university ?? ""}
              name="university"
              onChange={(event) => {
                setUniversity(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Titulação: </label>
            <input
              type="text"
              className="form-control"
              value={degree ?? ""}
              name="ira"
              onChange={(event) => {
                setDegree(event.target.value);
              }}
            />
          </div>
          <div className="form-group" style={{ paddingTop: 20 }}>
            <input
              type="submit"
              value="Atualizar Professor"
              className="btn btn-primary"
            />
          </div>
        </form>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default EditTeacher;
