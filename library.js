function author(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

function book(title , publicationDate , callNumber, author){
  this.title = title;
  this.available = true;
  this.publicationDate = new Date(publicationDate);
  this.checkOutDate = new Date();
  this.callNumber = callNumber;
  this.authors = [];

  //Pushes authors into authors array
  this.authors.push(author);
}
