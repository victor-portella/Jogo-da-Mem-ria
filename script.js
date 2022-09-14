const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

startGame()

function startGame() {
    game.createCardsFromTechs()
    initializeCards(game.cards)
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard")

    cards.forEach((card) => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    })
}

function createCardContent(card, element) {
    createCardFace(FRONT, card, element)
    createCardFace(BACK, card, element)
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)

    if (face === FRONT) {
        let iconELement = document.createElement('img')
        iconELement.classList.add(ICON)
        iconELement.src = "./images/" + card.icon + ".png"
        cardElementFace.appendChild(iconELement)
    } else {
        cardElementFace.innerHTML = "&lt/&gt"
    }

    element.appendChild(cardElementFace)
}

function flipCard() {
    this.classList.add("flip")
}