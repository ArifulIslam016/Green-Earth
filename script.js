// Globals variable and functions
const catagoryButtons = document.getElementsByClassName("removeCatarogyDesign");

  const removeBgOfCatagory = () => {
    for (const catagorybutton of catagoryButtons) {
      catagorybutton.classList.remove("CatagoryButtonD");
    }
  };


const catagoryLoad = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  displayCatagory(data.categories);
  // console.log(data.);
};




// All Catagory plants here

// spinbar here
const spinbar = (situation) => {
  if (situation == true) {
    document.getElementById("spinbar").classList.remove("hidden");
    document.getElementById("Product-container").classList.add("hidden");

  } else {
    document.getElementById("spinbar").classList.add("hidden");
    document.getElementById("Product-container").classList.remove("hidden");
  
  }
};


const allplantsLoad = () => {
  spinbar(true);
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProducts(data.plants));
//   spinbar(false);
  // console.log(data.plants);
};
const alltreeBtn = document.getElementById("allTreeBtn");
alltreeBtn.addEventListener("click", () => {
  removeBgOfCatagory();
  alltreeBtn.classList.add("CatagoryButtonD");

  allplantsLoad();
});
allplantsLoad();


// Catagory Display here
const displayCatagory = (datas) => {
  // console.log(data);
  const catagoryContainer = document.getElementById("CatagoryLeft");
  datas.forEach((data) => {
    catagoryContainer.innerHTML += `
        <button  onclick="loadProducts(${data.id})" id="${data.id}"  class=" bg-[#DCFCE7] border-none font-medium py-2 my-2 text-[#1F2937] cursor-default w-full text-left hover:bg-[#15803D] px-2 rounded-md removeCatarogyDesign ">
     ${data.category_name}
    </button>
        `;
  });
};

// products load here
const loadProducts = async (id) => {
 spinbar(true);

  removeBgOfCatagory()
  productUrl = `https://openapi.programming-hero.com/api/category/${id}`;
  const res = await fetch(productUrl);
  const data = await res.json();
  //   console.log(data);
  displayProducts(data.plants);

  document.getElementById(id).classList.add("CatagoryButtonD");
};


// products display here
const displayProducts = (products) => {
   
 const productContainer = document.getElementById("Product-container");
  
  productContainer.innerHTML = "";
  products.forEach((product) => {
    // console.log(product)
    const newProduct = document.createElement("div");
    newProduct.innerHTML = `
    <div class="rounded-lg bg-white p-4  ">
            <img class="h-48 w-full object-cover rounded-lg" src="${product.image}" alt="" />
            <h3 onclick="" class="font-semibold text-sm text-[#1F2937] mt-3">
              ${product.name}
            </h3>
            <p class="text-[12px] text-[#71717A] my-2  line-clamp-2">
              ${product.description}
            </p>
            <div class="flex justify-between items-center">
              <h3 class="bg-[#DCFCE7] px-3 py-1 rounded-full text-[#15803D]">
                ${product.category}
              </h3>
              <h3 class="text-[#1F2937]">৳ <span>${product.price}</span></h3>
            </div>
            <button
              class="bg-[#15803D] text-white font-medium text-[16px] w-full rounded-full mt-3 py-3"
            >
              Add to Cart
            </button>
          </div>
    `;
    productContainer.appendChild(newProduct);
  });
  spinbar(false)
};

catagoryLoad();

// <button  class="btn bg-[#DCFCE7] border-none ">
//   <li class="text-[16px] cursor-default font-medium text-[#1F2937]">${data.category_name}</li>
// </button>
