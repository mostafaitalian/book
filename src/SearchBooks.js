import React, { Component } from 'react';
import {search} from './BooksAPI';
import Book from './Book';
import BookList from './BookList';

class SearchBooks extends Component{
state={bookss:[],
error:null} 

onSearch=(event)=>{
    const value = event.target.value;
    this.props.handleOnSearch(value);
    const books = search(value)
    books.then((bookss)=>this.props.updateBooks(bookss));
    //books.then((books)=>this.props.updateBook(books));
}

handleOnChange= (e)=>{
const inputValue = e.target.value;  //get value from input field
if(inputValue!=''){
this.props.handleOnSearch(inputValue);  //set the state of searchValue of searchpage
//let stateBook= this.state.bookss;
let books = search(inputValue)
//.then((stateBook)=>{if(stateBook===null){return this.setState({bookss:[]})}});
 //get all books using by searching the api using inputValue
 
    books.then((book)=>console.log('searceh bookss', books))
    try{
    books.then(books=>(books!== null?this.setState({bookss:books}):this.setState({bookss:[]})))
    //books.then(books=>this.setState({bookss:books})).then(()=>console.log(this.state.bookss));
    
    books.then((books)=>this.props.searchBooks(books)) //update the state of searchpage bookss
    books.then(()=>console.log('searchPageBooks',this.props.searchPageBookss));}
    catch(error){
        this.setState({error:error});
        this.setState({books:[]})
        }
}else{
    this.props.books=[];
}



}




render(){
    if (this.state.error) {
        return <h1>Caught an error.</h1>
      }
const {searchString} = this.props
return(
  
<div className='search-books-bar'>
<a href='/' className='close-search'>Add a book</a>

<div className='search-books-input-wrapper'>


<input type='text' value={searchString} onChange={(event)=>this.onSearch(event)}/>
</div>
</div>

           

);
}
}
export default SearchBooks;