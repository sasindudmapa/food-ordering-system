function addToCart(id, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let itemExists = cart.find(item => item.id === id);

  if(itemExists){
    itemExists.quantity+= 1;
  }else{
    console.log(productName)
    cart.push({id: id, quantity: 1, name: productName, price: productPrice});
  }

  console.log(cart);  
  localStorage.setItem('cart', JSON.stringify(cart));
}
