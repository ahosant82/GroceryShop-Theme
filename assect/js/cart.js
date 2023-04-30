/********add-to-card************
let addcartBtn = document.querySelectorAll('.order-btn');

let products = [
  
]
for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartsNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoedCartsNumbers(){
  let productNumbers= localStorage.getItem('cartsNumbers');



  if( productNumbers) {
    document.querySelector('.count .item-number').textContent = productNumbers;
  }
}


function cartsNumbers(products){
  let productNumbers= localStorage.getItem('cartsNumbers');

  productNumbers = parseInt(productNumbers);

  if( productNumbers) {
    localStorage.setItem('cartsNumbers', productNumbers+1);
    document.querySelector('.count .item-number').textContent = productNumbers +1;
  }else{
    localStorage.setItem('cartsNumbers', 1);
    document.querySelector('.count .item-number').textContent = 1;

  }
  setitem();
  
}
/*/
//
var removeBtn = document.getElementsByClassName('remove-btn');

// for (i = 0; i < removeBtn.length ; i++){
//   removeBtn[i].addEventListener('click' , removeBtns)
// }

function removeBtns(event) {
  var e = event.target;
  var parents = e.parentElement.parentElement.parentElement.remove()

  grandTotal()
}

//
var addToCart = document.getElementsByClassName('order-btn');
for (i = 0; i < addToCart.length ; i++){
  addToCart[i].addEventListener('click' , addToCarts)
}

function addToCarts(event) {
  var addToCart = event.target;
  var addToCartEl = addToCart.parentElement.parentElement
 // console.log(addToCartEl)

  var imgName = addToCartEl.children[0].children[0].children[0].src;
  var titleName = addToCartEl.children[0].children[1].innerText;
  var price = addToCartEl.children[0].children[2].children[0].innerText;

  addToCartUpdate(imgName, titleName, price)

  
}
var tbody = document.getElementsByTagName('tbody')[0]

function addToCartUpdate(imgName, titleName, price) {
  var createElement = document.createElement('tr');
  var productTitle =  document.getElementsByClassName('product-title');

  for (i = 0; i < productTitle.length ; i++) {
    if(productTitle[i].innerText == titleName){
      alert('This Product all ready added');
      return
    }    
  }
  createElement.innerHTML = `<td><div class="qty">
  <form action="#">
      <input class="qty-count" type="number" value="1" name="" id="">
  </form>
</div></td>
<td><img class="poduct-img" src="${imgName}" alt=""></td>
<td><div class="product-title">${titleName}</div></td>
<td><div class="product-price">${price}</div></td>
<td><div class="sub-total">${price}</div></td>
<td><div class="remove-btn"><i  class="fa-solid fa-times"></i></div></td>`

tbody.append(createElement);

for (i = 0; i < qtyUpdate.length ; i++){
  qtyUpdate[i].addEventListener('click' , updateQty)
}

for (i = 0; i < removeBtn.length ; i++){
  removeBtn[i].addEventListener('click' , removeBtns)
}
grandTotal()
}

var qtyUpdate = document.getElementsByClassName('qty-count');

function updateQty(event) {
  var updateQtyEle = event.target;
  var parentEle = updateQtyEle.parentElement.parentElement.parentElement.parentElement
 // console.log(parentEle)

 var productPrice = parentEle.getElementsByClassName('product-price')[0];
 var productPrices = productPrice.innerText.replace('৳', '');
 var subTotal = parentEle.getElementsByClassName('sub-total')[0];

 subTotal.innerHTML ='৳'+ updateQtyEle.value * productPrices;

 if (isNaN(updateQtyEle.value) || updateQtyEle.value < 0 ) {
   updateQtyEle.value = 1;
 }
 grandTotal()
}

function grandTotal() {
  var total = 0;
  var grands = document.querySelectorAll('.grand-total')[0];
  var updates = document.getElementsByClassName('sub-total');
  for (i = 0; i < updates.length; i++){
    var updatesAmount = parseInt(updates[i].innerText.replace('৳', ''));
    total += updatesAmount;

  }
  grands.innerHTML = '৳' + total;
}
// //


