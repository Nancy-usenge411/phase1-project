
let booksArray = []

function submit() {
    const input = document.getElementById("myInput");
    const inputValue = input.value;
    console.log(inputValue);

    const apikey="AIzaSyCx71clb4BYk_8sofsdG5SzV1ZFBiGwWTY"
    fetch("https://www.googleapis.com/books/v1/volumes?key=" + apikey + "&q=intitle:" + inputValue)
  .then(response => response.json())
  .then(result => {
    const bookContainer = document.getElementById("book-container")
    bookContainer.innerHTML = null
    booksArray = result.items
    booksArray.map((book) => {
        const individualBook = document.createElement('div')
        const individualBookImage = document.createElement('img')
        const individualBookTitle = document.createElement('p')
        const individualBookAuthor = document.createElement('p')
        
        individualBook.className = 'book-div'
        individualBookImage.className = 'book-image'
        individualBookImage.src = book.volumeInfo.imageLinks.smallThumbnail
        individualBookTitle.innerText = book.volumeInfo.title
        individualBookAuthor.innerText = book.volumeInfo.authors[0]
        individualBook.append(individualBookImage)
        individualBook.append(individualBookTitle)
        individualBook.append(individualBookAuthor)

        bookContainer.append(individualBook)
    })
  })
}


function clearBtn() {
    console.log("TEST")
    const input=document.getElementById('myInput')
    input.value = ''

    const bookContainer = document.getElementById("book-container")
    bookContainer.innerHTML = null
 
}
