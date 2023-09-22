function getTotalBooksCount(books) {
  return books.length
}
//this function is just asking for the length of books so returning the books.length will give me that 
function getTotalAccountsCount(accounts) {
  return accounts.length
}
// this function is simple it is only asking for how many accounts so accounts.length

function getBooksBorrowedCount(books) {
  return books.reduce((count, book) => {
    if (book.borrows[0].returned === false) {
      count++; //checks the books in the library to see if they are checked out or not. The [0] checks the first index in the array. 
    }
    return count;
  }, 0); //had to set this to zero bc of the accumulator aka count 
} // also I used the recude method but I could have used filter or the forEach function.


 function getMostCommonGenres(books) {
  const total = {};

  
  books.forEach((bookObj) => {
    const { genre } = bookObj;
    if (!total[genre]) {
      total[genre] = 1;
    } else {
      total[genre]++;
    }
  });

  const genreArray = [];
  for (let genName in total) {
    genreArray.push({ name: genName, count: total[genName] });
  }

  genreArray.sort((a, b) => b.count - a.count);
  return genreArray.slice(0, 5);
}


function getMostPopularBooks(books) {
  const borrowCounts = {};

  books.forEach((book) => {
    const { title, borrows } = book;
    if (!borrowCounts[title]) {
      borrowCounts[title] = borrows.length;
    } else {
      borrowCounts[title] += borrows.length;
    }
  });

  const popularBooks = [];

  for (let title in borrowCounts) {
    popularBooks.push({ name: title, count: borrowCounts[title] });
  }

  popularBooks.sort((a, b) => b.count - a.count);

  return popularBooks.slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  const authorBorrowCounts = {};

  books.forEach((book) => {
    const { authorId } = book;
    const author = authors.find((author) => author.id === authorId);

    const authorName = combineNames(author.name.first, author.name.last); // Use the combineNames function

    const popularBooks = getMostPopularBooks([book]);

    if (!authorBorrowCounts[authorName]) {
      authorBorrowCounts[authorName] = popularBooks.length > 0 ? popularBooks[0].count : 0;
    } else {
      authorBorrowCounts[authorName] += popularBooks.length > 0 ? popularBooks[0].count : 0;
    }
  });

  const popularAuthors = [];

  for (let authorName in authorBorrowCounts) {
    popularAuthors.push({ name: authorName, count: authorBorrowCounts[authorName] });
  }

  popularAuthors.sort((elementA, elementB) => elementB.count - elementA.count);

  return popularAuthors.slice(0, 5);
}


function combineNames(firstName, lastName) {
    return `${firstName} ${lastName}`;
}





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
