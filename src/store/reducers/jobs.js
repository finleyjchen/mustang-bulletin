import { GET_JOBS, ADD_JOB, REMOVE_JOB } from '../actions/index';
function jobsReducer(state = [], action) {
    switch (action.type) {
      case GET_JOBS:
        return action.jobs;
      case ADD_JOB:
        return [...state, action.job];
      case REMOVE_JOB:
         return state.filter(job => job.title !== action.job.title)

      default:
        return state;
    }
  }

export default jobsReducer;