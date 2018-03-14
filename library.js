function author(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

function book(title , publicationDate , callNumber, author){
  this.title = title;
  this.available = true;
  this.publicationDate = new Date(publicationDate);
  this.checkOutDate;
  this.fine = 0;
  this.callNumber = callNumber;
  this.authors = [];
  //Pushes authors into authors array
  this.authors.push(author);

  //sets current date to the checkedoutDate and sets available to false
  this.checkOut = function(currentDate){
    let date = currentDate;
    this.checkOutDate;
    this.available = false;
  }

  //set the avaiablity to true
  this.checkIn = function(){
    this.available = true;
  }

  //Is overDue function needs work
  this.isOverdue = function(currentDate){
    if((currentDate - this.checkOutDate) > 14){
      this.fine += 5.00;
    }
  }
}

function patreon(firstName, lastName, libraryCardNumber){
  this.firsName = firstName;
  this.lastName = lastName;
  this.libraryCardNumber = libraryCardNumber;
  this.bookBackpack = [];
  this.fines;

  //Adds Book To Array
  this.addBookToBackpack = function(book){
    this.bookBackpack.push(book);
  }

  //retrun Book from bookBackpack
  this.removeBookFromBackpack = function(callNumber){

  }
}
