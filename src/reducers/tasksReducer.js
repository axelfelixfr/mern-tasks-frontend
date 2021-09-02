import { types } from '../types/types';

export const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getTasksFromProject:
      return {
        ...state,
        tasksForProject: state.tasks.filter(
          task => task.projectId === action.payload
        )
      };

    default:
      return state;
  }
};
