// Get references to input fields and table body
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Function to add a book to the table
function addBook(title, author, isbn) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.innerText = title;

    const authorCell = document.createElement("td");
    authorCell.innerText = author;

    const isbnCell = document.createElement("td");
    isbnCell.innerText = isbn;

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Clear";
    deleteBtn.addEventListener("click", () => {
        row.remove();
    });
    deleteCell.appendChild(deleteBtn);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(isbnCell);
    row.appendChild(deleteCell);

    bookList.appendChild(row);
}

// Event listener for submit button
submitBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    if (title && author && isbn) {
        addBook(title, author, isbn);

        // Clear input fields
        titleInput.value = "";
        authorInput.value = "";
        is

