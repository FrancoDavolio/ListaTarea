import React, { useSyncExternalStore } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Desde handleSubmit");
    setArregloTareas([...arregloTareas, tarea]);
    setTarea("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
