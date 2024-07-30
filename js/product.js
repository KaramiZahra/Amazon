// display header
import { headerElem } from "./utils.js";
const header = document.querySelector(".header");
header.insertAdjacentHTML("beforeend", headerElem);

// display footer
import { footerElem } from "./utils.js";
const footer = document.querySelector(".footer");
footer.insertAdjacentHTML("beforeend", footerElem);

// retrieve a specific item's id from the current page's URL
import { products } from "./utils.js";
const locationParams = new URLSearchParams(location.search);
const itemID = locationParams.get("id");
const findItem = products.find((item) => {
  return item.id == itemID;
});

// product's quantity in basket
const basketQuantity = document.querySelector(".basket-quantity");
for (let i = 1; i <= 27; i++) {
  basketQuantity.insertAdjacentHTML(
    "beforeend",
    `<option value=${i}>Quantity: ${i}</option>`
  );
}
basketQuantity.addEventListener("change", (e) => {
  let itemQuantity = e.target.value;
  findItem.quantity = itemQuantity;
  modalText.dataset.quantity = itemQuantity;
  updateBasketPrice();
  if (cartBtn.classList.contains("remove")) {
    cartBtn.textContent = "Update Cart";
  }
});
const updateBasketPrice = () => {
  basketPrice.textContent = (
    findItem.basePrice * Number(findItem.quantity)
  ).toFixed(2);
};

// generate respective product
const productImg = document.querySelector(".product-img");
const productDesc = document.querySelector(".product-desc");
const productBasePrice = document.querySelector(".product-base-price");
const basketPrice = document.querySelector(".basket-price");

if (findItem) {
  productImg.src = findItem.img;
  productImg.alt = findItem.type;
  productDesc.textContent = findItem.desc;
  productBasePrice.textContent = findItem.basePrice;
  updateBasketPrice();
}

// handle cart button and add product to cart page
let cartProducts = [];
const cartBtn = document.querySelector(".cart-btn");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");

cartBtn.addEventListener("click", () => {
  if (cartBtn.classList.contains("add")) {
    cartBtn.textContent = "Remove from cart";
    cartBtn.classList.replace("add", "remove");
    modalText.textContent = "Added to the cart!";

    // check if the product already exists in the cart
    let isInCart = cartProducts.some((product) => {
      return product.id === findItem.id;
    });
    if (!isInCart) {
      cartProducts.push(findItem);
      setLocalStorage(cartProducts);
    }
  } else if (cartBtn.classList.contains("remove")) {
    if (cartBtn.textContent === "Update Cart") {
      modalText.textContent = "Cart updated!";
      cartBtn.textContent = "Remove from cart";

      // update the item at the found index
      const itemIndex = cartProducts.findIndex(
        (item) => item.id === findItem.id
      );
      if (itemIndex !== -1) {
        cartProducts[itemIndex].quantity = findItem.quantity;
        setLocalStorage(cartProducts);
      }
    } else {
      cartBtn.textContent = "Add to cart";
      cartBtn.classList.replace("remove", "add");
      modalText.textContent = "Removed from the cart!";

      // remove the item at the found index
      const itemIndex = cartProducts.findIndex(
        (item) => item.id === findItem.id
      );
      if (itemIndex !== -1) {
        cartProducts.splice(itemIndex, 1);
        setLocalStorage(cartProducts);
      }
    }
  }
  // show and hide the modal for actions
  modal.classList.replace("-translate-y-56", "-translate-y-28");
  setTimeout(() => {
    modal.classList.replace("-translate-y-28", "-translate-y-56");
  }, 3000);
});

// set local storage value
const setLocalStorage = (products) => {
  localStorage.setItem("Cart-Products", JSON.stringify(products));
};
// check cart value
window.addEventListener("load", () => {
  let getProduct = JSON.parse(localStorage.getItem("Cart-Products"));
  if (getProduct) {
    cartProducts = getProduct;
  } else {
    cartProducts = [];
  }
});

// music hover action
const musicHoverText = document.querySelector(".music-hover-text");
const musicHover = document.querySelector(".music-hover");

musicHoverText.addEventListener("mouseover", () => {
  musicHover.classList.remove("hidden");
});
musicHoverText.addEventListener("mouseout", () => {
  musicHover.classList.add("hidden");
});

// more buttons
const moreStyleBtn = document.querySelector(".more-style-btn");
const moreStyleBtnText = document.querySelector(".more-style-btn p");
const moreStyleBtnIcon = document.querySelector(".more-style-btn img");
const productStyle = document.querySelector(".product-style");

moreStyleBtn.addEventListener("click", () => {
  if (moreStyleBtnText.textContent === "See more") {
    productStyle.classList.remove("max-h-44", "overflow-hidden");
    moreStyleBtnText.textContent = "See less";
    moreStyleBtnIcon.classList.add("rotate-180");
  } else {
    productStyle.classList.add("max-h-44", "overflow-hidden");
    moreStyleBtnText.textContent = "See more";
    moreStyleBtnIcon.classList.remove("rotate-180");
  }
});

const moreAboutBtn = document.querySelector(".more-about-btn");
const moreAboutBtnText = document.querySelector(".more-about-btn p");
const moreAboutBtnIcon = document.querySelector(".more-about-btn img");
const productAbout = document.querySelector(".product-about");

moreAboutBtn.addEventListener("click", () => {
  if (moreAboutBtnText.textContent === "See more") {
    productAbout.classList.remove("max-h-96", "overflow-y-clip");
    moreAboutBtnText.textContent = "See less";
    moreAboutBtnIcon.classList.add("rotate-180");
  } else {
    productAbout.classList.add("max-h-96", "overflow-y-clip");
    moreAboutBtnText.textContent = "See more";
    moreAboutBtnIcon.classList.remove("rotate-180");
  }
});

const moreCartBtn = document.querySelector(".more-cart-btn");
const productCart = document.querySelector(".product-cart");

moreCartBtn.addEventListener("click", () => {
  if (moreCartBtn.textContent === "See more") {
    productCart.classList.remove("max-h-[9.5rem]", "overflow-y-clip");
    moreCartBtn.textContent = "See less";
  } else {
    productCart.classList.add("max-h-[9.5rem]", "overflow-y-clip");
    moreCartBtn.textContent = "See more";
  }
});
