const initial = {
  create: {},
  user: {},
  tasksArr: [],
}

export const taskManagerReducer = (state=initial, {type, payload}) => {
  switch(type){
    case "LOGIN" : return {...state, user: payload};
    case "SIGNUP" : return {...state, create: payload};
    case "CREATE_TASK" : return {...state, tasksArr: payload};
    default: return state;
  }
}