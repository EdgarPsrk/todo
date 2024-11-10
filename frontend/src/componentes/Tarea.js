import React from 'react';

const Tarea = ({ tarea, eliminarTarea }) => (
  <li>
    {tarea.descripcion}
    <button onClick={() => eliminarTarea(tarea._id)}>Eliminar</button>
  </li>
);

export default Tarea;
