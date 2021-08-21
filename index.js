/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

function show_slide_image(class_name, o, n) {
  let slides = document.getElementsByClassName(class_name);
  slides[o].style.display = "none";
  slides[n].style.display = "block";
}

let slide_image_indices = {};

function mod(x, y) {
  return ((x % y) + y) % y;
}

function advance_engine_slide_image(class_name, by) {
  let slides = document.getElementsByClassName(class_name);
  let o = 0;
  if (class_name in slide_image_indices) {
    o = slide_image_indices[class_name];
  }
  slide_image_indices[class_name] = mod(o + by, slides.length);
  show_slide_image(class_name, o, slide_image_indices[class_name]);
}
show_slide_image("scarlet_image", 0, 0);
show_slide_image("villager_image", 0, 0);
show_slide_image("revival_image", 0, 0);
show_slide_image("trouble_image", 0, 0);
