let book = {
    title: "Javascript Noob to Pro",
    author: "john locke",
    price: "99.99"
}

console.log("book title:" + book.title)
console.log("book author:" + book.author)
console.log("book price:" + book.price)

book.price = 99.99;
console.log("updated book price" + book.price);

book.publisher = "guide publishers"
console.log("Publishers" + book.publishers);

function printBookdetails(bookObj) {
    console.log("\newBook Details:");
    console.log("title" + bookObj.title)
    console.log("author" + bookObj.author)
    console.log("price" + bookObj.price)
    console.log("Publishers" + bookObj.publisher)
}
printBookdetails(book);



