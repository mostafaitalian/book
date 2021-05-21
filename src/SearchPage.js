import React, {Component} from 'react';
import Book from './Book'
import SearchBooks from './SearchBooks';
function getSafe(fn, defaultValue){
try{
if(fn()===undefined){
  return defaultValue;
}
else{
return fn();
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
class SearchPage extends Component{
state={
searchValue: '',
bookss:[]
}
handleSelect = (name) => this.setState({searchValue:name})
handleSearch = (name) => (this.setState({searchValue:name}))
updateBook = (books)=>this.setState((previous)=>({bookss:books}))
render(){
const {books} = this.props;
const {bookss, searchValue} = this.state;
let resultBooks = [];

if(bookss !== undefined){
let i = Object.keys(bookss);
for(let x of i){
    resultBooks=resultBooks.concat([bookss[x]]);
} }   else{
  resultBooks = []
}

return(

  
<div>
 

  <SearchBooks updateBooks={this.updateBook} searchString={this.state.searchValue} searchBooks={(name)=>this.updateBook(name)} handleOnSearch={this.handleSearch} books={books} searchPageBookss={this.state.bookss}/>



<div className='.search-books-results'>
<div className='books-grid'>
  {
  // resultBooks.filter(book=>{
  //   if(book.title === undefined){return null;}
  //   return book.title.split(' ').join('').toLowerCase().includes(this.state.searchValue!==undefined?this.state.searchValue.toLowerCase():' '.toLowerCase())})!==undefined && resultBooks.filter(book=>book.title.toLowerCase().includes(this.state.searchValue!==undefined?this.state.searchValue.toLowerCase():' '.toLowerCase())).map(book=>(
  // <li className='books-grid' key={book.id}><Book handleSelect={this.props.handleSelect} book={book}/></li>
  
  // ))
  //   searchValue!==undefined&&resultBooks!==null&&
  //   resultBooks.filter(book=>book?.title === undefined?<li>no books</li>:book.title.includes(searchValue)).map(book=>
  //     <li key={book.id}><Book book={book}/></li>)
  // 
resultBooks.filter(book=>getSafe(book, defaultValuee).title.trim().toLowerCase().includes(getSafe(this.state.searchValue.toLowerCase(),'x')))
.map(book=><li key={book.id}><Book updateBookState={this.props.updateBookState} handleSelect={this.props.handleSelect} likes={this.props.likes} handleLikes={this.props.handleLikes} handleSelect={this.props.handleSelect} seletedS={this.props.selectedShelf}   book={book} /></li>)
}
  </div>
  </div>
  
  {/* <div>{JSON.stringify("searchValue:"+this.state.searchValue)}</div>
<div>{JSON.stringify('bookss:'+ this.state.bookss)}</div> */}
</div>
);
}
}
export default SearchPage;