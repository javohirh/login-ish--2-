const elForm = document.querySelector("#form");
const elParent = document.querySelector("#table-body");
const elSaveBtn = document.querySelector("#add-product");
const elAddBnt = document.querySelector(".add-btn");
const elTemplete = document.querySelector("template");
const elEditProduct = document.querySelector("#edit-product");
const balonNomi = document.querySelector("#nomi");
const balonSoni = document.querySelector("#soni");
const balonNarxi = document.querySelector("#narxi");
const token = localStorage.getItem("token");
const form = document.getElementById("form");
const searchBalonNomi = document.getElementById("form").search1;
const searchRazmeri = document.getElementById("form").search2;
const elEditForm = document.getElementById("edit-form");
const elEditBalon = document.getElementById("edit-form").nomi;
const elEditRazmeri = document.getElementById("edit-form").razmeri;
const elEditSoni = document.getElementById("edit-form").soni;
const elEditNarxi = document.getElementById("edit-form").narxi;
const elAllPrice = document.querySelector(".all-price");
const elAllCount = document.querySelector(".all-count");

const API = "http://api.power007.uz/api/sklad";

elSaveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      balon: balonNomi.value,
      onePrice: +balonNarxi.value,
      soni: +balonSoni.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (!data.statusCode) {
        showMessage("Mahsulot skladga qo'shildi !!!");
      } else {
        showMessage(data.message, 3500, "red");
      }

      getData();
    });
  balonNomi.value = "";

  balonSoni.value = "";
  balonNarxi.value = "";
});

function renderProduct(array, parent = elParent) {
  elParent.textContent = null;
  let a = 0;
  let b = 0;
  array.reverse();
  const fragmant = new DocumentFragment();

  array.forEach((product) => {
    const tr = elTemplete.content.cloneNode(true);

    const tds = tr.querySelectorAll("td");

    const balonNomi = tds[0];

    const balonSoni = tds[1];
    const balonNarxi = tds[2];
    const jamiBalonNarxi = tds[3];
    const Vaqti = tds[4];
    const Edit = tds[5];
    const btnEdit = tds[6].childNodes[1];
    const btnDelete = tds[6].childNodes[2];

    btnEdit.dataset.id = product.id;
    btnDelete.dataset.id = product.id;
    balonNarxi.textContent = product.onePrice;
    jamiBalonNarxi.textContent = product.allPrice;
    balonNomi.textContent = product.balon;
    a += product.skladCount;
    b += product.allPrice;
    balonSoni.textContent = product.skladCount;
    const isoString = product.createdAt;
    const date = new Date(isoString);
    const readableFormat = date.toLocaleString();
    const editString = product.updatedAt;
    const editDate = new Date(editString);
    const readEditTime = editDate.toLocaleString();

    Vaqti.textContent = readableFormat;
    Edit.textContent = readEditTime;
    fragmant.appendChild(tr);
  });

  parent.appendChild(fragmant);
  elAllCount.textContent = a;
  elAllPrice.textContent = b;
}
function getData() {
  fetch(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      renderProduct(data.data);
    });
}
getData();

searchBalonNomi.addEventListener("input", (e) => {
  e.preventDefault();
  fetch(`${API}/filter?balon=${searchBalonNomi.value}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => renderProduct(data));
  if (searchBalonNomi.value == "") {
    getData();
  }
});

elParent.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("edit-btn")) {
    const id = e.target.parentElement.dataset.id;
    fetch(`${API}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        elEditBalon.value = data.data.balon;
        elEditSoni.value = data.data.skladCount;
        elEditNarxi.value = data.data.onePrice;

        elEditProduct.addEventListener("click", (e) => {
          e.preventDefault();
          const soni = +elEditSoni.value;
          const narxi = +elEditNarxi.value;
          fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              balon: elEditBalon.value,
              onePrice: narxi,
              soni: soni,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              showMessage("Mahsulot tahrirlandi", 3000, "gold");

              getData();
            });
        });
      });
  }
  if (e.target.parentElement.classList.contains("delete-btn")) {
    const id = e.target.parentElement.dataset.id;
    fetch(`${API}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        showMessage("Mahsulot skladdan olib tashlandi !!!", 1000, "darkred");
        getData();
      });
  }
});

function showMessage(
  message,
  time = 3000,
  color = "linear-gradient(to right, #00b09b, #96c93d)"
) {
  Toastify({
    text: message,
    duration: time,

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
