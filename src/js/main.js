"use strict";

const button = document.querySelector(".submit--js");

button.addEventListener("click", (e) => {
  let input = document.querySelector(".username--js");
  let username = input.value;
  let title = document.querySelector(".title--js");
  const list = document.querySelector(".list--js");
  list.innerHTML = ``;
  title.innerHTML = `List of public repositories of GitHub user ${username}`;

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((resp) => resp.json())
    .then((resp) => {
      const repos = resp;
      for (const repo of repos) {
        const { description, html_url, name } = repo;
        list.innerHTML += `<li class="list__item">
        <a class="list__link" href="${html_url}">${name}</a>
        <p class="list__description">${description ? description : ""}</p>
      </li>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
