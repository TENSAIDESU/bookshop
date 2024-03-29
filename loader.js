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

const getAndShowBooks = async () => {
  let books = await useRequestBooks (currentSubject, currentStep * GET_COUNT_BOOKS, GET_COUNT_BOOKS);

  currentStep++

  books.forEach((book) =>{
    let img = book.volumeInfo.imageLink && book.volumeInfo.imageLink.thumbnail;
    if(img == undefined) img = './imgslider/place-holder.png';
    let authors = book.volumeInfo && book.volumeInfo.authors;
    authors == undefined ? authors = '' : authors.join(',');
    let title = book.volumeInfo.title;
    let description = book.volumeInfo.description;
    let averageRating = book.volumeInfo.averageRating;
    let ratingCount = book.volumeInfo.ratingCount; 
    let saleability = book.saleInfo.saleability;
    let selfLink = book.selfLink;
    let price = '';
    let priceType = '';

    if(saleability === "FOR_SALE"){
      cost = book.saleInfo.retailPrice.amount;
      costType = book.saleInfo.retailPrice.currentCode;
    }
    let newBook = showBooks(createCard(), img, authors, title, description, price, priceType, averageRating, ratingCount, selfLink);
    document.querySelector('.card').append(newBook);

    if (bagshop.has(selfLink)){
      swapBuyButton(newBook.querySelector('.buy-btn'))
    }
  })
}
 const showBooks = (Element, img, authors, title, description, price, priceType, averageRating, ratingCount) =>{
 let elementImage = Element.querySelector('.card_image img');
elementImage.src = img;

let elemetnAuthors = element.querySelector('.card_author');
elemetnAuthors.innerText = authors;

let elementTitle = element.querySelector('.card_title');
if (title) elementTitle.innerText = title;
let elementDescription = element.querySelector('.card_info');
if(description) elementDescription.innerText = description;

let elementprice = element.querySelector('.card_price');
let fullprice=price+ priceType;
if(fullprice) elementprice.innerText = fullprice;

let elementaverageRating = element.querySelector('.card_Rating');
if (averageRating) elementaverageRating.innerText = averageRating;

let elementratingCount = element.querySelector('.card_count');
elementratingCount = ratingCount;
 }

const createCard = () => {
  let card = document.createElement('.div');
  card.className='cards_card';

  card.innerHTML = `
  <div class ="card_image">
  <img src="" alt="book image">
  </div>
  <div class="card_desribtion">
     <div class="card_author"></div>
    <div class="card_title"></div>
      <div class="rating">
    <div class="card_rating"</div>  
    <div class="card_count"</div>
    </div>
    <div class="card_info"></div>
    <div class="card_price></div>
  </div>
  `
  card.appendChild(image);
  card.appendChild(authors);
  card.appendChild(title);
  card.appendChild(description);
  if (bookData.rating) {
      card.appendChild(rating);
  }

  if (bookData.price) {
      card.appendChild(price);
  }

  document.body.appendChild(card);
}
document.querySelectorAll('nav-category-list li').forEach((category) => {
  category.addEventListener('click', () => {
      
      document.querySelectorAll('nav-category-list li').forEach((category) => {
          category.classList.remove('active');
      });
      category.classList.add('active');
  });
});
    function movecategory(num) {
parentCat.innerLinks += `<div class="link n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${images[index].title}</div>`;
      updateSelectElement(num);}
document.querySelector('.cards').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
      loadBooks(currentCategory, startIndex, maxResults);
  }
})
function updateSelectElement(num){
  document.querySelector('.link.active').classList.remove('active');
  document.querySelector(`.link.n${num}`).classList.add('active');
}