
const buttons_wrapper = document.querySelector(".buttons")
var current_article = 1

// List of articles
var buttons = []
var articles = []

// Get all buttons
for (let num = 0; num<=6; num++) {
    
    // Get button
    let selector_button = "#btn-service-" + num
    let button = document.querySelector (selector_button)

    // Get article
    let selector_article = "#service-" + num
    let article = document.querySelector (selector_article)

    // Save articles and buttons
    buttons.push (button)
    articles.push (article)
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
    
    // Loop for each article
    for (let article_last of articles) {
        if (article_last) {
            // Make article transparent
            article_last.classList.add ("transparent")
        } 
    }
    await sleep(0.25)
    for (let article_last of articles) {
        if (article_last) {
            // Hide article
            article_last.classList.add ("hide")
        }
    }
    
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