const url = "http://localhost:3000/posts?id=27929";
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
