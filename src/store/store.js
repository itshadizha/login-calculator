import { combineReducers, createStore } from "redux";
import { calculatorReducer } from "./reducers/calculatorReducer";
import { loginReducer } from "./reducers/loginReducer";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    login: loginReducer,
})

export const store = createStore(rootReducer)