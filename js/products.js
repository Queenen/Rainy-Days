const productContainer = document.querySelector("#products_container");

let url = "http://rainy-days.local/wp-json/wc/store/products";
console.log(url);

// Featured button

const featuredBtn = document.querySelector(".featured_btn");

// Change url on click = changes results showing
featuredBtn.addEventListener("click", () => {
  url = "http://rainy-days.local/wp-json/wc/store/products?featured=true";
  console.log(url);
});

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    json.forEach(function (results) {
      const images = results.images;

      images.forEach(function (imgurl) {
        const imageUrl = imgurl.src;

        function createHTML() {
          productContainer.innerHTML += `
            <div class="product_item">
              <a href="details.html?id=${results.id}"
                ><img
                  src="${imageUrl}"
                  alt="${results.name}"
                  class="img_jacket"
              /></a>
              <p class="bold brand">Rainy Days</p>
              <p>${results.name}</p>
              <div class="atc clickable">
                <p class="bold">${results.prices.price + " " + "KR"}</p>
                <img
                  src="/images/icons/w_add_icon.png"
                  alt="add to cart"
                  class="mini_icon" />
              </div>
            </div>
            `;
        }
        createHTML();
      });
    });
  } catch (error) {
    productContainer.innerHTML = ("error", error);
  }
}

fetchProducts();
