function findAuthorById(authors, id) {
  return authors.find(author=> author.id===id);
}

function findBookById(books, id) {
  return books.find(book=> book.id===id);
}




function partitionBooksByBorrowedStatus(books) {
  return books.reduce((book,acc)=> {book[+(acc.borrows[0]&&acc.borrows[0].returned)].push(acc);  return book},[[],[]])
                    
}

function getBorrowersForBook(book, accounts) {
  let {borrows}= book;
  let borrowers= borrows.map(({id, returned})=>
                             {let account=
                   accounts.find(acc=> acc.id===id);
     return{
      ...account,
        returned};
                             
});
  return borrowers
  .sort((borrowA,borrowB)=>{
       return borrowA.id>borrowB.id;})
  .slice(0,10);
}
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
