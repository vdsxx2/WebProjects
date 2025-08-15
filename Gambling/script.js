var fullArray = [];
var bet;
const numArray = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const suitArray = ['hearts', 'spades', 'clubs', 'diamonds'];

const bet10Button = document.querySelector(".bet10Button");
const bet20Button = document.querySelector(".bet20Button");
const noBetButton = document.querySelector(".noBetButton");

// consnole stuff

function drawCard(drawNum){
    for (i = 0; i < drawNum; i++) {
        let card;
        do {
            var suit = Math.floor(Math.random() *  4);
            var num = Math.floor(Math.random() * 13);
            card = `${numArray[num]} of ${suitArray[suit]}`;
        } while (fullArray.includes(card));
            fullArray.push(card);
            console.log(card);
    }
}

function displayCards(){
    console.log("The table is:");
    drawCard(5);
    console.log("")
    console.log("Your hand is:")
    drawCard(5);
}

// displayed stuff

const potLabel = document.querySelector(".POT")
const betLabel = document.querySelector(".BETBUTTON")

var pot = 100;

function hideButtons(){
    noBetButton.style.display = "none";
    bet10Button.style.display = "none";
    bet20Button.style.display = "none";
}

noBetButton.addEventListener("click", () => {
    hideButtons();
    console.log("");
    console.log("You did not bet");
    bet = 0;
    betLabel.hidden = false;
    betLabel.textContent = "Vro didnt bet anything 🥀"
});

bet10Button.addEventListener("click", () => {
    hideButtons();
    console.log("");
    console.log("You bet 10");
    potLabel.innerHTML = "POT: " + String(pot - 10);
    betLabel.hidden = false;
    betLabel.textContent = "Broke boy bet only 10 😂😂😂"
});
bet20Button.addEventListener("click", () => {
    hideButtons();
    console.log("");
    console.log("You bet 20");
    potLabel.innerHTML = "POT: " + String(pot - 20);
    betLabel.hidden = false;
    betLabel.textContent = "Thats what we like to see 😎"
});

displayCards();
