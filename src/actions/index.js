const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

// const fetchBooksOld= (bookstoreService, dispatch) => () => {
//     dispatch(booksRequested());
// bookstoreService.getBooks()
// .then((data)=>
// dispatch(booksLoaded(data))
// )
// .catch((error)=>{dispatch(booksError(error))})
// }

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
bookstoreService.getBooks()
.then((data)=>
dispatch(booksLoaded(data))
)
.catch((error)=>{dispatch(booksError(error))})
}



export const bookAddedToCart = (bookID) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookID
    }
}

export const bookRemovedFromCart = (bookID) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookID
    }
}

export const allBooksRemovedFromCart = (bookID) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookID
    }
}

export {
    fetchBooks
};