import React, {Component} from 'react';
import './App.css'; 
import { update, search } from './BooksAPI'

function getSafe(fn, defaultValue){
  try{
  if(fn===undefined){
    return defaultValue;
  }
  else{
  return fn;
  }
  }
  catch(e){
    return defaultValue;
  }
  }
  const defaultValuee={
    title: 'The Linux Command Line',
    subtitle: 'A Complete Introduction',
    authors: [ 'William E. Shotts, Jr.' ],
    publisher: 'No Starch Press',
    publishedDate: '2012',
    description: `You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial "shell shock," you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's "Evolution of a SysAdmin"`,
    industryIdentifiers: [ [Object], [Object] ],
    readingModes: { text: true, image: false },
    pageCount: 480,
    printType: 'BOOK',
    categories: [ 'COMPUTERS' ],
    averageRating: 4,
    ratingsCount: 2,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '1.2.2.0.preview.2',
    panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api',
    canonicalVolumeLink: 'https://market.android.com/details?id=book-nggnmAEACAAJ',
    id: 'nggnmAEACAAJ',
    shelf: 'currentlyReading'
  }

class Book extends Component{
state={
shelf: ''
}
handleOnChange=(event) =>{
  event.preventDefault();
	const valuee = event.target.value;
    update(this.props.book,valuee).then(b=>
    console.log(b)).then(b=>this.setState({shelf: valuee}))
    //updatedBook.then(b=>
    //b.then(b=>this.setState({shelf:b.shelf}))
    //this.setState({shelf:updatedBook.shelf})
    this.props.handleSelect(this.props.book, valuee)
    this.props.book.shelf = valuee
    this.props.updateBookState(this.props.book);
    //const bs = search('t').then(bbs=>console.log(bbs))
}
handleL = (event)=>{
  event.preventDefault();
  this.props.handleLikes(this.props.book.id);
  console.log('likes')
}

//{`${book.imageLinks.thumbnail}`}  
render(){
const {book, likes}= this.props;
//const noOfLikes = likes.filter((like)=>like.id===book.id)[0].likes;
const full = `url('${getSafe(book.imageLinks,defaultValuee.imageLinks).thumbnail}')`;
return(
      <div className="book">
          <div className="book-top">
          <div className='book-shelf-like' style={{float:'left'}}>
                              <form onSubmit={(event)=>this.handleL(event)} >
                          <button></button>
                          </form>
                          </div>
               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: full }}></div>
                            
                            <div className="book-shelf-changer">
                              <select name='shelf' value={book.shelf} onChange={(event)=>this.handleOnChange(event)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option selected value="none">None</option>
                              </select>
                            </div>
                           
                           
                          </div>
                        
                          
<div className="book-title">{book.title}</div>
                          
{/* <div className="book-authors">You have {JSON.stringify(this.props.likes)} {this.props.likes[book.id]}</div> */}
{JSON.stringify('idddd' + this.props.likes[book.id])}
							{/* <div>
{JSON.stringify(this.state)}
							</div> */}
                        </div>
);
}

}
export default Book;