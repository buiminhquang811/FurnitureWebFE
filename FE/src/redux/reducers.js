import { combineReducers } from "redux";
import reducerRegistry from "./../helpers/ReducerRegistry";



export default combineReducers({
    ...reducerRegistry.getReducers(),
});
