import { combineReducers } from "redux";
import BooksReducer from "./books"

// consolidates reducers into the application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
