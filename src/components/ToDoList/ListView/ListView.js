import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Spinner } from "react-bootstrap";
import useTitle from 'hooks/useTitle'

import Task from "components/ToDoList/ListView/Task";
import H1 from "components/shared/H1";

const ListView = ({ list, updateCompleted, numTask }) => {
  const title = "To Do List"
  useTitle(`${title} ${numTask} tâche${numTask > 1 ? 's' : ''} en cours`)
  return <>
    <H1>{title}</H1>

    <ListGroup>
      {
        list.length ?
          list.map((task) => {
            return <Task key={task.id} task={task} update={updateCompleted}></Task>
          }) :
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
  list: PropTypes.array.isRequired,
  updateCompleted: PropTypes.func.isRequired,
  numTask: PropTypes.number
};

export default React.memo(ListView);
