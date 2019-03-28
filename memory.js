// shuffle animation --> fromto or stagger from to
// from to selector, position x random y random , 0.25

const activeCards = [];
shuffle();
assignImages();
setCardClickListener();

// 0. on a card click, check if that card is already visible from the history DONE
// 1. on a card click, add that card DOM element to your active Cards Done
// 3. Select the front element inside each of the cards and compare the background image
// 3.1. if they match, increase an imaginary score and dont turn them back
// 3.2. if they don't match, turn both cards background
// 4. clear your activeCards Array

function shuffle() {
    document.querySelectorAll(".memory-card").forEach(function(card, index) {
        const randNum = Math.floor(Math.random() * Math.floor(700));
        TweenMax.fromTo(
            card,
            1.5,
            { x: randNum, y: randNum, scale: 0.1, opacity: 0 },
            { y: 0, x: 0, scale: 1, opacity: 1, ease: Back.easeOut }
        );
    });
}

function rotateCard(card) {
    TweenMax.to(card, 0.5, { transform: "rotateY(180deg)" });
}

function cardClickHandler(card) {
    if (cardIsVisible(card)) {
    } else {
        rotateCard(card);
        activeCards.push(card);
    }
}

function setCardClickListener() {
    document.querySelectorAll(".memory-card").forEach(function(card) {
        card.addEventListener("click", cardClickHandler.bind(null, card));
    });
}

function cardIsVisible(card) {
    return activeCards.includes(card);
}

function assignImages() {
    const randImages = [
        "https://images.unsplash.com/photo-1515103080814-9bb8eedfd2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80",
        "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
        "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1520325143471-6969ad29c351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1497781495506-ce58b286d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1541689221361-ad95003448dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1529953238009-ce59a45fafaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1522231796108-23cbe9982a9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1517001657880-5608528ca7fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
    ];
    const frontCards = Array.from(document.querySelectorAll(".memory-card .memory-card-front"));
    while (frontCards.length > 0) {
        const firstFront = frontCards.splice(Math.floor(Math.random() * frontCards.length), 1)[0];
        const secondFront = frontCards.splice(Math.floor(Math.random() * frontCards.length), 1)[0];

        const image = randImages.shift();
        console.log("firstFront :", firstFront);
        firstFront.style.backgroundImage = `url(${image})`;
        secondFront.style.backgroundImage = `url(${image})`;
    }
    console.log("frontCards :", frontCards);
}

/**
TweenMax.staggerFromTo(
    ".memory-card",
    1.5,
    { x: randNum, y: randNum, scale: 0.1, opacity: 0 },
    { y: 0, x: 0, scale: 1, opacity: 1, ease: Back.easeOut },
    0.25
);

 */
