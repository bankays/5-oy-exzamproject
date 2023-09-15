const searchInput = document.getElementById("search");
const rowProducts = document.querySelector(".carddd");
const noNe = document.getElementById("nonen");
const paGe1 = document.getElementById("page1");
const paGe2 = document.getElementById("page2");

const prevP = document.getElementById("prev");
const nextP = document.getElementById("next");
const url = "http://localhost:3000/posts";
async function fetchUsers() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    function displayProducts(data) {
      rowProducts.innerHTML = "";
      let str = "";
      data.map((user) => {
        str += `
            <div class="cardss">
            <img class="imggcard" src="${user.img}" alt="" />
            <p class="carddd-p1">${user.category}</p>
            <p class="carddd-p2">
              ${user.title}
            </p>
            <p class="carddd-p3">
            ${user.description}
            </p>
          </div>

                `;
        rowProducts.innerHTML = str;
      });
    }
    displayProducts(data);
  } catch (e) {
    console.log(e);
  }
}
fetchUsers();

function displaySearchedProducts(query) {
  const filtiredProducts = data.filer(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  displayProducts(filtiredProducts);
}
let timeOut;
searchInput.addEventListener("keyup", function (e) {
  clearTimeout(timeOut);
  timeOut = setTimeout(displaySearchedProducts(e.target.value), 500);
});
function none() {
  rowProducts.style.display = "none";
  noNe.style.display = "block";
  paGe2.style.display = "block";
  paGe1.style.display = "none";
}
function block() {
  rowProducts.style.display = "block";
  noNe.style.display = "none";
  paGe2.style.display = "none";
  paGe1.style.display = "block";
}
