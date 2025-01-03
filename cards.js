let page = 1;
const cardsContainer = document.getElementById("cards");

function createCard(index) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <div>
            <h2>Project ${index}</h2>
            <p>A minimalist card design showcasing project ${index}</p>
        </div>
        <div class="card-number">${String(index).padStart(2, "0")}</div>
    `;
  return card;
}

function loadMoreCards() {
  let startIndex = (page - 1) * 10;
  for (let i = startIndex; i < startIndex + 10; i++) {
    cardsContainer.appendChild(createCard(i + 1));
  }
  page++;
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMoreCards();
  }
}

// Initial load
loadMoreCards();

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
