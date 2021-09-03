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

    case types.newTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case types.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
};
