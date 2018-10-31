const INITIAL_STATE = {
    students: {},
  };
  
  const applySetStudents = (state, action) => ({
    ...state,
    students: action.students
  });
  
  function studentReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'STUDENTS_SET' : {
        return applySetStudents(state, action);
      }
      default : return state;
    }
  }
  
  export default studentReducer;