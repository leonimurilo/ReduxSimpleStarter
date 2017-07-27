// contains all the actions creators
export function selectBook(book){
    console.log("Book has been selected ", book.title);
    // selectBook is an action creator and needs to return an action (that must have type and probably a payload)
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}