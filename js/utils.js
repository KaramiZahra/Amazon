// header of the website
export const headerElem = `<!-- header  -->
    <div class="bg-gray-900 w-full flex items-center justify-between px-3 py-2 relative lg:px-1">
        <!-- logo  -->
        <img src="img/navbarImg.png" alt="logo" class="w-28 h-12 hover:border lg:w-24 sm:w-16">
        <!-- delivery  -->
        <div
            class="h-12 w-16 flex items-center justify-center flex-col border border-gray-900 cursor-pointer hover:border-white sm:hidden">
            <p class="text-xs text-gray-400 lg:text-[0.6rem]">Deliver to</p>
            <div class="flex items-center">
                <img src="img/locationIcon.png" alt="location" class="w-6 h-6 -ml-2 mr-1">
                <p class="text-sm text-white font-bold lg:text-xs">Iran</p>
            </div>
        </div>
        <!-- search bar  -->
        <div class="search-bar flex items-center justify-between h-11 lg:h-10 lg:mx-2 xs:h-7">
            <div
                class="search-cat-menu flex items-center justify-center bg-neutral-200 h-full rounded-l-md px-4 cursor-pointer lg:px-2.5 sm:px-1.5">
                <p class="mr-2 sm:text-sm xs:text-xs xs:mr-0.5">All</p>
                <img src="img/downBlack.png" alt="dwon arrow" class="w-2 h-2">
                <!-- search bar sub menu  -->
                <ul class="search-cat-sub-menu bg-white border border-gray-200 absolute top-14 left-[16%] z-20 hidden">
                    <li class="px-1 py-0.5 border-b cursor-pointer hover:bg-slate-300">All</li>
                    <li class="px-1 py-0.5 border-b cursor-pointer hover:bg-slate-300">Mobile</li>
                    <li class="px-1 py-0.5 border-b cursor-pointer hover:bg-slate-300">Laptop</li>
                    <li class="px-1 py-0.5 cursor-pointer hover:bg-slate-300">Mobile accessories</li>
                </ul>
            </div>
            <input type="text" placeholder="Search Amazon"
                class="pl-3 pr-96 h-full outline-none lg:pr-3 lg:text-sm md:pr-28 sm:pr-0 sm:pl-1.5 sm:text-xs xs:pl-0.5">
            <div
                class="search-btn bg-orange-300 flex items-center justify-center h-full rounded-r-md px-3 cursor-pointer hover:bg-orange-400 lg:px-2 xs:px-0 xs:w-5">
                <img src="img/search.png" alt="search" class="w-7 h-7 lg:w-5 lg:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3">
            </div>
        </div>
        <!-- language  -->
        <div
            class="language-menu flex items-center justify-center h-12 w-[4.5rem] border border-gray-900 cursor-pointer hover:border-white md:hidden">
            <img src="img/united-states.png" alt="flag" class="h-6">
            <p class="text-white px-0.5">EN</p>
            <img src="img/downFill.png" alt="down arrow" class="w-3 h-3">
            <!-- language sub menu  -->
            <div class="language-sub-menu hidden z-20">
                <img src="img/downFill.png" alt="up arrow"
                    class="absolute top-10 right-[28.4%] z-10 rotate-180 w-8 h-6">
                <div class="absolute top-14 right-[20%] bg-white p-3 w-72 rounded">
                    <p class="text-xs mb-6">Change language <a href="#"
                            class="text-[0.66rem] text-emerald-800 pl-4 hover:text-red-500 hover:underline">Learn
                            more</a>
                    </p>
                    <input type="radio" id="en" name="language" value="EN">
                    <label for="en" class="text-sm">English - EN</label><br>
                    <input type="radio" id="es" name="language" value="ES">
                    <label for="es" class="text-sm">español - ES</label><br>
                    <input type="radio" id="ar" name="language" value="AR">
                    <label for="ar" class="text-sm">العربية - AR</label><br>
                    <input type="radio" id="de" name="language" value="DE">
                    <label for="de" class="text-sm">Deutsch - DE</label><br>
                    <input type="radio" id="he" name="language" value="HE">
                    <label for="he" class="text-sm">עברית - HE</label><br>
                    <input type="radio" id="ko" name="language" value="KO">
                    <label for="ko" class="text-sm">한국어 - KO</label><br>
                    <input type="radio" id="pt" name="language" value="PT">
                    <label for="pt" class="text-sm">português - PT</label><br>
                    <input type="radio" id="zh" name="language" value="ZH">
                    <label for="zh" class="text-sm">中文 (简体) - ZH</label>
                    <hr class="my-2">
                    <p class="text-xs mb-3">Change currency <a href="#"
                            class="text-[0.66rem] text-emerald-800 pl-4 hover:text-red-500 hover:underline">Learn
                            more</a>
                    </p>
                    <div class="flex items-center justify-between">
                        <p class="text-sm">$ - USD - US Dollar</p>
                        <button class="text-xs text-emerald-800 hover:text-red-500 hover:underline">Change</button>
                    </div>
                    <hr class="my-2">
                    <div class="flex items-center justify-start text-sm">
                        <img src="img/united-states.png" alt="flag">
                        <p class="ml-2">you are shopping on <br> Amazon.com</p>
                    </div>
                    <div class="flex items-center justify-center mt-3">
                        <a href="#" class="text-sm text-emerald-800 hover:underline">Change country/region.</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- sign in  -->
        <div
            class="sign-in-menu h-12 w-[9.5rem] flex items-start justify-center flex-col border border-gray-900 px-1 cursor-pointer hover:border-white md:hidden">
            <p class="text-xs text-white lg:text-[0.6rem]">Hello, sign in</p>
            <div class="flex items-center justify-center">
                <p class="text-sm text-white font-extrabold lg:text-xs">Accounts & Lists</p>
                <img src="img/downFill.png" alt="down arrow" class="w-3 h-3 ml-2">
            </div>
            <!-- sign in sub menu  -->
            <div class="sign-in-sub-menu z-20 hidden">
                <img src="img/downFill.png" alt="up arrow" class="absolute top-10 right-[17%] rotate-180 w-8 h-6">
                <div class="absolute top-14 right-[9%] bg-white p-4 w-[27rem] rounded">
                    <div class="flex flex-col items-center justify-center">
                        <button class="bg-amber-300 px-28 py-1 rounded-full shadow-md hover:bg-amber-400">Sign
                            in</button>
                        <p class="text-xs my-2">New customer? <a href="#"
                                class="text-[0.66rem] text-emerald-800 hover:underline">Start here.</a></p>
                    </div>
                    <hr>
                    <div class="p-3 flex items-start justify-between">
                        <ul class="text-xs">
                            <li class="font-bold text-sm pb-0.5">Your Lists</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Create a List</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Find a List or
                                Registry
                            </li>
                        </ul>
                        <ul class="text-xs border-l pl-6">
                            <li class="font-bold text-sm pb-0.5">Your Account</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Account</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">orders</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Recommendations</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Browsing</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">History</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Watchlist</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Video</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Purchases & Rentals
                            </li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Kindle Unlimited
                            </li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Subscribe & Save
                                Items
                            </li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Memberships &
                                Subscriptions</li>
                            <li class="hover:text-orange-400 hover:underline cursor-pointer py-0.5">Music Library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- orders  -->
        <div
            class="h-12 w-20 flex items-start justify-center flex-col border border-gray-900 px-1 cursor-pointer hover:border-white lg:w-[4.5rem] md:hidden">
            <p class="text-xs text-white lg:text-[0.6rem]">Returns</p>
            <p class="text-sm text-white font-extrabold lg:text-xs">& Orders</p>
        </div>
        <!-- cart  -->
        <a href="cart.html">
             <div
                class="relative h-12 w-24 flex items-start justify-center flex-col border border-gray-900 cursor-pointer hover:border-white sm:w-16">
                <p class="cart-count text-orange-500 font-bold absolute left-6 top-0 xs:text-xs xs:left-4 xs:top-1">0</p>
                <img src="img/basket.png" alt="basket" class="w-14 h-11 mr-8 lg:h-10 xs:w-9 xs:h-7">
                <p class="text-sm text-white font-extrabold absolute right-3 bottom-0 lg:text-xs sm:hidden">Cart</p>
            </div>
        </a>
    </div>

    <!-- menu  -->
    <ul class="bg-slate-700 flex items-center text-sm text-white py-2">
        <li
            class="main-menu-btn flex items-center px-3 border border-slate-700 cursor-pointer hover:border-white md:px-2 md:text-xs sm:pl-1.5 sm:pr-4">
            <img src="img/menu.png" alt="menu" class="w-5 h-5 mr-1.5">
            <p>All</p>
        </li>
        <li class="px-3 border border-slate-700 cursor-pointer hover:border-white md:px-2 md:text-xs sm:px-1.5">
            Today's Deals</li>
        <li class="px-3 border border-slate-700 cursor-pointer hover:border-white md:px-2 md:text-xs sm:px-1.5">
            Customer Service</li>
        <li class="px-3 border border-slate-700 cursor-pointer hover:border-white md:px-2 md:text-xs sm:px-1.5">
            Registry</li>
        <li class="px-3 border border-slate-700 cursor-pointer hover:border-white md:px-2 md:text-xs sm:px-1.5">
            Gift Cards</li>
        <li class="px-3 border border-slate-700 cursor-pointer hover:border-white md:px-2 md:text-xs sm:px-1.5">
            Sell</li>
    </ul>
    <!-- main sub  -->
    <div class="main-menu-sub w-96 h-full z-20 absolute top-0 -left-96 transition-all duration-700 sm:w-full">
        <div class="bg-slate-700 text-white font-bold flex items-center py-3 px-7">
            <img src="img/profile.png" alt="profile" class="w-10 h-11 mr-2">
            <p>Hello, sign in</p>
        </div>
        <ul class="bg-white">
            <li class="py-3 px-7 font-bold text-lg">Digital Content & Devices</li>
            <li class="music-menu text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Amazon Music</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
                <!-- music sub menu  -->
                <ul class="music-sub-menu w-96 h-full absolute top-16 left-96 z-10 bg-white transition-all duration-700 hidden sm:w-full">
                    <li class="music-sub-menu-back text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 border-b-2">
                        <img src="img/backArrow.png" alt="left arrow" class="w-7 h-5 inline-block">
                        <p class="inline-block ml-2">Main Menu</p>
                    </li>
                    <li class="text-lg py-3 px-7 cursor-pointer hover:bg-slate-300 font-bold">Stream Music</li>
                    <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300">Amazon Music Unlimited</li>
                    <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300">Free Streaming Music</li>
                    <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300">Podcasts</li>
                    <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300">Open Web Player</li>
                    <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300">Download the app</li>
                </ul>
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Kindle E -readers & Books</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li
                class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between border-b-2">
                <p>Amazon Appstore</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="py-3 px-7 font-bold text-lg">Shop by Department</li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Electronics</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Computer</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Smart Home</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Arts & Crafts</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li
                class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between border-b-2">
                <p>See all</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="py-3 px-7 font-bold text-lg">Programs & Features</li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Gift Cards</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Shop By Interest</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Amazon live</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>International Shopping</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li
                class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between border-b-2">
                <p>See all</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="py-3 px-7 font-bold text-lg">Help & Settings</li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Your Account</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p><img src="img/globe.png" alt="globe" class="w-6 h-6 inline-block"> English</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p><img src="img/united-states.png" alt="flag" class="w-6 h-6 inline-block"> United States</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Customer Service</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
            <li class="text-sm py-3 px-7 cursor-pointer hover:bg-slate-300 flex items-center justify-between">
                <p>Sign in</p>
                <img src="img/downArrow.png" alt="right arrow" class="-rotate-90 w-3 h-4">
            </li>
        </ul>
    </div>`;

