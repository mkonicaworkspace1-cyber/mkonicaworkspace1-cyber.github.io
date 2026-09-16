
document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("[data-search]");
  if (search) {
    const items = [...document.querySelectorAll("[data-search-item]")];
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

  document.querySelectorAll("[data-current]").forEach(link => {
    const current = location.pathname.split("/").pop() || "index.html";
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
});
