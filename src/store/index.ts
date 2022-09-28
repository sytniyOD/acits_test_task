
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;