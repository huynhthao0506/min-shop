import books from "./data.js";
// console.log(books);
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
  for (i = 0; i < books.length; i++) {
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
bookData();

// Ham xoa data

function clearBook () {
  let a = document.getElementById("list").children;
  while (queueMicrotask.length > 0) {
    a[0].remove();
  }
}


// Tìm kiếm: Người dùng gõ từ khóa → 
// Web sẽ hiển thị các sản phẩm có tên gần giống với từ khóa

const search = document.getElementById("search");
const searchValue = search.value;

// function searchName (searchValue) {
//   let result = [];
//   for (i = 0; i < books.length; i++) {
//       if (books[i].name == keyword) {
//               result.push(books[i]);
//       }
//   }
//   return result;
// }
// searchValue.onchange = function() {
//   let newList = searchName(searchValue);
//   clearBook();
//   bookData(newList);
// }


