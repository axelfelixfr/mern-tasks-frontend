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
        tasks: [action.payload, ...state.tasks]
      };

    case types.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case types.editTask:
    case types.changeStateTask:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      };

    // case types.getTaskSelected:
    //   return {
    //     ...state,
    //     taskSelected: action.payload
    //   };

    default:
      return state;
  }
};
