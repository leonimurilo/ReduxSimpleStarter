/**
 * Created by Leoni on 7/25/2017.
 */
import React, {Component} from "react";

// import the connect function which will allow us to turn this component into a smart component (container)
// it is what connects react and redux
import {connect} from "react-redux";

class BookList extends Component {
    constructor(props){
        super(props);
    }

    renderList(){
        return (
            this.props.books.map((book) => {
                return (
                    <li key={book.title} className="list-group-item">
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

// the connect function will take the mapStateToProps function and the component to return a container
// it will connect to the redux store
export default connect(mapStateToProps)(BookList);