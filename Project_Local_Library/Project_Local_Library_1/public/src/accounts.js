function findAccountById(accounts, id) {
  return found=accounts.find(account => id===account.id);

}

function sortAccountsByLastName(accounts) {
 
  return Sort=accounts.sort((accountA,accountB)=> (accountA.name.last> accountB.name.last ? 1:-1));
}

function getTotalNumberOfBorrows(account, books) {
 let Id=account.id;
  return books.reduce((acc, book)=>{
   return (
       acc+
   book.borrows
   .filter(borrow=> borrow.id===Id)
   .reduce((total,borrow)=> total+1, 0)); 
  },0);
                     
}
 
 function getBooksPossessedByAccount(account, books, authors) {
 let Id=account.id;
   let books_taken=[];
   books.forEach(book=>{
     if(book.borrows.find(borrow=>
       borrow.id===Id && !borrow.returned)){
        books_taken.push(book);
   }
   });
books_taken.forEach(book=>{
  let author=authors.find(auth=> auth.id===book.authorId);
  book['author']=author;
  
})
return books_taken;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
