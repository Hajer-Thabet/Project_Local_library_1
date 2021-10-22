function getTotalBooksCount(books) {
 
 return books.length;

}

function getTotalAccountsCount(accounts) {
  return getTotalBooksCount(accounts);
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc,book)=>{
    return(
      acc+
      book.borrows
      .filter(borrow=> borrow.returned===false)
      .reduce((total,borrow)=> total+1, 0));
  },0);
    
}
function getMostCommonGenres(books) { 
  let mostgenres={};
  let genre=books.forEach((book)=>{
    if(mostgenres[book.genre]==null){
      mostgenres[book.genre]=1;
    }else
    {
      mostgenres[book.genre]+=1;
    }   
  });
  
  let commongenres=[];
  for(const [key,value] of Object.entries(mostgenres)){
    commongenres.push({
      'name':key,
      'count':value
    });  
  }
   commongenres.sort((genreA,genreB)=> genreB.count-genreA.count);
    return commongenres.slice(0,5);    
}

function getMostPopularBooks(books) {
  const popularbooks=books.map(book=> ({name:book.title, count:book.borrows.length}));
  popularbooks.sort((titleA, titleB)=> titleB.count-titleA.count);
 return popularbooks.slice(0,5);
  
}
function getMostPopularAuthors(books, authors) {
  let mostpopular=[];
 authors.forEach((author)=>{
   let popular={
     name:`${author.name.first} ${author.name.last}`,
     count:0
   };
 
 books.forEach(book=>{
   if(book.authorId===author.id){
     popular.count+=book.borrows.length;
   }
 
 
 });
     mostpopular.push(popular);
 });
  mostpopular.sort((authorA,authorB)=> authorB.count-authorA.count);
  return mostpopular.slice(0,5);
     
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount, 
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
