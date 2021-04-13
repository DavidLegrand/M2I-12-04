import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid'
import TaskModel from 'models/Task'

import Task from "components/Task";
import H1 from "components/shared/H1";
import NewTask from "components/NewTask";

const ToDoList = () => {

  const [list, setList] = useState([])
  // const [counter, setCounter] = useState(0)

  // useEffect(() => console.log("Pas de dépendance : a chaque render de chaque state/props", counter))
  // useEffect(() => console.log("Dépendance vide : Montage uniquement", counter), [])
  // useEffect(() => console.log("Une dépendance : Mise à Jour de counter", counter), [counter])

  // useEffect(()=>{
    
  // })
  const updateCompleted = (task) => {
    setList((oldList) => oldList.map((t) => t.id === task.id ? { ...t, completed: !t.completed } : t))
  }

  const addTask = (task) => {
    setList([...list, { ...task, id: uuidv4() }])
  }

  return <>

    {/* <H1>{counter}</H1>
    <Button onClick={() => setCounter(counter + 1)}>+1</Button> */}

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
