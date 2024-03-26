function loadBooks(category, startIndex, maxResults) {
  key= AIzaSyDszvaaBOPGUYhjJ5L2m_OvNUPs6U6CH78;
}

document.querySelectorAll('nav-category-list li').forEach((category, index) => {
  category.addEventListener('click', () => {
      
      document.querySelectorAll('nav-category-list li').forEach((cat) => {
          cat.classList.remove('active');
      });
      category.classList.add('active');
      loadBooks(category.textContent, 0, 6);
  });
});
 function initLinks(){
      const links = document.querySelectorAll(".link");
      links.forEach(linkItem => {
        linkItem.addEventListener("click", function(event) {
          let curNumber = +event.target.dataset.index;
          movecategory(curNumber);
        });
      });
    }
   
    function movecategory(num) {
parentCat.innerHTML += `<div class="link n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${images[index].title}</div>`;
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

let cartCounter = 0;

function toggleCart(button) {
    if (button.classList.contains('added')) {
        button.classList.remove('added');
        button.textContent = 'Buy now';
        button.style.border = ' 2px solid #4C3DB2'; 
        button.style.color= '#4C3DB2'
        cartCounter--;
    } else {
        button.classList.add('added');
        button.textContent = 'In the card';
        button.style.border = ' 2px solid #EEEDF5'; 
        button.style.color= '#5C6A79'
        cartCounter++;
    }
    document.getElementById('cart-counter').textContent = cartCounter;
}
