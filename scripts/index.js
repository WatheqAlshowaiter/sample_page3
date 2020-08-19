

const itemSection = document.getElementById("item-section");
itemSection.classList.add("items-section", "space-content");

// item 1
const item1 = document.createElement("div");
item1.classList.add("item");

item1.innerHTML = `<i class="fa fa-desktop fa-2x"></i>`;

// const icon1 = document.createElement("span");

// icon1.attributes("class", "fa fa-desktop fa-2x"); // this doesn't work with font awsome!

// console.log(icon1);
// icon1.classList.add("fa fa-desktop fa-2x");
// item1.appendChild(icon1);

const headerThree1 = document.createElement("h3");
headerThree1.innerText = "LOREM IPSUME AMET";
item1.appendChild(headerThree1);

const p1 = document.createElement("p");
p1.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi similique laudantium architecto libero est id.";
item1.appendChild(p1);

const button1 = document.createElement("button");
button1.innerText = "LEARN MORE";

item1.appendChild(button1);

////////////////////////////////////////////////////////////////

// item 2
const item2 = document.createElement("div");
item2.classList.add("item");

item2.innerHTML = `<i class="fa fa-diamond fa-2x"></i>`;
// const icon2 = document.createElement("i");
// icon2.classList.add("fa fa-diamond fa-2x");
// item2.appendChild(icon2);

const headerThree2 = document.createElement("h3");
headerThree2.innerText = "LOREM IPSUME AMET";
item2.appendChild(headerThree2);

const p2 = document.createElement("p");
p2.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi similique laudantium architecto libero est id.";
item2.appendChild(p2);

const button2 = document.createElement("button");
button2.innerText = "LEARN MORE";
item2.appendChild(button2);

//////////////////////////////////////////////////////////////
// item 2
const item3 = document.createElement("div");
item3.classList.add("item");

// const icon3 = document.createElement("i");
// icon3.classList.add("fa fa-desktop fa-2x");
// item3.appendChild(icon3);

item3.innerHTML = `<i class="fa fa-desktop fa-2x"></i>`;

const headerThree3 = document.createElement("h3");
headerThree3.innerText = "LOREM IPSUME AMET";
item3.appendChild(headerThree3);

const p3 = document.createElement("p");
p3.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi similique laudantium architecto libero est id.";
item3.appendChild(p3);

const button3 = document.createElement("button");
button3.innerText = "LEARN MORE";
item3.appendChild(button3);

/////////////////////////////////////////////////////////////////
itemSection.appendChild(item1);
itemSection.appendChild(item2);
itemSection.appendChild(item3);

// Responsive navbar
const menu = document.querySelector(".menu");
const ul = document.querySelector(".header-header > nav > ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("active");
  console.log("toggle");
});
