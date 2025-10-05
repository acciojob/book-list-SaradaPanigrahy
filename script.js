//your JS code here. If required.
let titleInput = document.querySelector("#title");
let authorInput = document.getElementById("author");
let isbnInput = document.getElementById("isbn");
const submitBtn = document.querySelector("#submit");
const bookList = document.querySelector("#book-list");

function addToBookList(title, author, isbn) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.innerText = title;

    const authorCell = document.createElement("td");
    authorCell.innerText = author;

    const isbnCell = document.createElement("td");
    isbnCell.innerText = isbn;

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'X';
    deleteButton.addEventListener("click", () => {
        row.remove();
    })

    deleteCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(isbnCell);
    row.appendChild(deleteCell);

    bookList.appendChild(row);
}

submitBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    if(title && author && isbn) {
        addToBookList(title, author, isbn);

        titleInput.value = "";
        authorInput.value = "";
        isbnInput.value = "";
    }
    else {
        alert("Pleae fill all details");
    }
})
