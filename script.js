const xpProgress = document.querySelector(".xp-progress")

const xpText = document.querySelector("#xp-text")

const buttons = document.querySelectorAll(".done-btn")

const levelText = document.querySelector("#level-text")

let xp = 0
let level = 1

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        xp += 10

        if (xp >= 100) {

            level += 1

            xp = 0

            levelText.innerText = "Nível " + level

        }

        xpProgress.style.width = xp + "%"

        xpText.innerText = xp + " / 100 XP"

    })

})