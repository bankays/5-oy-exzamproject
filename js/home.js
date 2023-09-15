// const url = "http://localhost:3000/posts?id=97324";
// async function fetchUsers() {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     let str = "";
//     data.map((user) => {
//       str += `
//         <div class="card-img">
//             <img class="imgg" src="${user.img}" alt="">
//         </div>

//           `;
//     });
//     document.querySelector(".ba").innerHTML = str;
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchUsers();

// const url = "http://localhost:3000/posts?id=31241";

// async function fetchUser() {
//   try {
//     const res = await axios.get(url);
//     let data = res.data;
//     displayHome(data);
//     // console.log(res.dat);
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchUser();

// function displayHome(home) {
//   let str = "";
//   home.map((posts) => {
//     str += `
//     <img src="${posts.img}" alt="">
//     <div class="home-bg"></div>
//     <div class="container">
//       <div class="home-content">
//         <p class="item1">Posted on ${posts.category}</p>
//         <h1 class="item2">${posts.title}</h1>
//         <p class="item3">By ${posts.author} | ${posts.date} </p>
//         <p class="item4">${posts.description}</p>
//         <a class="item5" href="./all.html">Read More ></a>
//       </div>
//     </div>`;
//   });
//   document.querySelector(".home-section").innerHTML = str;
//   console.log(home);
// }

// const url = "http://localhost:3000/posts?id=97324";
// async function fetchUsers() {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     let str = "";
//     data.map((user) => {
//       str += `
//         <div class="card-img">
//             <img class="imgg" src="${user.img}" alt="">
//         </div>

//           `;
//     });
//     document.querySelector(".ba").innerHTML = str;
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchUsers();

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");
// const url = "http://localhost:3000/posts";
// let homeSection = document.getElementById("home-section");
// let allPosts = document.getElementById("posts");
// async function fetchUsers() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//     let slicePosts = data.slice(1, 4);
//     homeSectionHtml(data);
//     mapPosts(slicePosts);
//     console.log(slicePosts);
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchUsers();

// function homeSectionHtml(users) {
//   homeSection.innerHTML = `<img src="${users[0].img}" />`;
// }
// function mapPosts(posts) {
//   let str = "";
//   posts.map((post) => {
//     console.log(img);
//     str += `
//         <div class="post">
//         <img src="${post.img}" />

//         <span>By <b>${post.author}</b> | ${post.date}</span>
//         <h3>${post.title}</h3>
//         <p>${post.description}</p>
//         </div>
//         `;
//     allPosts.innerHTML = str;
//   });
// }
