import React from 'react'

function BookShelf({title, genre, author, image, currentUser, setBookList, bookShelf, fullBookList}) {

    
    function openUserBookshelf(currentUser, bookShelf, setBookList, fullBookList) {
            console.log(currentUser)
        //     //grabs user_id once they are logged in
                //on clicking my bookshelf, will load bookshelf data, collect book ids, and use them to display book data like in main display

                // const id = currentUser.id
                // const userBookShelf = bookShelf.filter((usb)=> usb.user_id.includes(id))
                console.log(bookShelf)
                // const openBookShelf = fullBookList.filter((book)=> book.id.includes(userBookShelf.book_id))
                // setBookList(openBookShelf)
    
    }

        
    return (
        <div>
            <h4 onClick={(e) => openUserBookshelf(currentUser)}>My Bookshelf</h4>
        </div>
    )
}


export default BookShelf
