const input = document.querySelector("#mnumber");
    window.intlTelInput(input, {
    initialCountry: "lk",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
});
function validateForm(){

  let isVaild = true;

  const fnameInput = document.forms["form"]["fname"].value.trim();
  const lnameInput = document.forms["form"]['lname'].value.trim();
  const mnumberInput = document.forms["form"]["mnumber"].value.trim();
  const emailInput = document.forms["form"]['email'].value.trim();
  const tcChecked = document.getElementById("tc").checked;

  const fnameError = document.getElementById("error-fname");
  const lnameError = document.getElementById("error-lname");
  const mnumberError = document.getElementById("error-mnumber");
  const emailError = document.getElementById("error-email");
  const tcAccept = document.getElementById("accept-tc");

  fnameError.textContent = "";
  lnameError.textContent = "";
  mnumberError.textContent = "";
  emailError.textContent = "";
  tcAccept.textContent = "";


  if (fnameInput === "") {
    fnameError.textContent = "*First name is required";
    document.getElementById("fname").classList.add("invalid");
    document.getElementById("fname").classList.remove("valid");
    isValid = false;
  }
  else {
    document.getElementById("fname").classList.remove("invalid");
    document.getElementById("fname").classList.add("valid");
  }


  if (lnameInput === "") {
    lnameError.textContent = "*Last name is required";
    document.getElementById("lname").classList.add("invalid");
    document.getElementById("lname").classList.remove("valid");
    isValid = false;
  }
  else {
    document.getElementById("lname").classList.remove("invalid");
    document.getElementById("lname").classList.add("valid");
  }

  const phonePattern = /^\d{10}$/;
  if (mnumberInput === "") {
    mnumberError.textContent = "*Mobile number is required";
    document.getElementById("mnumber").classList.add("invalid");
    document.getElementById("mnumber").classList.remove("valid");
    isValid = false;
  } else if (!phonePattern.test(mnumberInput)) {
    mnumberError.textContent = "*Phone number must be 10 digits";
    document.getElementById("mnumber").classList.add("invalid");
    document.getElementById("mnumber").classList.remove("valid");
    isValid = false;
  }
  else {
    document.getElementById("mnumber").classList.remove("invalid");
    document.getElementById("mnumber").classList.add("valid");
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailInput === "") {
    emailError.textContent = "*Email is required";
    document.getElementById("email").classList.add("invalid");
    document.getElementById("email").classList.remove("valid");
    isValid = false;

  } else if (!emailPattern.test(emailInput)) {
    emailError.textContent = "*Invalid email format";
    document.getElementById("email").classList.add("invalid");
    document.getElementById("email").classList.remove("valid");
    isValid = false;
  }
  else {
    document.getElementById("email").classList.remove("invalid");
    document.getElementById("email").classList.add("valid");
  }

  if (!tcChecked) {
    tcAccept.textContent = "*You must accept the terms and conditions";
    isValid = false;
  }
  
  return isValid;
}

ScrollReveal().reveal('.head_content', { 
  distance:'60px',
  duration: 2500,
  delay: 100, 
  origin:'top' 
});

ScrollReveal().reveal('.form', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: false
});

ScrollReveal().reveal('.contact', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  reset: false
});
