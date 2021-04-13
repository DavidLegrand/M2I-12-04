import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid'
import TaskModel from 'models/Task'

import Task from "components/Task";
import H1 from "components/shared/H1";
import NewTask from "components/NewTask";

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

  const addTask = (task) => {
    setList([...list, new TaskModel({ ...task, id: uuidv4() })])
  }

  return <>
    <H1>To Do List</H1>
    <ListGroup>
      {list.map((task) => <Task key={task.id} task={new TaskModel(task)} update={updateCompleted}></Task>)}
    </ListGroup>
    <NewTask add={addTask} />
  </>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;
