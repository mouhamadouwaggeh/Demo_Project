let contact = document.querySelector("#Contacts");
let button = document.querySelector("#Button");

button.onclick = function() {
    if (contact.style.display == "none") {
        contact.style.display = "block"
    }
    else {
        contact.style.display = "none"
    }
}

let prices = document.querySelector("#Prices");
let button2 = document.querySelector("#Button2");
button2.onclick = function() {
    if (prices.style.display == "none") {
        prices.style.display = "block"
    }
    else {
        prices.style.display = "none"
    }
}
