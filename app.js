function toggleDarkMode() {
  const body = document.getElementById("body");
  body.classList.toggle("dark-mode");

  // Save preference to localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check for saved user preference on load
document.addEventListener("DOMContentLoaded", () => {
  const darkModeSaved = localStorage.getItem("darkMode");

  if (darkModeSaved === "true") {
    document.getElementById("body").classList.add("dark-mode");
  }
});
