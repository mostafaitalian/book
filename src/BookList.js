import React, {Component} from 'react'
import Book from './Book'
class BookList extends Component{


render(){
  const { books } = this.props;
return(<div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div>
                    <ol>
{this.props.likes.map(like=><li key={like.id}>{like.likes}-{like.id}</li>)}
                    </ol>
                  </div>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                {books.filter(book=>book.shelf.toLowerCase()==='currentlyreading').map(book=>(<li key={book.id}><Book likes={this.props.likes} handleLikes={this.props.handleLikes} updateBookState={this.props.updateBookState} handleSelect={this.props.handleSelect} seletedS={this.props.selectedShelf} book={book}/></li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                {books.filter(book=>book.shelf.toLowerCase()==='wanttoread').map(book=>(<li key={book.id}><Book updateBookState={this.props.updateBookState} likes={this.props.likes} handleLikes={this.props.handleLikes} handleSelect={this.props.handleSelect} seletedS={this.props.selectedShelf} book={book}/></li>))}

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
       {books.filter(book=>book.shelf.toLowerCase()==='read').map(book=>(<li key={book.id}><Book updateBookState={this.props.updateBookState} handleSelect={this.props.handleSelect} likes={this.props.likes} handleLikes={this.props.handleLikes} seletedS={this.props.selectedShelf} book={book}/></li>))}

                    </ol>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="open-search">
              <a href='/search'>Add a book</a>
            </div>
          </div>
{/* <div>
<ul>
{books.map(book=>(<li key={book.id}><Book book={book}/></li>))}
</ul>
</div> */}
        </div>);

}
}
export default BookList;