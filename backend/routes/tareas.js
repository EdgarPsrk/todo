const express = require('express');
const Tarea = require('../models/Tarea');
const router = express.Router();

router.get('/', async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});

router.post('/', async (req, res) => {
  const nuevaTarea = new Tarea(req.body);
  await nuevaTarea.save();
  res.json(nuevaTarea);
});

router.delete('/:id', async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
