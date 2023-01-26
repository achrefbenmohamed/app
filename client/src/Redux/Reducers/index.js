import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer"
import ErrorsReeducer from "./ErrorReeducer";
import MovieReducer from "./MovieReducer";
const rootReducer = combineReducers({AuthReducer,ErrorsReeducer,MovieReducer})


export default rootReducer