setTimeout(() => {
    document.querySelector("h1").className = ""
}, 1000)

const konami = require("konami")

new konami("https://www.snapchat.com/add/eamon.ma")

const typed = require("typed.js")

new typed(".type", {
    strings: [" is a human", " subscribes to <em>The Economist</em>."],
    typeSpeed: 30,
})