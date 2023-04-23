const productContainer = document.querySelector("#products_container");

let url = "http://rainydaysshop.no/wp-json/wc/store/products";

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

// Featured button
const featuredBtn = document.querySelector(".featured_btn");
const showAllBtn = document.querySelector(".show_all_btn");

featuredBtn.addEventListener("click", () => {
  url = "https://rainydaysshop.no/wp-json/wc/store/products?featured=true";
  productContainer.innerHTML = "";
  fetchProducts();
  featuredBtn.style.display = "none";
  showAllBtn.style.display = "block";
});

// Show all button
showAllBtn.addEventListener("click", () => {
  url = "https://rainydaysshop.no/wp-json/wc/store/products";
  productContainer.innerHTML = "";
  fetchProducts();
  featuredBtn.style.display = "block";
  showAllBtn.style.display = "none";
});
