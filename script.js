const catagoryLoad = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  displayCatagory(data.categories);
  // console.log(data.);
};
// {
//     "id": 1,
//     "category_name": "Fruit Tree",
//     "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// }
const displayCatagory = (datas) => {
  // console.log(data);
  const catagoryContainer = document.getElementById("CatagoryLeft");
  datas.forEach((data) => {
    catagoryContainer.innerHTML += `
        <button onclick="loadProducts(${data.id})"  class=" bg-[#DCFCE7] border-none font-medium py-2 text-[#1F2937] cursor-default w-full text-left hover:bg-[#15803D] px-2 rounded-md">
     ${data.category_name}
    </button>
        `;
  });
};

const loadProducts = async (id) => {
  productUrl = `https://openapi.programming-hero.com/api/category/${id}`;
  const res = await fetch(productUrl);
  const data = await res.json();
  console.log(data);
};

const displayProducts = () => {};

catagoryLoad();

// <button  class="btn bg-[#DCFCE7] border-none ">
//   <li class="text-[16px] cursor-default font-medium text-[#1F2937]">${data.category_name}</li>
// </button>
