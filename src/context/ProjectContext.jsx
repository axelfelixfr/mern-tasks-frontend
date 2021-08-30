import React, { useReducer, createContext } from 'react';
import { projectsReducer } from '../reducers/projectsReducer';
import { types } from '../types/types';
import { v4 as uuid } from 'uuid';
export const ProjectContext = createContext();

const ProjectProvider = props => {
  const initialState = {
    modalProject: false,
    projects: [],
    selectProject: null
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

  const openModalProject = openModal => {
    dispatch({ type: types.openModalProject, payload: openModal });
  };

  const getProjects = () => {
    dispatch({ type: types.getProjects, payload: projects });
  };

  const newProject = project => {
    const id = uuid();
    project.id = id;

    dispatch({
      type: types.newProject,
      payload: project
    });
  };

  const selectedProject = idProject => {
    dispatch({
      type: types.selectProject,
      payload: idProject
    });
  };

  const deleteProject = idProject => {
    dispatch({
      type: types.deleteProject,
      payload: idProject
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        modalProject: state.modalProject,
        projects: state.projects,
        selectProject: state.selectProject,
        openModalProject,
        getProjects,
        newProject,
        selectedProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
