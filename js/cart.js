// display header
import { headerElem, products } from "./utils.js";
const header = document.querySelector(".header");
header.insertAdjacentHTML("beforeend", headerElem);

// display footer
import { footerElem } from "./utils.js";
const footer = document.querySelector(".footer");
footer.insertAdjacentHTML("beforeend", footerElem);

// set products in local storage
const setLocalStorage = (products) => {
  localStorage.setItem("Cart-Products", JSON.stringify(products));
};
const setLocalStorageCount = (count) => {
  localStorage.setItem("Products-Count", JSON.stringify(count));
};

// check cart values
let cartProducts = [];
const emptyCart = document.querySelector(".empty-cart");
const productCart = document.querySelector(".product-cart");
window.addEventListener("load", () => {
  let getProduct = JSON.parse(localStorage.getItem("Cart-Products"));
  if (getProduct && getProduct.length > 0) {
    cartProducts = getProduct;
    emptyCart.classList.add("hidden");
    productCart.classList.remove("hidden");
  } else {
    cartProducts = [];
    emptyCart.classList.remove("hidden");
    productCart.classList.add("hidden");
  }

  renderProducts();
});

const renderProducts = () => {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";
  let sumPrice = 0;
  let sumQuantity = 0;

  cartProducts.forEach((item) => {
    productContainer.insertAdjacentHTML(
      "beforeend",
      `<div id="${
        item.id
      }" class="parent-class grid grid-cols-3 items-center justify-center border-b border-gray-200 h-80 px-7 md:h-min">
          <div class="col-span-1 mr-9 my-5 lg:w-32 md:hidden">
            <img src="${item.img}" alt="${
        item.type
      }" class="w-full max-h-60 object-contain">
          </div>
          <div class="my-5 col-span-2 md:col-span-3">
            <div class="flex justify-between items-start xs:flex-wrap">
              <p class="text-sm xs:text-xs">${item.desc}</p>
              <p class="ml-20 font-bold text-lg sm:ml-2 xs:ml-0 xs:mt-3">$<span class="product-price">${(
                item.basePrice * Number(item.quantity)
              ).toFixed(2)}</span></p>
            </div>
            <p class="text-green-700 my-3 lg:text-sm">In Stock</p>
            <img src="img/prime.png" alt="prime" class="mb-3">
            <input type="checkbox" id="gift" name="gifts">
            <label for="gift" class="text-sm lg:text-xs">This will be a gift</label>
            <a href="#" class="text-sm text-emerald-800 pl-4 hover:text-red-500 lg:text-xs">Learn more</a>
            <br>
            <p class="mt-3 font-bold lg:text-sm">Style Name: <span class="font-normal text-sm xs:block">0.5 litre work container</span></p>
            <p class="font-bold lg:text-sm">Colour name: <span class="font-normal text-sm xs:block">white</span></p>
            <div class="flex mt-5 lg:mt-3 sm:flex-wrap">
              <select name="quantities" class="basket-quantity text-sm my-1" data-product-id="${
                item.id
              }">
                <!-- Options will be dynamically added via JavaScript -->
              </select>
              <a href="#" class="delete-product text-emerald-800 my-1 hover:text-red-500 lg:text-xs">
                <span class="mx-2 text-gray-300">|</span>
                Delete
              </a>
              <a href="#" class="update-product text-emerald-800 my-1 hover:text-red-500 lg:text-xs hidden">
                <span class="mx-2 text-gray-300">|</span>
                Update
              </a>
              <a href="#" class="text-emerald-800 my-1 hover:text-red-500 lg:text-xs">
                <span class="mx-2 text-gray-300">|</span>
                Save for later
              </a>
              <a href="#" class="text-emerald-800 my-1 hover:text-red-500 lg:text-xs">
                <span class="mx-2 text-gray-300">|</span>
                See more like this
              </a>
              <a href="#" class="text-emerald-800 my-1 hover:text-red-500 lg:text-xs">
                <span class="mx-2 text-gray-300">|</span>
                Share
              </a>
            </div>
          </div>
        </div>`
    );

    // find the select box and set options dynamically
    const basketQuantity = document.querySelector(
      `.basket-quantity[data-product-id="${item.id}"]`
    );
    basketQuantity.innerHTML = "";
    for (let i = 1; i <= 27; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `Quantity: ${i}`;
      basketQuantity.appendChild(option);
    }

    basketQuantity.value = item.quantity;
    // event listener for change in select box quantity
    basketQuantity.addEventListener("change", (e) => {
      let newQuantity = parseInt(e.target.value);
      item.quantity = newQuantity;
      const productContainer = e.target.closest(".parent-class");

      // handle delete and update buttons
      const deleteBtn = productContainer.querySelector(".delete-product");
      const updateBtn = productContainer.querySelector(".update-product");

      deleteBtn.classList.add("hidden");
      updateBtn.classList.remove("hidden");

      updateBtn.addEventListener("click", () => {
        const productPrice = productContainer.querySelector(".product-price");
        productPrice.textContent = (item.basePrice * newQuantity).toFixed(2);
        deleteBtn.classList.remove("hidden");
        updateBtn.classList.add("hidden");
        setLocalStorage(cartProducts);
        renderProducts();
      });
    });

    // event listener for delete product
    const deleteProducts = document.querySelectorAll(".delete-product");
    deleteProducts.forEach((product) => {
      product.addEventListener("click", (e) => {
        const productId = Number(
          e.target.parentElement.parentElement.parentElement.id
        );

        const findItem = cartProducts.find((product) => {
          return product.id === productId;
        });

        const itemIndex = cartProducts.findIndex(
          (item) => item.id === findItem.id
        );
        if (itemIndex !== -1) {
          cartProducts.splice(itemIndex, 1);
          e.target.closest(".parent-class").remove();
          setLocalStorage(cartProducts);
          renderProducts();
        }
      });
    });

    // calculate sum price and count
    sumPrice += item.basePrice * Number(item.quantity);
    const subTotalPrice = document.querySelectorAll(".sub-total-price");
    const subTotalCount = document.querySelectorAll(".sub-total-count");
    subTotalPrice.forEach((price) => {
      price.innerHTML = `$${sumPrice}`;
    });
    subTotalCount.forEach((count) => {
      count.innerHTML = cartProducts.length;
    });

    // calculate sum quantity
    sumQuantity += Number(item.quantity);
    setLocalStorageCount(sumQuantity);
  });
};

// event listener for deselect button
const deselectBtn = document.querySelector(".deselect-btn");
deselectBtn.addEventListener("click", () => {
  cartProducts = [];
  setLocalStorage(cartProducts);
  emptyCart.classList.remove("hidden");
  productCart.classList.add("hidden");
  productContainer.innerHTML = "";
  renderProducts();
});

// Initial call
renderProducts();
