const defaultState = {
  count: 0,
};

const types = {
  plus: "PLUS",
  minus: "MINUS",
  divide: "DIVIDE",
  multiply: "MULTIPLY",
};

export const calculatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.plus:
      return { ...state, count: state.count + action.payload };

    case types.minus:
      return { ...state, count: state.count - action.payload };

    case types.divide:
      return { ...state, count: state.count * action.payload };

    case types.multiply:
      return { ...state, count: state.count / action.payload };

    default:
      return state;
  }
};


export const actionsOfCalc = (type, payload) => (
  {type: types[type], payload}
)