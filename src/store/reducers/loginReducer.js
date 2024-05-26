const initState = {
  isLogged: localStorage.getItem("isLogged") === "true" || false

};

 export const loginReducer = (state = initState, action) => {
    switch (action.type) {
      case "TOGGLE":
        const newState = { ...state, isLogged: !state.isLogged };
        localStorage.setItem("isLogged", newState.isLogged);
        return newState;
      default:
        return state;
    }
  };
