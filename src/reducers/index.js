import { combineReducers } from "redux";
import BooksReducer from "./books"

// consolidates reducers into the application state
// the application state is composed by what is returned from each reducer.
// reducers can return different things depending on the actions that happens during the execution of the app
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
