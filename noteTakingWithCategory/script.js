const notes = [
  {
    title: "title",
    description: "description",
    category: "category",
  },
];

function addNote() {
  const title = document.querySelector('input[name="title"]').value;
  const description = document.querySelector('input[name="description"]').value;

  if (!title || !description) {
    alert("Please enter title or description properly");
    return;
  }

  const noteContainer = document.querySelector(".notes_container");
  const note = document.createElement("div");

  note.classList.add("note");
  note.innerHTML = `
      <div class="title">${title}</div>
      <div class="description">${description}</div>
    `;

  noteContainer.appendChild(note);
  closeForm();
}

function openForm() {
  const formPopup = document.querySelector(".form_popup");
  formPopup.classList.add("active");

  const formContent = `<nav class="nav_icons">
<i class="nav_icon_back" onclick="closeForm()">back</i>
<div class="nav_icon_second">
  <i onclick="addNote()">submit</i>
</div>
</nav>
<div class='inputs'>
<input type="text" name="title" id="title" placeholder="Title" />
<input
  type="text"
  name="description"
  id="description"
  placeholder="Start typing..."
/>
<option>
</option>
</div>`;

  if (formPopup.classList.contains("active")) {
    formPopup.innerHTML = formContent;
  }
}

function closeForm() {
  const formPopup = document.querySelector(".form_popup");
  formPopup.classList.remove("active");

  if (!formPopup.classList.contains("active")) {
    formPopup.innerHTML = `
            <button onclick="openForm()">+</button>
        `;
  }
}

function openCategoryForm() {
  const categoryPopup = document.querySelector(".add_category_popup");
  categoryPopup.classList.add("active");

  const categoryContent = `<nav class="nav_icons">
  <i class="nav_icon_back" onclick="closeCategoryPopup()">back</i>
  <div class="nav_icon_second">
    <i onclick="addCategory()">submit</i>
  </div>
  </nav>
  <div class='inputs'>
  <input type="text" name="title" id="title" placeholder="Title" />
  <input
    type="text"
    name="description"
    id="description"
    placeholder="Start typing..."
  />`;

  if (categoryPopup.classList.contains("active")) {
    categoryPopup.innerHTML = categoryContent;
  }
}

function closeCategoryPopup() {
  const catPopup = document.querySelector(".add_category_popup");
  catPopup.classList.remove("active");

  if (!catPopup.classList.contains("active")) {
    catPopup.innerHTML = `
              <i class="folder" onclick="openCategoryForm()">Folder</i>
    `;
  }
}
