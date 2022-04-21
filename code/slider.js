const back_btn = document.querySelector ("#btn-prev")
const next_btn = document.querySelector ("#btn-next")
const slider = document.querySelector ("#slider")
const width = window.innerWidth

slider.style.transitionDuration = "0.5s"

var is_auto_slide = true
var image_counter =  1


async function auto_slide () {
    // Auto slite to right, each 5 seconds
    await sleep (5)

    while (is_auto_slide) {
        go_next_image ()
        await sleep (5)
    }
}
auto_slide ()

// Add listeners to buttons
back_btn.addEventListener ("click", function (e) {
    is_auto_slide = false
    go_back_image ()
})
next_btn.addEventListener ("click", function (e) {
    is_auto_slide = false
    go_next_image ()
})

function go_back_image () {
    // Move slide image to left

    // Calculate image
    image_counter -= 1
    if (image_counter == 0) {
        image_counter = 3
    }
    
    // Move to back image
    translate = -(image_counter - 1)*100
    slider.style.transform = "translateX(" + translate + "vw)"
}

function go_next_image () {
    // Move slide image to right

    // Calculate image
    image_counter += 1
    if (image_counter == 4) {
        image_counter = 1
    }
    
    // Move to next image
    translate = -(image_counter - 1)*100
    slider.style.transform = "translateX(" + translate + "vw)"
}