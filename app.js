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

const bookList = document.querySelectorAll("#book-list ul li .name")
console.log(bookList)

bookList.forEach(book => {
    console.log(book.textContent)
})

console.log(bookList[1].innerHTML)

// bookList.forEach(book => {
//     book.textContent = "new word";
// })
//
// bookList.forEach(book =>{
//     book.textContent += "(test)";
// })

const addBook = document.querySelector("#add-book")
console.log(addBook.lastElementChild.textContent)

console.log(addBook.parentNode)
console.log(addBook.previousElementSibling)
console.log(addBook.previousSibling)

const bookList2 = document.querySelector("#book-list ul")
console.log(bookList2)

bookList2.addEventListener('click', (event)=>{
    console.log(event)
    let className = event.target.className
    if(className === "delete"){
        let li = event.target.parentElement
        bookList2.removeChild(li)
    }
    console.log(className)
})

const searchBook = document.forms["search-books"];
const listOfBooks = document.querySelectorAll("#book-list li .name")
console.log(listOfBooks)
searchBook.addEventListener("keyup", function(event){
    let inputText = event.target.value.toLowerCase();

    listOfBooks.forEach((book)=>{
        let title = book.textContent.toLowerCase()
        let isIncludeInputText = title.includes(inputText)
        let parentNode = book.parentNode
        console.log(parentNode)
        if(isIncludeInputText){
            parentNode.style.display = "block";
        } else {
            parentNode.style.display = "none";
        }
    })
})

const addABook = document.forms["add-book"];
console.log(addABook)
addABook.addEventListener("submit", (event)=>{
    event.preventDefault()
    const inputValue = addABook.querySelector("input").value

    if(inputValue.trim()) {
        const liTag = document.createElement("li");
        const spanTag1 = document.createElement("span");
        const spanTag2 = document.createElement("span");

        liTag.appendChild(spanTag1);
        liTag.appendChild(spanTag2);

        spanTag1.className = "name"
        spanTag2.className = "delete"

        spanTag1.textContent = inputValue;
        spanTag2.textContent = "delete";

        bookList2.prepend(liTag) //adds to first
        //bookList2.appendChild(liTag) //adds to last

        addABook.reset();
    }
})


