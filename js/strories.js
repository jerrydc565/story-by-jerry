const menuList = document.getElementById("menuList");
const menuBar = document.getElementById("menuBar");

menuBar.addEventListener("click", function (e) {
  menuList.style.display = "block";
  e.stopPropagation();
  menuList.classList.add("animate");
});

document.body.addEventListener("click", function (e) {
  menuList.style.display = "none";
});
