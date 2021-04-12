import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import Task from "components/Task";

import TaskModel from 'models/Task'

const ToDoList = () => {

  // Simulation de récupération API
  const tasks = [
    { id: 1, title: "Faire marcher la list", description: "Arriver à afficher cette liste grâce à un map", completed: true },
    { id: 2, title: "Comprendre les props", description: "Comprendre les tenants et les aboutissants des props" },
    { id: 3, title: "Envoyer une fonction en props", description: "Arriver à déclencher dans Task une fonciton envoyée par ToDoList", completed: true },
  ]

  // Logique métier mettre à jour le statut completed de la tâche
  const updateCompleted = (task) => {
    console.log(task)
  }

  return <ListGroup>
    {tasks.map((task) => <Task key={task.id} task={new TaskModel(task)} update={updateCompleted}></Task>)}
  </ListGroup>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;
