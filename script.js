// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  const colorCode = document.getElementById("color-code");

  // Generate a random hexadecimal color, e.g. "#A3F2C1"
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // On click: change the box background to a random color
  changeColorBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
  });
});
