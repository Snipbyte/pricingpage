  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("small-range");
    const card = document.getElementById("ultimate-card");
    const listItems = card.querySelectorAll("li");
    const priceValue = document.getElementById("price-value");

    slider.addEventListener("input", function () {
      const sliderValue = parseInt(this.value);

      listItems.forEach(function (item, index) {
        const threshold = (index + 1) * 5;

        if (sliderValue >= threshold || sliderValue >= 80) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });

      if (sliderValue >= 80) {
        priceValue.textContent = "$134";
      } else {
        const price = 10 + Math.floor(sliderValue / 10) * 10;
        priceValue.textContent = "$" + price;
      }
    });
  });

