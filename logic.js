function toggleLike(el) {
    el.classList.toggle("liked");
    el.classList.toggle("fa-solid");
}

function toggleBookmark(el) {
    el.classList.toggle("clicked");
}

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});