//LIBRARY PROJECT
// ?? store the books in an array.

const myLibrary = [];
//object constructor
function Books(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// add book to library
function addBookToLibrary() {
   let title = document.getElementById('title').value;
   let author = document.getElementById('author').value;
   let pages = document.getElementById('pages').value;
   let read = document.getElementById('read').checked;
   let newBook = new Books(title,author,pages,read);
   myLibrary.push(newBook);
   console.log(myLibrary);
   render();
};

//

let newBookbtn = document.getElementById('newbook');
let userInput = document.getElementById('userInput');
newBookbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    userInput.style.display="block";
}) 

//
let form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
 e.preventDefault();
 addBookToLibrary();
 });

// loop
function render() {

    let tbody = document.getElementById('tbody');
    tbody.innerHTML="";
    for (let i = 0; i < myLibrary.length; i++) {
    let book= myLibrary[i];
    console.log(book);
    let bookEl = document.createElement("tr");
    bookEl.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read ? "read" : 'not read yet'} </td>
    <td><button type= button onclick='removeBook(${i})'>Remove </button> </td>
    <td><button id=btnread class='toggle-read' type= button onclick='toggleRead(${i})'>Read</button>
    <button id=btnedit class='edit' type= button onclick='editInput(${i})'>Edit</button>
    </td>
    `;
    tbody.appendChild(bookEl);    
    }
    
}

//remove book

function removeBook(index) {
    myLibrary.splice(index, 1)
    render();
}

Books.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

// add an edit button // unfinished
let editUser = document.getElementById('editUserInput');

function editInput(index) {
    
    myLibrary[index];
    editUser.style.display="grid";
    editUser.style.position="absolute";
    editUser.style.top="45%";
    /* editUser.style.position="absolute"; */
    let editform = document.getElementById('editform');
    editform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let edittitle = document.getElementById('ed-title').value;
    let editauthor = document.getElementById('ed-author').value;
    let editpages = document.getElementById('ed-pages').value;
    let newBook = new Books(edittitle,editauthor,editpages);
    console.log( myLibrary.push (newBook));
    /* console.log(myLibrary.splice(index, newBook)); */
    myLibrary[index].findIndex("td:eq(0)").text(edittitle);
    myLibrary[index].find("td:eq(1)").text(editauthor);
    myLibrary[index].find("td:eq(2)").text(editpages);
    render();
    });
}

//
let closebtn= document.getElementById('close');
closebtn.addEventListener('click',(e)=>{
    editUser.style.display="none";
});
