// a reducer takes in two things
// 1. it takes in the action(info about what happened)
// 2. copy of current state



function posts(state = [], action){
  switch(action.type){
    case "INCREMENT_LIKES" :
    // return the update state
    console.log("increment likes")
    const i = action.index;
    return [
       ...state.slice(0,i), //before the one were updating
       {...state[i], likes: state[i].likes + 1},
       ...state.slice(i + 1), //after the one we are updating
    ]
    default:
      return state;
  }
}
export default posts;
