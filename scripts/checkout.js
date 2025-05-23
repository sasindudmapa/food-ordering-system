document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  let isValid = true;

  const inputs = form.querySelectorAll("input, textarea, select");

  inputs.forEach((input) => {
    const error = input.nextElementSibling;
    if (!input.value.trim()) {
      error.textContent = "This field is required.";
      error.style.display = "block";
      isValid = false;
    } else if (input.type === "email" && !/^\S+@\S+\.\S+$/.test(input.value)) {
      error.textContent = "Enter a valid email.";
      error.style.display = "block";
      isValid = false;
    } else {
      error.textContent = "";
      error.style.display = "none";
    }
  });

  if (isValid) {
    alert("Order placed successfully!");
    localStorage.removeItem('cart'); 
    form.reset();
  }
});
