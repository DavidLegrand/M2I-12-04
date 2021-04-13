import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import Task from "components/Task";

import TaskModel from 'models/Task'
import H1 from "components/shared/H1";

// Simulation de récupération API
const initialList = [
  { id: 1, title: "Faire marcher la list", description: "Arriver à afficher cette liste grâce à un map", priority: "Haute", completed: true },
  { id: 2, title: "Comprendre les props", description: "Comprendre les tenants et les aboutissants des props", priority: "Basse" },
  { id: 3, title: "Envoyer une fonction en props", description: "Arriver à déclencher dans Task une fonciton envoyée par ToDoList", completed: true },
]

const ToDoList = () => {

  const [list, setList] = useState(initialList)

  const updateCompleted = (task) => {
    setList((oldList) => oldList.map((t) => t.id === task.id ? { ...t, completed: !t.completed } : t))
  }

  return <>
    <H1>To Do List</H1>
    <ListGroup>
      {list.map((task) => <Task key={task.id} task={new TaskModel(task)} update={updateCompleted}></Task>)}
    </ListGroup>
  </>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;
