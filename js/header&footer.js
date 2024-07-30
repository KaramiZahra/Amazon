// add and remove search bar's border when clicked
const searchBar = document.querySelector(".search-bar");
const searchBarInput = document.querySelector(".search-bar input");

searchBarInput.addEventListener("click", () => {
  searchBar.classList.add(
    "rounded-[0.6rem]",
    "border-[3px]",
    "border-orange-400"
  );
});
document.addEventListener("click", (e) => {
  if (!searchBar.contains(e.target)) {
    searchBar.classList.remove(
      "rounded-[0.6rem]",
      "border-[3px]",
      "border-orange-400"
    );
  }
});

// show and hide categories
const searchBarMenu = document.querySelector(".search-cat-menu");
const searchBarSubMenu = document.querySelector(".search-cat-sub-menu");

searchBarMenu.addEventListener("click", () => {
  if (searchBarSubMenu.classList.contains("hidden")) {
    searchBarSubMenu.classList.remove("hidden");
  } else {
    searchBarSubMenu.classList.add("hidden");
  }
});

// manage language menu's sub menu
const languageMenu = document.querySelector(".language-menu");
const languageSubMenu = document.querySelector(".language-sub-menu");

languageMenu.addEventListener("mouseover", () => {
  languageSubMenu.classList.remove("hidden");
});
languageMenu.addEventListener("mouseout", () => {
  languageSubMenu.classList.add("hidden");
});

// manage sign in menu's sub menu
const signInMenu = document.querySelector(".sign-in-menu");
const signInSubMenu = document.querySelector(".sign-in-sub-menu");

signInMenu.addEventListener("mouseover", () => {
  signInSubMenu.classList.remove("hidden");
});
signInMenu.addEventListener("mouseout", () => {
  signInSubMenu.classList.add("hidden");
});

// update cart count display
const cartCount = document.querySelector(".cart-count");

const updateCartCount = () => {
  let getCount = JSON.parse(localStorage.getItem("Products-Count"));
  let getProduct = JSON.parse(localStorage.getItem("Cart-Products"));
  if (getCount && getCount !== 0 && Object.keys(getProduct).length > 0) {
    cartCount.innerHTML = getCount;
    if (getCount >= 10) {
      cartCount.classList.replace("left-6", "left-5");
      cartCount.classList.replace("xs:left-4", "xs:left-3");
    }
  } else {
    cartCount.innerHTML = "0";
    localStorage.setItem("Products-Count", 0);
    cartCount.classList.replace("left-5", "left-6");
    cartCount.classList.replace("xs:left-3", "xs:left-4");
  }
};

// update cart count when the page loads and when it changes in localStorage
window.addEventListener("load", updateCartCount);

/////////// storage event doesn't work i have to check it later //////////
// window.addEventListener("storage", (e) => {
//     if (e.key === "Products-Count") {
//         updateCartCount();
//     }
//     console.log(e);
// });
// temporary solution:
setInterval(() => {
  updateCartCount();
}, 1000);

// main menu's sub menu management
const mainMenuBtn = document.querySelector(".main-menu-btn");
const mainMenuSub = document.querySelector(".main-menu-sub");

mainMenuBtn.addEventListener("click", () => {
  mainMenuSub.classList.replace("-left-96", "left-0");
});
document.addEventListener("click", (e) => {
  const isClickInsideMenu = mainMenuSub.contains(e.target);
  const isClickOnMenuBtn = mainMenuBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnMenuBtn) {
    mainMenuSub.classList.replace("left-0", "-left-96");
  }
});

// music menu's sub menu management
const musicMenu = document.querySelector(".music-menu");
const musicSubMenu = document.querySelector(".music-sub-menu");
const musicSubMenuBack = document.querySelector(".music-sub-menu-back");

musicMenu.addEventListener("click", () => {
  musicSubMenu.classList.replace("left-96", "left-0");
  musicSubMenu.classList.remove("hidden");
});
musicSubMenuBack.addEventListener("click", (e) => {
  e.stopPropagation();
  musicSubMenu.classList.replace("left-0", "left-96");
  musicSubMenu.classList.add("hidden");
});
