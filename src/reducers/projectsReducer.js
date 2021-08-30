import { types } from '../types/types';

export const projectsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getProjects:
      return {
        ...state,
        projects: action.payload
      };

    default:
      return state;
  }
};
