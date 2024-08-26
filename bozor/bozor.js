const elForm = document.querySelector("#form");
const elParent = document.querySelector("#table-body");
const elSaveBtn = document.querySelector("#add-product");
const elAddBnt = document.querySelector(".add-btn");
const elTemplete = document.querySelector("template");
const date = new Date();
const fullYear = date.getFullYear().toString();
const month = date.getMonth() + 1;
const day = date.getDate();
const elCustomer = document.querySelector("#oluvchi");
const elProduct = document.querySelector("#nomi");
const elSum = document.querySelector("#soni");
const elPrice = document.querySelector("#narxi");
const elProductPrice = document.querySelector("#tannarxi");
const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        id: 1,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 1,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 1,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 2,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 3,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 4,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 5,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 6,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 7,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 8,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 9,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 3,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
      {
        id: 10,
        oluvchi: "Samandar",
        nomi: "Balon",
        soni: 9,
        narxi: 123,
        tanNarxi: 1324,
        sana: fullYear + ".0" + month + "." + day,
      },
    ];

elSaveBtn.addEventListener("click", () => {
  console.log(elCustomer);

  const newProduct = {
    id: products.length > 0 ? products[0].id + 1 : 1,
    oluvchi: elCustomer.value,
    nomi: elProduct.value,
    soni: elSum.value,
    narxi: elPrice.value,
    tanNarxi: elProductPrice.value,
    sana: fullYear + ".0" + month + "." + day,
  };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct(products);
});

function renderProduct(array, parent = elParent) {
  elParent.textContent = null;
  array.reverse();
  const fragmant = new DocumentFragment();

  array.forEach((product) => {
    const tr = elTemplete.content.cloneNode(true);
    const tds = tr.querySelectorAll("td");
    const oluvchi = tds[0];
    const balonNomi = tds[1];
    const balonSoni = tds[2];
    const narx = tds[3];
    const tanNarxi = tds[4];
    const vaqt = tds[5];
    const btnEdit = tds[6].childNodes[1];
    const btnDelete = tds[6].childNodes[2];
    oluvchi.textContent = product.oluvchi;
    balonNomi.textContent = product.nomi;
    balonSoni.textContent = product.soni;
    narx.textContent = product.narxi;
    tanNarxi.textContent = product.tanNarxi;
    vaqt.textContent = product.sana;
    fragmant.appendChild(tr);
  });

  parent.appendChild(fragmant);
}

renderProduct(products);
const nav = document.querySelector(".color");

document.addEventListener("keydown", (e) => {
  if (e.key == "Control") {
    console.log(e.key);
    nav.style.display = "none";
  }
});

document.addEventListener("mouseover", () => {
  nav.style.display = "block";
});
