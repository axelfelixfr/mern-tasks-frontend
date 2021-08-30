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

    default:
      return state;
  }
};
