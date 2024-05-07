//By Id
const wrapper = document.getElementById("wrapper")
console.log(wrapper)

//By className
const title = document.getElementsByClassName("title")
console.log(title)
console.log(Array.isArray(Array.from("title")));

//By TagName
const head = document.getElementsByTagName("head")
console.log(head)

//By QuerySelector
const bookList = document.querySelectorAll("#book-list ul li")
console.log(bookList)

bookList.forEach(book => {
    console.log(book.textContent)
})

console.log(bookList[1].textContent)
