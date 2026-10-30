
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const message = document.getElementById("message");

        if (username === "admin" && password === "1234") {
            message.textContent = "Login successful!";
            message.style.color = "green";

            sessionStorage.setItem("loggedIn", "true");

            setTimeout(function () {
                window.location.href = "register.html";
            }, 700);
        } else {
            message.textContent = "Incorrect username or password.";
            message.style.color = "red";
        }
    });
}

