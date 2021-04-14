import React, { useState, useEffect, useCallback } from "react";


import API from 'api'
import axios from 'axios'

import NewTask from "components/ToDoList/NewTask";
import ListView from "./ListView";

const ToDoList = () => {

  const [list, setList] = useState([])
  const [numTask, setNumTask] = useState(0)

  useEffect(() => {
    axios.get(API)
      .then(response => setList(response.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    console.log(list)
    setNumTask(list.filter(t => !t.completed).length)
  }, [list])

  const updateCompleted = useCallback(
    (task) => {
      setList((oldList) => oldList.map((t) => t.id === task.id ? { ...t, completed: !t.completed } : t))
    },
    []
  )

  const addTask = (task) => {
    setList([...list, { ...task }])
  }

  return <>
    <ListView list={list} updateCompleted={updateCompleted} numTask={numTask} />
    <NewTask add={addTask} />
  </>;
};

export default ToDoList;
