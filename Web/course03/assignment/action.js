// Function to safely add event listeners
function addEventListenerIfExists(id, event, func) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener(event, func);
    }
}

// Adding event listeners to navigation buttons
addEventListenerIfExists("homecata", "click", clickCatalog);
addEventListenerIfExists("news", "click", clicknews);
addEventListenerIfExists("card", "click", clickcard);
addEventListenerIfExists("inquires", "click", clickinquires);
addEventListenerIfExists("submit", "click", clicksubmit);
addEventListenerIfExists("loanbook", "click", clickloan);

// Navigation functions
function clickCatalog() {
    window.location.href = "catalog.html";
}

function clicknews() {
    window.location.href = "latest_news.html";
}

function clickinquires() {
    window.location.href = "inquires.html";
}

function clickcard() {
    window.location.href = "librarycard.html";
}

function clicksubmit() {
    window.location.href = "catalog.html";
}

function clickloan() {
    console.log("Loaning button clicked");
    window.location.href = "loaning.html";
}