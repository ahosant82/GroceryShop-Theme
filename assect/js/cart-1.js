/********add-to-card************/

let carts = document.querySelectorAll('.add-card');

let products = [
  addToCart = event.target
  addToCartEl = addToCart.parentElement.parentElement
 // console.log(addToCartEl)

   imgName = addToCartEl.children[0].children[0].children[0].src;
   titleName = addToCartEl.children[0].children[1].innerText;
   price = addToCartEl.children[0].children[2].children[0].innerText;
  

]
for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartsNumbers(products[i]);
  })
}

function onLoedCartsNumbers(){
  let productNumbers= localStorage.getItem('cartsNumbers');



  if( productNumbers) {
    document.querySelector('.card span').textContent = productNumbers;
  }
}
onLoedCartsNumbers();

function cartsNumbers(products){
    console.log('product is click', products)
  let productNumbers= localStorage.getItem('cartsNumbers');

  productNumbers = parseInt(productNumbers);

  if( productNumbers) {
    localStorage.setItem('cartsNumbers', productNumbers+1);
    document.querySelector('.card span').textContent = productNumbers +1;
  }else{
    localStorage.setItem('cartsNumbers', 1);
    document.querySelector('.card span').textContent = 1;

  }
  setitem(products);
  
}
function setitem(products){
    console.log('inside of setitem products');
    console.log('my product is', products);

    products.incart =1;

    let cartitem ={
      [products.tag]:products
    }

    localStorage.setItem('productItem',JSON.stringify(cartitem));
}