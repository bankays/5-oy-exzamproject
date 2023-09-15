const url = "http://localhost:3000/posts?id=31241";
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

const url2 = "http://localhost:3000/posts?id=42353";
async function fetchUsers2() {
  try {
    const res = await fetch(url2);
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
fetchUsers2();

const url3 = "http://localhost:3000/posts?id=84583";
async function fetchUsers3() {
  try {
    const res = await fetch(url3);
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
fetchUsers3();

const url4 = "http://localhost:3000/posts?id=93626";
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
    document.querySelector(".cardd4").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}
fetchUsers4();
