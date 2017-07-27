/**
 * Created by Leoni on 7/26/2017.
 */

// default state as null because when the app first starts there will be no selected book (maybe)
// and since redux doesn't let us return undefined, we set is as null
export default function (state = null, action) {
    switch (action.type){
        case "BOOK_SELECTED":
            return action.payload;
        default:
            return state;
    }
}