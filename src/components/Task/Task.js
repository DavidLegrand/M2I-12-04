import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, ListGroupItem } from "react-bootstrap";
import TaskModel from 'models/Task'

const Task = ({ update, task }) => {

  return (
    <ListGroupItem variant={task.getVariant()}>

      <h2 className="d-inline">
        {task.title}
      </h2>

      <Badge className="float-right" variant={task.getVariant()}>
        {task.getStatus()}
      </Badge>

      <p>{task.description}</p>
      <p>Deadline : {task.deadline.toLocaleDateString()}</p>
      <p>Temps restant : {task.getRemaining()} jours</p>

      <Button onClick={() => update(task)}>{task.completed ? "Annuler" : "Terminer"}</Button>
    </ListGroupItem>
  )
};


Task.propTypes = {
  update: PropTypes.func.isRequired,
  task: PropTypes.instanceOf(TaskModel).isRequired
};
export default Task;
