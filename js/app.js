// display header
import { headerElem } from "./utils.js";
const header = document.querySelector(".header");
header.insertAdjacentHTML("beforeend", headerElem);

// display footer
import { footerElem } from "./utils.js";
const footer = document.querySelector(".footer");
footer.insertAdjacentHTML("beforeend", footerElem);

// slider
const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderBg = [
  "url('../img/slide1.jpg')",
  "url('../img/slide2.jpg')",
  "url('../img/slide3.jpg')",
  "url('../img/slide4.jpg')",
];

let currentIndex = 0;
setInterval(() => {
  slider.style.transition = "background-image 1s ease";
  slider.style.backgroundImage = sliderBg[currentIndex];
  currentIndex = (currentIndex + 1) % sliderBg.length;
}, 3000);

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderBg.length) % sliderBg.length;
  slider.style.transition = "background-image 1s ease";
  slider.style.backgroundImage = sliderBg[currentIndex];
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderBg.length;
  slider.style.transition = "background-image 1s ease";
  slider.style.backgroundImage = sliderBg[currentIndex];
});

// handle products' desc max displayed length
const maxLength = 98;

const descTruncation = () => {
  const productDescs = document.querySelectorAll(".product-desc");
  productDescs.forEach((productDesc) => {
    const text = productDesc.textContent.trim();
    if (text.length > maxLength) {
      productDesc.textContent = text.slice(0, maxLength) + "...";
    }
  });
};

// products generator
import { products } from "./utils.js";
const productsContainer = document.querySelector(".products-container");

const createProducts = (productsInfo) => {
  productsContainer.innerHTML = "";
  productsInfo.forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div id=${product.id} class="product-card flex flex-col bg-white py-4 px-5 cursor-pointer">
          <img src=${product.img} alt=${product.type} class="border-b-2 h-56 p-10">
          <p class="mt-3">$<span class="font-bold text-2xl">${product.newPrice}</span>99</p>
          <p class="line-through text-sm mb-3">$${product.basePrice}</p>
          <p class="product-desc text-sm mb-2 h-20">${product.desc}</p>
          <div class="flex items-center">
              <img src="img/star.png" alt="star" class="w-4 h-4 mx-1">
              <img src="img/star.png" alt="star" class="w-4 h-4 mx-1">
              <img src="img/star.png" alt="star" class="w-4 h-4 mx-1">
              <img src="img/star.png" alt="star" class="w-4 h-4 mx-1">
              <img src="img/star.png" alt="star" class="w-4 h-4 mx-1">
              <p class="text-xs">1,752</p>
          </div>
          <a href="product.html?id=${product.id}" class="mt-6 hover:text-red-500 hover:-translate-y-px">see more ...</a>
        </div>`
    );
  });
  productsContainer.style.display = "grid";
  descTruncation();
};

createProducts(products);

// handle search bar
const searchBarInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-btn");

const searchInputHandler = (item) => {
  const filterItem = products.filter((product) => {
    return product.type === item;
  });
  if (filterItem.length > 0) {
    createProducts(filterItem);
  } else {
    createProducts(products);
  }
  searchBarInput.value = "";
};

searchBtn.addEventListener("click", () => {
  const searchedItem = searchBarInput.value.trim().toLowerCase();
  searchInputHandler(searchedItem);
});
searchBarInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const searchedItem = searchBarInput.value.trim().toLowerCase();
    searchInputHandler(searchedItem);
  }
});

// handle search bar categories
const searchCatMenu = document.querySelectorAll(".search-cat-sub-menu li");
searchCatMenu.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const searchedItem = e.target.textContent.toLowerCase();
    searchInputHandler(searchedItem);
  });
});

// link each product card to it's respective page
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productId = card.id;
    window.location.href = `product.html?id=${productId}`;
  });
});
