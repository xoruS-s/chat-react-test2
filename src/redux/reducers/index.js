import { combineReducers } from "redux"; // соединяет все reducers
import dialogs from "./dialogs";
import messages from "./messages";

export default combineReducers({
    dialogs,
    messages
});