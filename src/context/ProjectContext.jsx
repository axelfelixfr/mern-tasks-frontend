import React, { useReducer, createContext } from 'react';
import { projectsReducer } from '../reducers/projectsReducer';
import { types } from '../types/types';

export const ProjectContext = createContext();

const ProjectProvider = props => {
  const initialState = {
    projects: []
  };

  const projects = [
    { id: 1, name: 'MERN' },
    { id: 2, name: 'Vue' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'Bootstrap' }
  ];

  const [state, dispatch] = useReducer(projectsReducer, initialState);

  // const { projects } = state;

  const getProjects = () => {
    dispatch({ type: types.getProjects, payload: projects });
  };

  return (
    <ProjectContext.Provider value={{ projects: state.projects, getProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
