const user = document.querySelector("#user");
const password = document.querySelector("#password");
const btnlogin = document.querySelector("#btnlogin");
const API = "http://api.power007.uz/api/v1/auth/login";
btnlogin.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.value,
      password: password.value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem("id", data.id);
      localStorage.setItem("token", data.data);
      console.log(data);

      if (!data.statusCode) {
        window.location.replace("./login/index.html");
        showMessage("Tizimga muvaffaqiyatli kirildi !!!");
      } else {
        showMessage(data.message, 3000, "red");
      }
    });
  user.value = "";
  password.value = "";
});
function showMessage(
  message,
  time = 3000,
  color = "linear-gradient(to right, #00b09b, #96c93d)"
) {
  Toastify({
    text: message,
    duration: time,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
