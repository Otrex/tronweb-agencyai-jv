const sections = document.querySelectorAll(".observer-section");

const options = {
  root: null,
  threshold: 0.7,
  rootMargin: "0px",
};
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("intersecting");
    }
    //  else {
    //   entry.target.classList.remove("visible");
    // }

    // observer.unobserve(entry.target);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
