const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☾" : "☼";
});

const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
