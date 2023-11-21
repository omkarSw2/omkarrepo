const main = document.getElementById("main");
const pagination = document.getElementById("pagination");
pagination.innerHTML = ``;

const apikey = `live_WL8QA0iwr1oyli5RMpfPlFTG6LTys9R72k3D8fAqEGgml3oaKLyiAyXmQlsL4qfr`;
let page = 1;
let limit = 5;
let data;

const url = `https://api.thecatapi.com/v1/breeds?api_key=${apikey}&limit=${limit}&page=${page}`;

window.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  main.innerHTML = ``;
  let responce = await fetch(url);
  data = await responce.json();
  //   console.log(data);
  display();
});

function display() {
  let cardsdata = data.map((item) => {
    return ` <div id="card">
          <div id="card-img">
            <img
              src=${item.image.url}
              alt="cat" />
            <h3 class="cat-name">${item.name}</h3>
            <p class="cat-description">
             ${item.description}
            </p>
            <h4>Origin:${item.origin}</h4>
            <h4>Life Span:${item.life_span}</h4>
        ${item.temperament
          .split(",")
          .map((items) => {
            return `
            <button>${items}</button>
            `;
          })
          .join("")}      
            <h4>Read More :<a href=${item.wikipedia_url}>Link</a></h4>
            <button 
      onclick="handleClick('${item.image.url}')"      
      >View Images</button> 
          </div>
        </div>`;
  });
  main.innerHTML = cardsdata.join("");
}
async function handleClick(imageUrl) {
  let singleimg = [imageUrl];
  localStorage.setItem("singleimg", JSON.stringify(singleimg));
  window.location.href = "./catpage_page/cat_page.html";
}

function Increment() {
  page++;
  fetchDataAndDisplay();
  console.log(page);
}

function Decrement() {
  if (page > 1) {
    page--;
    fetchDataAndDisplay();
    console.log(page);
  }
}

async function fetchDataAndDisplay() {
  let url = `https://api.thecatapi.com/v1/breeds?api_key=${apikey}&limit=${limit}&page=${page}`;
  const response = await fetch(url);
  data = await response.json();
  display();
}

pagination.innerHTML = `<button onclick="Decrement()">Prev</button>
        <button onclick="Increment()">Next</button>`;
