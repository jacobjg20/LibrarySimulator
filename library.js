function author(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

function book(title , publicationDate , callNumber, author){
  this.title = title;
  this.available = true;
  this.publicationDate = new Date(publicationDate);
  this.checkOutDate;
  this.callNumber = callNumber;
  this.authors = [];
  //Pushes authors into authors array
  this.authors.push(author);

  this.checkOut = function(currentDate){
    let date = currentDate;
    this.checkOutDate;
    this.available = false;
  }
}

function patreon(firstName, lastName, libraryCardNumber){
  this.firsName = firstName;
  this.lastName = lastName;
  this.libraryCardNumber = libraryCardNumber;
  this.booksCheckedOut = [];
  this.fines;
  //Add Book To Array
}
