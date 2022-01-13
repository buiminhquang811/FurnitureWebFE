import { combineReducers } from "redux";
import reducerRegistry from "./../helpers/ReducerRegistry";
import RegisterReducer from "../components/Register/redux/reducer";
import LoginReducer from "../components/Login/redux/reducer";


reducerRegistry.register("RegisterReducer", RegisterReducer);
reducerRegistry.register("LoginReducer", LoginReducer);

export default combineReducers({
    ...reducerRegistry.getReducers(),
});
