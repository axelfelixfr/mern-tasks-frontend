import { types } from '../types/types';

export const projectsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.openModalProject:
      return {
        ...state,
        modalProject: action.payload
      };

    case types.getProjects:
      return {
        ...state,
        projects: action.payload
      };

    case types.newProject:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };

    case types.selectProject:
      return {
        ...state,
        selectProject: state.projects.filter(
          project => project.id === action.payload
        )
      };

    case types.deleteProject:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        ),
        selectProject: null
      };

    default:
      return state;
  }
};
