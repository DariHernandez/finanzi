const header_nav = document.querySelector ("header nav")
const header_btn = document.querySelector ("#menu-btn")
const header = document.querySelector('header')

header_btn.addEventListener ("click", function (e) {
    header_nav.classList.toggle ("open")
})

// get the sticky element

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(header)