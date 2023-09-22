 

function findAccountById(accounts, id) {
    const result = accounts.find((accountsObj)=>{
    return accountsObj.id === id
    })
    return result 
}

    
function sortAccountsByLastName(accounts) {
   accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last.toLowerCase();
    const lastNameB = accountB.name.last.toLowerCase();
   
    if (lastNameA < lastNameB) {
      return -1;
    } else if (lastNameA > lastNameB) {
      return 1;
    }
     }) 
  return accounts
}
                 
function getTotalNumberOfBorrows(account, books) {
  let total = 0 
  const {id} = account;
  books.forEach((booksObj)=>{
  const {borrows} = booksObj;
    borrows.forEach((borrowsObj)=>{
      if(borrowsObj.id===id){
        total ++
      }
    })
    
  })
  return total 
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account;

 
  const checkedOutBooks = books.filter((book) => {
    const currentBorrow = book.borrows[0];  
    return currentBorrow.id === id && !currentBorrow.returned;
  });
  const booksWithAuthors = checkedOutBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });

  return booksWithAuthors
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
