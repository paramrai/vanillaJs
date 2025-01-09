let categories = JSON.parse(localStorage.getItem("categories")) || [
  "work",
  "personal",
  "ideas",
];
let category = "Uncategorised";
let notes = JSON.parse(localStorage.getItem("notes")) || [];

showNotes(notes);

function showNotes(notes) {
  const noteContainer = document.querySelector(".notes_container");
  noteContainer.innerHTML = "";

  notes.forEach((noteData) => {
    const noteElem = document.createElement("div");
    noteElem.classList.add("note");
    noteElem.setAttribute("data", category);
    noteElem.innerHTML = `
      <div class="title">${noteData.title}</div>
      <div class="description">${noteData.description}</div>
    `;

    noteContainer.appendChild(noteElem);
  });
}

function addNote() {
  const title = document.querySelector('input[name="title"]')?.value;
  const description = document.querySelector(
    'input[name="description"]'
  )?.value;

  if (!title || !description) {
    alert("Please enter title or description properly");
    return;
  }

  notes.push({
    title,
    description,
    category,
  });

  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes(notes);
  closeForm();
}

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function setCategory(cat) {
  category = cat;
  if (cat === "All") {
    category = "Uncategorised";
  }
  const isOpened = document.querySelector(".form_popup.active");
  if (!isOpened) return;
  document.querySelector(".dropdown_btn i").innerText = category;
  toggleDropdown();
}

function openForm() {
  closeCategoryForm();
  const formPopup = document.querySelector(".form_popup");
  formPopup.classList.add("active");

  const formContent = `<nav class="nav_icons">
    <i class="nav_icon_back" onclick="closeForm()">back</i>
    <div class="nav_icons_right">
      <div class="dropdown">
        <button class="dropdown_btn" onclick="toggleDropdown()">
          <i>${category}</i>
        </button>
        <div class="dropdown_content" id="myDropdown">
          ${categories
            .map((cat) => `<span onclick="setCategory('${cat}')">${cat}</span>`)
            .join("")}
        </div>
      </div>
      <i onclick="addNote()">submit</i>
    </div>
  </nav>
  <div class='inputs'>
    <input type="text" name="title" id="title" placeholder="Title" />
    <input type="text" name="description" id="description" placeholder="Start typing..." />
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
          <button onclick="openForm()" id="add_btn">+</button>
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

function setActiveTab(selectedCategory) {
  setCategory(selectedCategory);
  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Add active class to selected tab
  const selectedTab = Array.from(tabs).find(
    (tab) => tab.textContent.toLowerCase() === selectedCategory.toLowerCase()
  );
  if (selectedTab) selectedTab.classList.add("active");

  // Filter and show notes
  const filteredNotes =
    selectedCategory.toLowerCase() === "all"
      ? notes
      : notes.filter(
          (note) =>
            note.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  showNotes(filteredNotes);
}

// Add tabs dynamically
window.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.querySelector(".tabs");
  const allCategories = ["All", ...categories];

  tabsContainer.innerHTML = allCategories
    .map(
      (cat) =>
        `<span class="tab ${cat === "All" ? "active" : ""}" 
     onclick="setActiveTab('${cat}')">${cat}</span>`
    )
    .join("");
});

window.addEventListener("keypress", (e) => {
  const formPopup = document.querySelector(".form_popup");

  if (e.key === "Enter" && formPopup.classList.contains("active")) {
    addNote();
  }
});

// ADD NEW CATEGORY

function addNewCategory() {
  const categoryName = document.querySelector(
    'input[name="categoryName"]'
  )?.value;

  if (!categoryName) {
    alert("Please enter category name");
    return;
  }

  // Add to categories array
  categories.push(categoryName);

  // Save to localStorage
  localStorage.setItem("categories", JSON.stringify(categories));

  updateTabs();
  closeCategoryForm();
}

function updateTabs() {
  const tabsContainer = document.querySelector(".tabs");
  const allCategories = ["All", ...categories];

  tabsContainer.innerHTML = allCategories
    .map(
      (cat) => `<span class="tab ${cat === "All" ? "active" : ""}" 
     onclick="setActiveTab('${cat}')">${cat}</span>`
    )
    .join("");
}

function openCategoryForm() {
  const formPopup = document.querySelector(".category_form_popup");
  if (!formPopup) {
    console.error("Category form popup element not found");
    return;
  }

  formPopup.classList.add("active");
  formPopup.innerHTML = `
    <nav class="nav_icons">
      <i class="nav_icon_back" onclick="closeCategoryForm()">back</i>
      <i onclick="addNewCategory()">submit</i>
    </nav>
    <div class='inputs'>
      <input type="text" name="categoryName" placeholder="Category Name" />
    </div>`;
}

function closeCategoryForm() {
  const formPopup = document.querySelector(".category_form_popup");
  formPopup.classList.remove("active");
}
