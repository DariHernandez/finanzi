var header_nav = document.querySelector ("header nav")
var header_btn = document.querySelector ("#menu-btn")

header_btn.addEventListener ("click", function (e) {
    header_nav.classList.toggle ("open")
})