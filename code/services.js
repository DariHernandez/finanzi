
const buttons_wrapper = document.querySelector(".buttons")
var current_article = 1

// List of articles
var buttons = []

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

// Get all buttons
for (let button_num = 0; button_num<=6; button_num++) {
    let selector_button = "#btn-service-" + button_num
    let button = document.querySelector (selector_button)
    buttons.push (button)
}

// Detect buttons clicks
buttons_wrapper.addEventListener ("click", async function (event) {

    // Get button
    target_button = event.path[0]

    // Validate click element
    if (target_button.tagName.toLowerCase() != "button") {
        return null
    }

    // Get number of the buton
    let id = String(target_button.id)
    let num = id.charAt (id.length - 1)

    // Skip the current article
    if (num == current_article) {
        return null
    }

    // Get and deactivate other buttons
    for (let button of buttons) {
        if (button) {
            button.classList.remove ("active")
        }
    }

    // Activate new button
    target_button.classList.add ("active")
    

    // Get the last article
    let selector_last_article = '#service-' + current_article
    let article_last = document.querySelector (selector_last_article)

    // Hide the last article
    article_last.classList.add ("transparent")
    await sleep(0.25)
    article_last.classList.add ("hide")


    // Get the new article
    let selector_new_article = '#service-' + num
    let new_article = document.querySelector (selector_new_article)

    // Show new article
    new_article.classList.remove ("hide")
    await sleep(0.25)
    new_article.classList.remove ("transparent")
    

    // Update current article counter
    current_article = num
})