// footer of the website
export const footerElem = `<!-- back button  -->
    <button class="bg-gray-700 text-white w-full py-3 mt-4 hover:bg-slate-600"><a href="#" class="text-sm">Back to
            top</a></button>
    <!-- footer  -->
    <div class="bg-gray-800 text-gray-300">
        <div
            class="text-sm grid grid-cols-4 items-start justify-between gap-2 px-32 py-10 border-b border-slate-400 lg:grid-cols-3 md:grid-cols-2 md:px-7 sm:grid-cols-1">
            <ul>
                <li class="py-1 font-bold text-base text-white">Get to Know Us</li>
                <li class="py-1"><a href="#" class="hover:underline">Careers</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Blog</a></li>
                <li class="py-1"><a href="#" class="hover:underline">About Amazon</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Investor Relations</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Amazon Devices</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Amazon Science</a></li>
            </ul>
            <ul>
                <li class="py-1 font-bold text-base text-white">Make Money with Us</li>
                <li class="py-1"><a href="#" class="hover:underline">Sell products on Amazon</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Sell on Amazon Business</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Sell apps on Amazon</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Become an Affiliate</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Advertise Your Products</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Self-Publish with Us</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Host an Amazon Hubs</a></li>
                <li class="py-1"><a href="#" class="hover:underline">See More Make Money with Us</a></li>
            </ul>
            <ul>
                <li class="py-1 font-bold text-base text-white">Amazon Payment Products</li>
                <li class="py-1"><a href="#" class="hover:underline">Amazon Business Card</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Shop with Points</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Reload Your Balance</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Amazon Currency Converter</a></li>
            </ul>
            <ul>
                <li class="py-1 font-bold text-base text-white">Let Us Help You</li>
                <li class="py-1"><a href="#" class="hover:underline">Amazon and COVID-19</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Your Account</a></li>
                <li class="py-1"><a href="#" class="hover:underline">our Orders</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Shipping Rates & Policies</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Returns & Replacements</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Manage Your Content and Devices</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Amazon Assistant</a></li>
                <li class="py-1"><a href="#" class="hover:underline">Help</a></li>
            </ul>
        </div>
        <div class="grid grid-cols-4 items-center justify-center py-4 px-96 lg:px-2 md:grid-cols-2 md:text-sm">
            <img src="img/navbarImg.png" alt="logo" class="w-28 h-12 mx-1 cursor-pointer md:w-24 md:h-10">
            <p class="p-1 mx-1 cursor-pointer border-2 border-slate-400 rounded"><img src="img/globe.png" alt="globe"
                    class="inline-block w-5 h-5 mr-1">English</p>
            <p class="p-1 mx-1 cursor-pointer border-2 border-slate-400 rounded">$ USD - U.s Dollor</p>
            <p class="p-1 mx-1 cursor-pointer border-2 border-slate-400 rounded"><img src="img/united-states.png"
                    alt="globe" class="inline-block w-5 h-5 mr-1">United States</p>
        </div>
    </div>`;

