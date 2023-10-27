

/*=======================================================================================
  =======================================================================================
  ===============================  products pages js ====================================
  =======================================================================================
  =======================================================================================*/
//filter button toggling
let filterBtn = document.getElementById("filterBtn");
let hidden = document.getElementById("hidden");
let right = document.getElementById("right");

filterBtn.addEventListener("click", () => {
  if (hidden.classList.contains("d-none")) {
    hidden.classList.remove("d-none");
    right.classList.add("col-xxl-9");
    right.classList.remove("col-xxl-12");
  } else {
    hidden.classList.add("d-none");
    right.classList.add("col-xxl-12");
    right.classList.remove("col-xxl-9");
  }
});
//   /* ====================== filtration for price =====================*/
let underTen = document.querySelectorAll(".price-5-10");
let overTen = document.querySelectorAll(".price-11-20");
let checkBoxUnder = document.getElementById("price-5-10");
let checkBoxOver = document.getElementById("price-11-20");
let checkBoxNull1 = document.getElementById("null1");
let checkBoxNull2 = document.getElementById("null2");
let checkBoxNull3 = document.getElementById("null3");
checkBoxUnder.addEventListener("change", () => {
  // If the "Under 10$" checkbox is checked, hide elements with the "over" class
  overTen.forEach((element) => {
    element.style.display = checkBoxUnder.checked ? "none" : "block";
  });
});
checkBoxOver.addEventListener("change", () => {
  // If the "Over 10$" checkbox is checked, hide elements with the "under" class
  underTen.forEach((element) => {
    element.style.display = checkBoxOver.checked ? "none" : "block";
  });
});
checkBoxNull1.addEventListener("change", () => {
  // If the "Under 10$" checkbox is checked, hide elements with the "over" class
  underTen.forEach((element) => {
    element.style.display = checkBoxNull1.checked ? "none" : "block";
  });
  overTen.forEach((element) => {
    element.style.display = checkBoxNull1.checked ? "none" : "block";
  });
});
checkBoxNull2.addEventListener("change", () => {
  // If the "Under 10$" checkbox is checked, hide elements with the "over" class
  underTen.forEach((element) => {
    element.style.display = checkBoxNull2.checked ? "none" : "block";
  });
  overTen.forEach((element) => {
    element.style.display = checkBoxNull2.checked ? "none" : "block";
  });
});
checkBoxNull3.addEventListener("change", () => {
  // If the "Under 10$" checkbox is checked, hide elements with the "over" class
  underTen.forEach((element) => {
    element.style.display = checkBoxNull3.checked ? "none" : "block";
  });
  overTen.forEach((element) => {
    element.style.display = checkBoxNull3.checked ? "none" : "block";
  });
});


//   /* ====================== filtration for color and size =====================*/
// Select all size buttons
let sizeBtnSmall = document.getElementById("size-small");
let sizeBtnMedium = document.getElementById("size-medium");
let sizeBtnLarge = document.getElementById("size-large");
let sizeBtnXLarge = document.getElementById("size-xlarge");
let sizeBtnXXLarge = document.getElementById("size-xxlarge");
// Select all color buttons
let colorBtnRed = document.getElementById("color-red");
let colorBtnGreen = document.getElementById("color-green");
let colorBtnGray = document.getElementById("color-gray");
let colorBtnBlue = document.getElementById("color-blue");
let colorBtnYellow = document.getElementById("color-yellow");
// Select all products buttons
let allProductsBtn = document.getElementById("All-Products");
// Select all product elements
let productElements = document.querySelectorAll(".col-6");
// Function to show products of a specific size and color and hide others
function showProductsBySizeAndColor(sizeClass, colorClass) {
  productElements.forEach((element) => {
    const hasSize = sizeClass === "all" || element.classList.contains(sizeClass);
    const hasColor = colorClass === "all" || element.classList.contains(colorClass);
    if (hasSize && hasColor) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
// Add click event listeners to the size buttons
sizeBtnSmall.addEventListener("click", function () {
  showProductsBySizeAndColor("size-small", "all");
});
sizeBtnMedium.addEventListener("click", function () {
  showProductsBySizeAndColor("size-medium", "all");
});
sizeBtnLarge.addEventListener("click", function () {
  showProductsBySizeAndColor("size-large", "all");
});
sizeBtnXLarge.addEventListener("click", function () {
  showProductsBySizeAndColor("size-xlarge", "all");
});
sizeBtnXXLarge.addEventListener("click", function () {
  showProductsBySizeAndColor("size-xxlarge", "all");
});
// Add click event listeners to the color buttons
colorBtnRed.addEventListener("click", function () {
  showProductsBySizeAndColor("all", "color-red");
});
colorBtnGreen.addEventListener("click", function () {
  showProductsBySizeAndColor("all", "color-green");
});
colorBtnGray.addEventListener("click", function () {
  showProductsBySizeAndColor("all", "color-gray");
});
colorBtnBlue.addEventListener("click", function () {
  showProductsBySizeAndColor("all", "color-blue");
});
colorBtnYellow.addEventListener("click", function () {
  showProductsBySizeAndColor("all", "color-yellow");
});
// return all of products again
// Add click event listener to the "All Products" button
allProductsBtn.addEventListener("click", function () {
  // Loop through all product elements and show them
  productElements.forEach((element) => {
    element.style.display = "block";
  });
});
/*=======================================================================================
  =======================================================================================
  =============================== end of  products pages js =============================
  =======================================================================================
  =======================================================================================*/



