const singleimg = JSON.parse(localStorage.getItem("singleimg")) || [];
console.log("o1", singleimg);

const imageDisplay = document.getElementById("imageDisplay");

window.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  imageDisplay.innerHTML = ``;
  display();
});

function display() {
  let cardsdata = singleimg.map((item) => {
    console.log(item);
    return `<div id="card">
        
          <img
            src="${item}"
            alt="${item}" width="400px"/>
       
        
      </div>        <button 
      onclick="handleClick('${item}')"      
      >Add To Fav</button>`;
  });
  imageDisplay.innerHTML = cardsdata.join("");
}

async function handleClick(image) {
  favrateImg = (await JSON.parse(localStorage.getItem("favrate"))) || [];
  favrateImg.push(image);
  await localStorage.setItem("favrate", JSON.stringify(favrateImg));
  alert("Adede to the favraite ");
}
