const detailContainer = document.querySelector("#details_container");

const link = document.location;

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

url = "http://rainydaysshop.no/wp-json/wc/store/products/" + id;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const images = json.images;

    for (let i = 0; i < images.length; i++) {
      const imageUrl = images[i].src;

      function createHtml() {
        detailContainer.innerHTML += `
              <img
              src="${imageUrl}"
              alt="${json.name}"
              class="details_img" />
            <p class="bold details_title title">Rainy Days</p>
            <p class="title">${json.name}</p>
            <select>
              <option value="" selected disabled>Pick your size:</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
            <div class="atc clickable">
              <p class="bold">${json.prices.price + " " + "NOK"}</p>
              <img
                src="/images/icons/w_add_icon.png"
                alt="add to cart"
                class="mini_icon" />
            </div>
            <p class="bold details_desc title">Description</p>
            <p>
            ${json.description}
            </p>`;
      }
      createHtml();
    }
  } catch (error) {
    detailContainer.innerHTML = ("error", error);
  }
}

fetchProduct();
