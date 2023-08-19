document.getElementById("logIn").addEventListener("click", function () {
    const email = document.getElementById("user-mail");
    const userEmail = email.value;
    const password = document.getElementById("user-password");
    const userPassword = password.value;
    if (userEmail === "amarbank@gmail.com" && userPassword === "amarbank") {
        window.location.href = "bank.html";
    }
    else {
        alert("Please enter valid email and password");
    }
    email.value = "";
    password.value = "";
});