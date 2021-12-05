console.log("hii");
// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
// to display
function Display() {

}
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td><button type="button" class="btn btn-info">Info</button></td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}


Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, dispalyMessage, msgerror) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${msgerror}</strong> ${dispalyMessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}



// add sumbit event listener to library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let others = document.getElementById('others');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (fiction.checked) {
        type = cooking.value;
    }
    else if (others.checked) {
        type = others.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added', 'Message :');
    }
    else {
        display.show('danger', ' Sorry you cannot add your book.', 'Error :');
    }
// let  = localStorage.getItem("BookName",name);
    // let myObj = {
    //     name: name.value,
    //     author: author.value,

    // }
    // uiString.push(myObj);
localStorage.setItem("BookName", name);
    localStorage.setItem("Author", author);
    localStorage.setItem("Type", type);
    e.preventDefault();

}


