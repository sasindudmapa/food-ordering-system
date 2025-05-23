document.addEventListener('DOMContentLoaded', () => {
  const cartTableBody = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartTableBody.innerHTML = '<tr><td colspan="5">Cart is empty</td></tr>';
    return;
  }

  let totalCartPrice = 0;

  console.log(cart);  

  cart.forEach(cartItem => {
      const total = (cartItem.price * cartItem.quantity).toFixed(2);
      totalCartPrice += parseFloat(total);
      totalCartPrice = totalCartPrice.toFixed(2);
      totalCartPrice = parseFloat(totalCartPrice);
      console.log(cartItem);
        
      const row = `
        <tr>
          <td>${cartItem.name}</td>
          <td>LKR.${cartItem.price}</td>
          <td>${cartItem.quantity}</td>
          <td>LKR.${total}</td>
          <td>
            <button class="remove-item" data-id="${cartItem.id}">Remove</button>
          </td>
        </tr>
      `;
      cartTableBody.innerHTML += row;

  });
    const totalRow = `
        <tr>
        <td colspan="3">Total</td>
        <td>LKR.${totalCartPrice}</td>
        <td>
            <a href="../pages/checkout.html" id="checkout-button">Checkout</a>
        </td>
        </tr>
    `;
    cartTableBody.innerHTML += totalRow;
});



function removeItemFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-item')) {
    const id = parseInt(event.target.getAttribute('data-id'));
    removeItemFromCart(id);
  }
});