import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Spinner } from "react-bootstrap";
import TaskModel from 'models/Task'

import Task from "components/ToDoList/ListView/Task";
import H1 from "components/shared/H1";

const ListView = ({list, updateCompleted}) => {
  return <>
    <H1>To Do List</H1>

    <ListGroup>
      {
        list.length ?
          list.map((task) => <Task key={task.id} task={new TaskModel(task)} update={updateCompleted}></Task>) :
          <div className="text-center">
            <Spinner className="text-center" animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
      }
    </ListGroup>
  </>
};

ListView.propTypes = {
  //
};

export default ListView;
