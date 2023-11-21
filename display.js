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
            <button>${items}</button>`;
          })
          .join("")}
            

         
            <h4>Read More :<a href=${item.wikipedia_url}>Link</a></h4>

            <button onclick="handleClick(${
              item.image.url
            })">View Images</button> 
          </div>
        </div>`;
  });
  main.innerHTML = cardsdata.join("");
}
