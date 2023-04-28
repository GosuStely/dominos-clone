let buttonElements = document.getElementsByTagName('button');
let itemCountElement = document.getElementById('item-count');
let cartDivElement = document.getElementsByClassName('cart-div')[0];
console.log(buttonElements.length);

let items = 0;

for (let index = 3; index < buttonElements.length; index++) {
  buttonElements[index].addEventListener('click', addToCart);
}
function addToCart() {
  items++;
  itemCountElement.innerHTML = items;
  itemCountElement.style.visibility = 'visible';
  cartDivElement.classList.add('shake-element');
  setTimeout(() => {
    cartDivElement.classList.remove('shake-element');
  }, 500);
}
