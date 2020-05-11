"use strict";

const list = document.querySelector('.list--js');
fetch('https://api.github.com/users/anastazjasta/repos')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
  for (const repo of repos) {
    const {html_url, name} = repo;
    list.innerHTML += 
    `<li class="list__item">
      <a class="list__link" href="${html_url}">${name}</a>
    </li>`;
  }
  }) 
.catch (err => {
  console.log(err);
})