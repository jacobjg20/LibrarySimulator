

var me = new book("jacob");
me.getName();
function book(name){
  var other = name;

  this.getName = function(){
    console.log(other);
  }
}
