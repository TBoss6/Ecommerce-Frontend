const wrapper = document.querySelector(".sliderWrapper");

// Product data
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgrey",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgrey",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgrey",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "grey",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

// DOM elements
const menuItems = document.querySelectorAll(".menuItem");
let chosenProduct = products[0]; // Default product
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Function to update UI based on chosen product
function updateProductUI() {
  // Update product details
  currentProductTitle.textContent = chosenProduct.title;
  currentProductPrice.textContent = "$" + chosenProduct.price;
  currentProductImg.src = chosenProduct.colors[0].img;

  // Update color options
  currentProductColors.forEach((color, index) => {
    if (index < chosenProduct.colors.length) {
      color.style.backgroundColor = chosenProduct.colors[index].code;
      color.style.display = "block"; // Ensure visible
    } else {
      color.style.display = "none"; // Hide unused color options
    }
  });
}

// Add click listeners to color options (only once, outside menuItems.forEach)
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (index < chosenProduct.colors.length) {
      currentProductImg.src = chosenProduct.colors[index].img;
    }
  });
});

// Add event listeners to menu items
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    console.log("You clicked " + index);

    // Update the chosen product
    chosenProduct = products[index];

    // Update UI with the new product details
    updateProductUI();
  });
});

// Add event listeners to size options
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    // Reset all sizes
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });

    // Highlight selected size
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Button for payment modal
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Close payment modal
close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Initialize default UI state
updateProductUI(); // Called at the end to set initial state

// const wrapper = document.querySelector(".sliderWrapper");

// // wrapper.style.transform = "translateX(-400vw)";

// const products = [
//   {
//     id: 1,
//     title: "Air Force",
//     price: 119,
//     colors: [
//       {
//         code: "black",
//         img: "./img/air.png",
//       },
//       {
//         code: "darkblue",
//         img: "./img/air2.png",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Air Jordan",
//     price: 149,
//     colors: [
//       {
//         code: "lightgrey",
//         img: "./img/jordan.png",
//       },
//       {
//         code: "green",
//         img: "./img/jordan2.png",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Blazer",
//     price: 109,
//     colors: [
//       {
//         code: "lightgrey",
//         img: "./img/blazer.png",
//       },
//       {
//         code: "green",
//         img: "./img/blazer2.png",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Crater",
//     price: 129,
//     colors: [
//       {
//         code: "black",
//         img: "./img/crater.png",
//       },
//       {
//         code: "lightgrey",
//         img: "./img/crater2.png",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Hippie",
//     price: 99,
//     colors: [
//       {
//         code: "grey",
//         img: "./img/hippie.png",
//       },
//       {
//         code: "black",
//         img: "./img/hippie2.png",
//       },
//     ],
//   },
// ];

// const menuItems = document.querySelectorAll(".menuItem");

// let chosenProduct = products[0];

// const currentProductImg = document.querySelector(".productImg");
// const currentProductTitle = document.querySelector(".productTitle");
// const currentProductPrice = document.querySelector(".productPrice");
// const currentProductColors = document.querySelectorAll(".color");
// const currentProductSizes = document.querySelectorAll(".size");

// menuItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     // change the current slide
//     wrapper.style.transform = `translateX(${-100 * index}vw)`;
//     console.log("You clicked" + index);

//     // change the Chosen Product
//     chosenProduct = products[index];

//     // change text of Chosen Product
//     currentProductTitle.textContent = chosenProduct.title;
//     currentProductPrice.textContent = "$" + chosenProduct.price;
//     currentProductImg.src = chosenProduct.colors[0].img;

//     // Assigning new color
//     currentProductColors.forEach((color, index) => {
//       color.style.backgroundColor = chosenProduct.colors[index].code;
//     });

//     // Change the color of each snickers
//     currentProductColors.forEach((color, index) => {
//       color.addEventListener("click", () => {
//         currentProductImg.src = chosenProduct.colors[index].img;
//       });
//     });

//     // Sizes
//     currentProductSizes.forEach((size, index) => {
//       size.addEventListener("click", () => {
//         currentProductSizes.forEach((size) => {
//           size.style.backgroundColor = "white";
//           size.style.color = "black";
//         });
//         size.style.backgroundColor = "black";
//         size.style.color = "white";
//       });
//     });
//   });
// });

// const productButton = document.querySelector(".productButton");
// const payment = document.querySelector(".payment");
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//   payment.style.display = "flex";
// });
// close.addEventListener("click", () => {
//   payment.style.display = "none";
// });
