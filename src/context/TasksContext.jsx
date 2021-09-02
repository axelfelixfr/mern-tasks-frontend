import React, { createContext, useReducer } from 'react';
import { tasksReducer } from '../reducers/tasksReducer';
import { types } from '../types/types';

export const TasksContext = createContext();

const TasksProvider = props => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Elegir base de datos', complete: true, projectId: 1 },
      { id: 2, name: 'Hacer el diseño', complete: false, projectId: 4 },
      { id: 3, name: 'Eligir framework', complete: true, projectId: 3 },
      { id: 4, name: 'Hacer testing', complete: false, projectId: 2 },
      { id: 5, name: 'Elegir frameworkd CSS', complete: true, projectId: 1 },
      { id: 6, name: 'Eligir arquitectura', complete: false, projectId: 1 },
      { id: 7, name: 'Conocer tecnologías', complete: true, projectId: 3 },
      { id: 8, name: 'Hacer HTML', complete: true, projectId: 2 },
      { id: 9, name: 'Realizar el diseño UX', complete: false, projectId: 4 },
      {
        id: 10,
        name: 'Eligir framework de backend',
        complete: true,
        projectId: 3
      }
    ],
    tasksForProject: null
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  // Obtener tareas de un proyecto
  const getTasksFromProyect = projectId => {
    dispatch({
      type: types.getTasksFromProject,
      payload: projectId
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        tasksForProject: state.tasksForProject,
        getTasksFromProyect
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
