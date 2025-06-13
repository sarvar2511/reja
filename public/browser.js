console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `
    <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              Ochirish
            </button>
          </div>
        </li>
    `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentElement("beforeend", itemTemplate(response.data));
      //itemTemplate(response.data) - html da qoshilishi kerak bolgan dzayn
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Qaytadan harakat qiling");
    });
});

// UPDATE and DELETE

document.addEventListener("click", function (e) {
  //   console.log(e);
  //DELETE operation
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirasizmi"));
    {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Qaytadan harakat qiling");
        });
    }
  }

  //EDIT operation
  if (e.target.classList.contains("edit-me")) {
    alert("Siz edit tugmasini bosdingiz");
  }
});
