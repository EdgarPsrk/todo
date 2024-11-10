import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tarea from './Tarea';

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/tareas')
      .then(response => setTareas(response.data))
      .catch(error => console.log(error));
  }, []);

  const agregarTarea = () => {
    axios.post('http://localhost:5000/tareas', {
      descripcion: nuevaTarea,
      completada: false
    })
    .then(response => setTareas([...tareas, response.data]))
    .catch(error => console.log(error));
  };

  const eliminarTarea = (id) => {
    axios.delete(`http://localhost:5000/tareas/${id}`)
    .then(() => setTareas(tareas.filter(tarea => tarea._id !== id)))
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map(tarea => (
          <Tarea key={tarea._id} tarea={tarea} eliminarTarea={eliminarTarea} />
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;
