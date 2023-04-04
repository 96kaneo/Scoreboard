let scoreHome = document.getElementById('homeScore')
let scoreGuest = document.getElementById('guestScore')

let homeScore = 0
let guestScore = 0




function homeOne() {
    homeScore += 1
    scoreHome.textContent = homeScore
    leader()

}

function homeTwo() {
    homeScore += 2
    scoreHome.textContent = homeScore
    leader()
}

function homeThree() {
    homeScore += 3
    scoreHome.textContent = homeScore
    leader()
}

function guestOne() {
    guestScore += 1
    scoreGuest.textContent = guestScore
    leader()
}
function guestTwo() {
    guestScore += 2
    scoreGuest.textContent = guestScore
    leader()
}
function guestThree() {
    guestScore += 3
    scoreGuest.textContent = guestScore
    leader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    scoreGuest.textContent = guestScore
    scoreHome.textContent = homeScore
    leader()
}
function leader() {
    if (homeScore > guestScore) {
        scoreHome.style.color = "#38FF31";
        scoreGuest.style.color = "#F94F6D";
    } else if (guestScore > homeScore) {
        scoreGuest.style.color = "#38FF31";
        scoreHome.style.color = "#F94F6D";
    } else {
        scoreGuest.style.color = "#F94F6D";
        scoreHome.style.color = "#F94F6D";
    }

}




