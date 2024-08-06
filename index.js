
let booksArray = []

function submit() {
    const error = document.getElementById("error")
    error.style.display="none"
    const input = document.getElementById("myInput");
    const inputValue = input.value;
    if (inputValue.trim().length===0){
      error.style.display="block"
      return
    }
    const bookContainer = document.getElementById("book-container")
    bookContainer.innerHTML = null
    const loading = document.getElementById("loading")
    loading.style.display="block"

    const apikey="AIzaSyCx71clb4BYk_8sofsdG5SzV1ZFBiGwWTY"
    fetch("https://www.googleapis.com/books/v1/volumes?key=" + apikey + "&q=intitle:" + inputValue.trim())
      .then(response => response.json())
      .then(result => {
        loading.style.display="none"
        booksArray = result.items
        booksArray.map((book) => {
            const individualBook = document.createElement('div')
            const individualBookImage = document.createElement('img')
            const individualBookTitle = document.createElement('p')
            const individualBookAuthor = document.createElement('p')
            
            individualBook.className = 'book-div'
            individualBookImage.className = 'book-image'
            individualBookImage.src = book.volumeInfo.imageLinks?.smallThumbnail || book.volumeInfo?.previewLink
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
    const input=document.getElementById('myInput')
    input.value = ''

    const bookContainer = document.getElementById("book-container")
    bookContainer.innerHTML = null
 
}
