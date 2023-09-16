function setCookies() {
    var firstName = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
  
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
    var formattedExpirationDate = expirationDate.toUTCString();

    document.cookie = "firstname=" + firstName + "; expires=" + formattedExpirationDate;
    document.cookie = "email=" + email + "; expires=" + formattedExpirationDate;

    window.location.href = "/";
  
   
  }

  function showCookies() {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Cookies: " + document.cookie;
    document.body.appendChild(paragraph);
  }