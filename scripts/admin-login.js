const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "123456") {
        // alert("You have successfully logged in.");
        // location.reload();
        location.href='admin-page.html';
    } else if(username === "operator" && password === "666666"){
        location.href='operator-page.html';
    }else {
        loginErrorMsg.style.opacity = 1;
    }
})