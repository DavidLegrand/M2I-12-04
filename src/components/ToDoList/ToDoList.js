import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import Task from "components/Task";

const ToDoList = () => {
  return <ListGroup>
    <Task></Task>
    <Task></Task>
    <Task></Task>
  </ListGroup>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;
