import {applyMiddleware, combineReducers,legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer
}); 


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;