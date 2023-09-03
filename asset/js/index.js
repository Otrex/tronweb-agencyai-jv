// ⭐ INDEX.JS

const rippleBtns = document.querySelectorAll(".btn-with-ripple"); //Ripple Effect Buttons

// 👇🏽 This Function/Loop creates a ripple effect on any button with a class of "btn-with-ripple" &
// 👉🏽  a direct child element(span) of class "btn-ripple"
//      Example: 👉🏽 <button class="btn-with-ripple">
//                      <p>THIS IS A BUTTON WITH RIPPLE EFFECT</p>
//                      <span class="btn-ripple"></span>
//                   </button>

rippleBtns.forEach((rippleBtn) => {
  rippleBtn.addEventListener("click", (e) => {
    let ripple = rippleBtn.querySelector(".btn-ripple");

    let posX = e.offsetX;
    let posY = e.offsetY;

    ripple.style.setProperty("--x", posX + "px");
    ripple.style.setProperty("--y", posY + "px");
    ripple.classList.add("visible");

    ripple.addEventListener("animationend", () => {
      ripple.classList.remove("visible");
    });
  });
});
