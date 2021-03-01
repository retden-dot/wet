import { createStore } from "redux";
import { setData } from "./reducer";


export const store = createStore(setData,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
