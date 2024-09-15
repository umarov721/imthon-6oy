document
  .querySelector("#Form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token", json.token);
          window.location.href = "admin.html";
        } else {
          alert("Login yoki parol xato");
        }
      })
      .catch((err) => {
        alert("Lo'gin yoki Parol xato kiritildi");
      });
  });
