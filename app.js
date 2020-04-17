setTimeout(() => {
    document.querySelector("h1").className = ""
}, 1000)

const konami = require("konami-js")

new konami(() => {
    window.location.assign("https://www.snapchat.com/add/eamon.ma")
})