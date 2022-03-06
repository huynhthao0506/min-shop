import { books } from "./data.js";

console.log(books);
// 1. Doi mau banner
const header = document.getElementsByTagName("header");
// Doi sang vang
let yellow = document.getElementById("yellow");
yellow.onclick = function() {
  header[0].style.backgroundImage = "none";
  header[0].style.backgroundColor = "#fcbf16";
}
//Doi sang do
let red = document.getElementById("red");
red.onclick = function() {
  header[0].style.backgroundImage = "none";
  header[0].style.backgroundColor = "#992154";
}
//Doi sang xanh duong
let blue = document.getElementById("blue");
blue.onclick = function() {
  header[0].style.backgroundImage = "none";
  header[0].style.backgroundColor = "#173451";
}
//Doi sang gradient
let gradient = document.getElementById("gradient");
gradient.onclick = function() {
  header[0].style.backgroundImage = "none";
  header[0].style.backgroundImage = "linear-gradient(90deg, #fcbf16 ,#992154 )";
}
// Ham Tao data cho file HTML
/**
 * <div class="item">
        <img src="./images/01.jpg" alt="">
        <h2>Cuốn sách A</h2>
        <p>150.000</p>
    </div>
 */
function bookData (books) {
  for (let i = 0; i < books.length; i++) {
    let div = document.createElement("div");
    div.className = "item";

    let img = document.createElement("img");
    img.alt = "";
    img.src = "./images/0" + books[i].id + ".jpg";

    let h2 = document.createElement("h2");
    h2.innerHTML = books[i].name;

    let p = document.createElement("p");
    p.innerHTML = books[i].price;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    let list = document.getElementById("list");
    list.appendChild(div);
  }
}


// Ham xoa data

function clearBook () {
  let a = document.getElementById("list").children;
  while (a.length > 0) {
    a[0].remove();
  }
}


// Tìm kiếm: Người dùng gõ từ khóa → 
// Web sẽ hiển thị các sản phẩm có tên gần giống với từ khóa

function searchName (searchValue) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
      if (books[i].name == searchValue) {
              result.push(books[i]);
      }
  }
  return result;
}
let search = document.getElementById("search");
search.onkeyup = function() {
  let searchValue = document.getElementById("search").value;
  let newList = searchName(searchValue);
  clearBook();
  bookData(newList); 
}
bookData(books);

// Loc theo gia

function filterByPrice (minPrice, maxPrice) {
  let priceList = [];
  for (let i = 0; i< books.length; i++) {
      if (books[i].price <= maxPrice && books[i].price >= minPrice) {
          priceList.push(books[i]);
      }
  }
  return priceList;
}
let priceBtn = document.getElementById("apply-price-filter");
priceBtn.onclick = function() {
  let minPrice = document.getElementById("min-price").value;
  let maxPrice = document.getElementById("max-price").value;
  let priceBook = filterByPrice (minPrice,maxPrice);
  clearBook();
  bookData(priceBook);
}

// Loc theo nha cung cap
function filterByProvider (provider1) {
  let providerList = [];
  for (let i = 0; i< books.length; i++) {
      if ( books[i].provider == provider1) {
          providerList.push(books[i]);
      }
  }
  return providerList;
}
let filterProvider1 = document.getElementById("provider-1");
filterProvider1.onclick = function() {
  let provider1 = document.getElementsByTagName("label")[4].innerHTML;
  let providerBook = filterByProvider (provider1);
  clearBook();
  bookData(providerBook);
}
let filterProvider2 = document.getElementById("provider-2");
filterProvider2.onclick = function() {
  let provider2 = document.getElementsByTagName("label")[5].innerHTML;
  let providerBook2 = filterByProvider (provider2);
  clearBook();
  bookData(providerBook2);
}
let filterProvider3 = document.getElementById("provider-3");
filterProvider3.onclick = function() {
  let provider3 = document.getElementsByTagName("label")[6].innerHTML;
  let providerBook3 = filterByProvider (provider3);
  clearBook();
  bookData(providerBook3);
}

// Sort theo ten hoac gia
function compareName (a,b) {
  if (a.name < b.name) {
      return -1;
  }
  if (a.name > b.name) {
      return 1;
  }
  return 0;
}
// books.sort (compareName);

function comparePrice (a,b) {
  if (a.price < b.price) {
      return -1;
  }
  if (a.price > b.price) {
      return 1;
  }
  return 0;
}
// books.sort(comparePrice);
// console.log(books);
let sortBy = document.getElementById("sort-by");
sortBy.onchange = function() {
  let sortOption = document.getElementById("sort-by").value;
  let result = books;
  if (sortOption == "sort by name") {
      result = books.sort (compareName);

  }
  if (sortOption == "sort by price") {
      result = books.sort(comparePrice);
  }
  clearBook();
  bookData(result);
}