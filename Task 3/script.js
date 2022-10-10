/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document
  .getElementById("btn")
  .addEventListener("click", getUsers);

function getUsers() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => renderData(data));
}

function renderData(users) {
  const output = document.getElementById("output");
  output.innerHTML = "";
  users.forEach((user) => {
    const cardBox = document.createElement("div");
    cardBox.className = "cardBox";
    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = user.avatar_url;
    const userName = document.createElement("h2");
    userName.className = "userName";
    userName.innerText = user.login;

    output.append(cardBox);
    cardBox.append(avatar, userName);
  });
}
