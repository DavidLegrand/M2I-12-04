import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Badge, Button, ListGroupItem } from "react-bootstrap";
import { getRemaining, getStatus, getVariant } from 'utils/tasks'
const Task = ({ update, task }) => {


  useEffect(() => console.log("Task re render ", task.title))
  return (
    <ListGroupItem variant={getVariant(task)}>

      <h2 className="d-inline">
        {task.title}
      </h2>

      <Badge className="float-right" variant={getVariant(task)}>
        {getStatus(task)}
      </Badge>

      <p>{task.description}</p>
      <p>Deadline : {task.deadline}</p>
      {/* <p>Temps restant : {getRemaining(task)} jours</p> */}

      <Button onClick={() => update(task)}>{task.completed ? "Annuler" : "Terminer"}</Button>

    </ListGroupItem>
  )
};


Task.propTypes = {
  update: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};
export default React.memo(Task);
