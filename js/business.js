const url = "http://localhost:3000/posts?id=73294";
async function fetchUsers1() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    let str = "";
    data.map((user) => {
      str += `
      <div class="cardd">
      <img class="b-img" src="${user.img}" alt="" />
      <p class="card-pp1">${user.category}</p>
      <p class="card-pp2">${user.title}</p>
      <p class="card-pp3">
       ${user.description}
      </p>
    </div>

          `;
    });
    document.querySelector(".cardd").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}
fetchUsers1();

const url1 = "http://localhost:3000/posts?id=97324";
async function fetchUsers() {
  try {
    const res = await fetch(url1);
    const data = await res.json();

    let str = "";
    data.map((user) => {
      str += `
      <div class="cardd">
      <img class="b-img" src="${user.img}" alt="" />
      <p class="card-pp1">${user.category}</p>
      <p class="card-pp2">${user.title}</p>
      <p class="card-pp3">
       ${user.description}
      </p>
    </div>

          `;
    });
    document.querySelector(".cardd2").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}
fetchUsers();

const url4 = "http://localhost:3000/posts?id=95555";
async function fetchUsers4() {
  try {
    const res = await fetch(url4);
    const data = await res.json();

    let str = "";
    data.map((user) => {
      str += `
      <div class="cardd">
      <img class="b-img" src="${user.img}" alt="" />
      <p class="card-pp1">${user.category}</p>
      <p class="card-pp2">${user.title}</p>
      <p class="card-pp3">
       ${user.description}
      </p>
    </div>

          `;
    });
    document.querySelector(".cardd3").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}
fetchUsers4();
