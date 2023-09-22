

function findAuthorById(authors, id) {
  const result = authors.find((authorsObj)=>{
    return authorsObj.id===id
    // pretty simple just using find() to find the authors id that matches with the input id 
  })
  return result 
}

function findBookById(books, id) {
    const result =books.find((booksObj)=>{
    return booksObj.id===id
    })
    return result 
} //same exact concept as the last one 
                             

function partitionBooksByBorrowedStatus(books = []) {
  const checkedOut = [];
  const booksReturned = [];

  books.forEach((bookObj) => {
    const { borrows } = bookObj;
    const firstTransaction = borrows[0];
    
    if (firstTransaction.returned === false) {
      checkedOut.push(bookObj);
    } else {
      booksReturned.push(bookObj);
    }
  });

  return [checkedOut, booksReturned];
}


function getBorrowersForBook(book, accounts) {
  const result = [];
  let count = 0; //this counter is just to limit the results to 10 or fewer.
  book.borrows.forEach((borrow) => {
    const matchingAccount = accounts.find((account) => account.id === borrow.id); // using a forEach claim because we need to access the information inside of the accounts object.
    if (matchingAccount) {
      const { id, ...rest } = matchingAccount; //we need to destructure the id from the accounts because that is what we will be seeing is matching. then the ...rest is for the rest of the information that will be pushed to the array and the end aswell. it is the same for the next two lines of code.
      const borrowerInfo = { ...rest, returned: borrow.returned };
//
      if (count < 10) {
        //this if statement checks the counter before pushing the rusults because the instructions want it to return an array of ten or fewer
        result.push(borrowerInfo);
        count++; 
      }
    }
  });

  return result;
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
