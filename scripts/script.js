const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("selectColor");
const colors = [];

checkbox.disabled = true;
submitBtn.disabled = true;

let getRandomColor = () => {
  const colorCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorCode[Math.floor(Math.random() * 16)];
  }
  return color;
};

elements.forEach((element) => {
  const color = getRandomColor();
  colors.push(color);
  const rightColor = colors[Math.floor(Math.random() * colors.length)];
  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = rightColor;
  selectColor.style.color = rightColor;
});

elements.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.checked = true;
      alert("You are human!!!");
      submitBtn.disabled = false;
      submitBtn.classList.add("right-btn");
    } else {
      alert("Please, choose the right color for verification!");
      location.reload(true);
    }
  });
});
