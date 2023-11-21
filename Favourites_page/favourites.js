const favrateImg = JSON.parse(localStorage.getItem("favrate")) || [];
const favMain = document.getElementById("fav-main");

window.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  favMain.innerHTML = ``;
  display();
});

function display() {
  let cardsdata = favrateImg.map((item) => {
    return `<div id="card">
        <div id="card-img">
          <img
            src="${item}"
            alt="${item}" />
          <button onclick="onRemove('${item}')">remove</button>
        </div>
      </div>`;
  });
  favMain.innerHTML = cardsdata.join("");
}

function onRemove(img) {
  const findimgIndex = favrateImg.findIndex((item) => item === img);
  if (findimgIndex !== -1) {
    favrateImg.splice(findimgIndex, 1);
    display();

    localStorage.setItem("favrate", JSON.stringify(favrateImg));
  }
}
