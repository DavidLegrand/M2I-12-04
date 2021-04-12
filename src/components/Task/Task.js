import React from "react";
import PropTypes from "prop-types";
import { Badge, ListGroupItem } from "react-bootstrap";
import TaskModel from 'models/Task'

const Task = () => {
  const task = new TaskModel({
    title: "Nouvelle tâche",
    description: "Ceci est une tâche test"
  })
  return <ListGroupItem variant={task.getVariant()}>
    <h2 className="d-inline">{task.title}</h2>
    <Badge className="float-right" variant={task.getVariant()}>{task.getStatus()}</Badge>
    <p>Deadline : {task.deadline.toLocaleDateString()}</p>
    <p>Temps restant : {task.getRemaining()} jours</p>
  </ListGroupItem>;
};

Task.propTypes = {
  //
};

export default Task;
