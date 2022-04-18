const go_top = document.querySelector ("#go-top")

go_top.addEventListener ("click", function (e) {
    console.log ("go top")
    window.scrollTo({top: 0})
})