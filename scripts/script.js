//midterm JavaScript file
class Book{
  constructor (title, author, genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  displayBookInfo () {
    var title_line = "<strong>Title: </strong>" + this.title + "<br>\n";
    var auther_line = "<strong>Author: </strong>" + this.author + "<br>\n";
    var genre_line = "<strong>Genre: </strong>" + this.genre + "<br>\n";
    return (title_line + auther_line + genre_line);
  }
}


function addBook(){
  let title = prompt('Please enter the title of the book:');
  let author = prompt('Please enter the auther of the book:');
  let genre = prompt('please enter the genre of your book:');
  return new Book (title, author, genre);
}


var bookArray = [];
let i = 0;
while(i < 3){
  let user = addBook();
  i++
  bookArray.push(user);
}

for (let book of bookArray){
  document.writeln(book.displayBookInfo());
  document.writeln("_______________________________");
  document.write("<br>");
}

