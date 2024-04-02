const API_Key='AIzaSyDszvaaBOPGUYhjJ5L2m_OvNUPs6U6CH78';
const GET_COUNT_BOOKS= 6;
let currentStep = 0;
let currentSubject = document.querySelector('.nav-category-list__item').getAttribute('data-category');


const useRequestBooks =(subject, start, count) => {
return fetch (`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&key=${API_Key}&printType=books&startIndex=${start}&maxResults=${count}&langRestrict=en`)
.then((response)=> {
  return response.json();
})
.then((json) => {
  return json['items'];
})
.catch(() => {console.log(error)});
}

function loadMore() {
  fetch(useRequestBooks)
    .then(response => response.json())
    .then(() => {
      const btnNode = document.querySelector('.btn');
btnNode.addEventListener('click', function() {
loadMore()
})
   })

}


const getAndShowBooks = async () => {
  let books = await useRequestBooks (currentSubject, currentStep * GET_COUNT_BOOKS, GET_COUNT_BOOKS);

  currentStep++

  books.forEach((book) =>{
    let img = book.volumeInfo.imageLink?.thumbnail ?? './imgslider/place-holder.png';
    let authors = book.volumeInfo?.authors ?? 'No authors';
    let title = book.volumeInfo.title;
    let description = book.volumeInfo.description ?? 'no describtion';
    let averageRating = book.volumeInfo?.averageRating ?? '';
    let ratingCount = book.volumeInfo?.ratingCount ?? ''; 
    let saleability = book.saleInfo.saleability;
    let price = book.saleInfo?.retailPrice;
    let priceType = book.saleInfo?.retailPrice;

    let fullprice=price + priceType;
     if(fullprice) elementprice.innerText = fullprice;

    if(saleability === "FOR_SALE"){
      price = book.saleInfo.retailPrice?.amount;
      priceType = book.saleInfo.retailPrice?.currentCode;
    }
    const newBook = `
    <div class="card_item">
    <div class ="card_item__image">${img}</div>
      <div class="desribtion">
         <div class="card_item__author">${authors}</div>
        <div class="card_item__title">${title}</div>
          <div class="rating">
        <div class="card_item__rating">${averageRating}</div>  
        <div class="card_item__count">${ratingCount}</div>
        </div>
        <div class="card_item__desribtion">${description}</div>
        <div class="price">
        <div class="card_item__price>${price}</div>
        <div class="card_item__priceType>${priceType}</div>
        </div>
      <button class="buy-btn" onclick="toggleCart(this)">Buy now</button> 
      </div>
    `
    document.querySelector('.card').innerHTML += newBook;
  })
}
 
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('link')) {
    document.querySelector('.card').innerHTML='';
      currentSubject = event.target.innerText;
     getAndShowBooks()
  }
})


function activeCategory(category) {
  const categories = document.querySelectorAll('.nav-category-list__item');
  categories.forEach((cat) => {
      cat.classList.remove('active');
  });
  category.classList.add('active');
}

