const singleimg = (await JSON.parse(localStorage.getItem("singleimg"))) || [];

const imageDisplay = document.getElementById("imageDisplay");

window.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  imageDisplay.innerHTML = ``;
  display();
});

function display() {
  let cardsdata = singleimg.map((item) => {
    return `<div id="card">
        
          <img
            src="${item}"
            alt="${item}" />
          
        
      </div>`;
  });
  imageDisplay.innerHTML = cardsdata.join("");
}
