document.getElementById("pricingToggle").addEventListener("change", function () {
    const isYearly = this.checked;
    const monthlyPrices = document.querySelectorAll(".price.monthly");
    const yearlyPrices = document.querySelectorAll(".price.yearly");
  
    monthlyPrices.forEach(price => {
      price.classList.toggle("hidden", isYearly);
    });
  
    yearlyPrices.forEach(price => {
      price.classList.toggle("hidden", !isYearly);
    });
  });
  