// products db
export const products = [
  {
    id: 1,
    desc: "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD |",
    basePrice: 1200,
    newPrice: 1080,
    img: "img/products/zgr17md61hkrvtgkur33.jpg",
    type: "laptop",
    quantity: 1,
  },
  {
    id: 2,
    desc: "Apple iPhone 13 Mini, 256GB, Blue - Unlocked (Renewed)",
    basePrice: 374.99,
    newPrice: 337.491,
    img: "img/products/fveoewxsecitowrk3iis.png",
    type: "mobile",
    quantity: 1,
  },
  {
    id: 3,
    desc: "CASEKOO for iPhone 13 Pro Case Crystal Clear, [Not Yellowing] [Military Drop Protection] Shockproof Protective iPhone 13 Pro Phone Case 6.1 inch 2021, Clear",
    basePrice: 12,
    newPrice: 10.8,
    img: "img/products/so7q3fhkoybvwcxkot5j.jpg",
    type: "mobile",
    quantity: 1,
  },
  {
    id: 4,
    desc: "HP Notebook Laptop, 15.6&quot; HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver",
    basePrice: 453,
    newPrice: 407.7,
    img: "img/products/yqpd8yawxxppk2wllhvg.jpg",
    type: "laptop",
    quantity: 1,
  },
  {
    id: 5,
    desc: "Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera.",
    basePrice: 840,
    newPrice: 756,
    img: "img/products/hxr6up2jmda4fyls9aou.jpg",
    type: "laptop",
    quantity: 1,
  },
  {
    id: 6,
    desc: "SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black",
    basePrice: 1049,
    newPrice: 944.1,
    img: "img/products/wcldsmyakzeoq6txospe.jpg",
    type: "mobile",
    quantity: 1,
  },
  {
    id: 7,
    desc: "OGMAPLE Cell Phone Stand, Angle Height Adjustable Cell Phone Holder with Silicon Pad for Desk Fully Forldable Mobile Phone Holder Compatible with All Mobile Phones, MT-6, (White)",
    basePrice: 5,
    newPrice: 4.5,
    img: "img/products/eebxql0qbly8j0k8tyqe.jpg",
    type: "mobile accessories",
    quantity: 1,
  },
];
