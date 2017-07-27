/**
 * Created by Leoni on 7/25/2017.
 */
import React, {Component} from "react";

// import the connect function which will allow us to turn this component into a smart component (container)
// it is what connects react and redux
import {connect} from "react-redux";

// import the action creator
import {selectBook} from "../actions/index";

// import the binder
import {bindActionCreators} from "redux";

class BookList extends Component {
    constructor(props){
        super(props);
    }

    renderList(){
        return (
            this.props.books.map((book) => {
                return (
                    <li
                        key={book.title}
                        className="list-group-item"
                    onClick={()=> this.props.selectBook(book)}>
                        {book.title}
                    </li>
                );
            })
        );
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// take the application state and its return will show up as props inside of BookList container
// a big part of the glue between react and redux
// if the state changes, the container will be re-rendered with the new list of books
// and whenever the state changes, the object returned by this function, will be assigned as the props of the container
function mapStateToProps(state){
    return {
        books: state.books
    }
}

// anything returned from this function will end up as props on the BookList (this component)
function mapDispatchToProps(dispatch){
    // whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// the connect function will take the map functions and the component to return a container
// it will connect to the redux store
// this function will make all the properties returned by the map functions to this smart component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);