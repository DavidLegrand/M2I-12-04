import React, { useState, useEffect, useCallback } from "react";

import NewTask from "components/ToDoList/NewTask";
import ListView from "./ListView";

import { useSelector, useDispatch } from 'react-redux'
import TODOS_GET from 'store/actions/todos'

const ToDoList = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [numTask, setNumTask] = useState(0)

  useEffect(() => {
    dispatch(TODOS_GET())
  }, [])

  useEffect(() => {
    setNumTask(todos.list.filter(t => !t.completed).length)
  }, [todos.list])

  const updateCompleted = useCallback(
    (task) => {
      //setList((oldList) => oldList.map((t) => t.id === task.id ? { ...t, completed: !t.completed } : t))
    },
    []
  )

  const addTask = (task) => {
    //setList([...todos.list, { ...task }])
  }

  return <>
    <ListView loading={todos.loading} list={todos.list} updateCompleted={updateCompleted} numTask={numTask} />
    <NewTask add={addTask} />
  </>;
};

export default ToDoList;
