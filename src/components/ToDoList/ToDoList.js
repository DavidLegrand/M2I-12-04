import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { v4 as uuidv4 } from 'uuid'

import API from 'api'
import axios from 'axios'

import NewTask from "components/ToDoList/NewTask";
import ListView from "./ListView";

const ToDoList = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get(API)
      .then(response => setList(response.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    axios.post(API, { message: "Coucou from frontend" })
  }, [list])

  const updateCompleted = (task) => {
    setList((oldList) => oldList.map((t) => t.id === task.id ? { ...t, completed: !t.completed } : t))
  }

  const addTask = (task) => {
    setList([...list, { ...task, id: uuidv4() }])
  }

  return <>
    <ListView list={list} updateCompleted={updateCompleted} />
    <NewTask add={addTask} />
  </>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;
