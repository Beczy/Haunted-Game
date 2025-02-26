document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('start-button').addEventListener('click', () => {
    setTimeout(removeStartButton, 500);
    setTimeout(beginningLine, 1000);
    setTimeout(removeBeginningLine, 12000);
    setTimeout(hauntedGame, 12300);
    setTimeout(changeBackground, 1000);
  });
});

function changeBackground() {
  document.body.style.backgroundColor = 'black'; 
  document.body.style.backgroundImage = 'none';
}

function beginningLine() {
  document.getElementById('reload-page').innerHTML = `
    <p id="beginLine"> In the dead of night, as the moon cowers behind swirling clouds, you awaken in a crumbling mansion where every creak and whispered secret shouts: your nightmare has just begun...</p>
  `;
}

function removeStartButton() {
  document.getElementById('start-button').remove();
}

function removeBeginningLine() {
  document.getElementById('beginLine').remove();
}

// Game Logic
let hasKey = false;
let attempts = 0;

function hauntedGame() {
  document.getElementById('reload-page').innerHTML = `
    <p id="beginingLine">You are in a dark room. What would you do?</p>
    <button id="firstButtons" onclick="makeChoice(1)">Open door</button> 
    <button id="firstButtons" onclick="makeChoice(2)">Look under the bed</button> 
    <button id="firstButtons" onclick="makeChoice(3)">Use the trapdoor</button>
    <p id="game-message"></p>
  `;
}

function makeChoice(choice) {
  let message = "";

  switch (choice) {
    case 1:
      if (hasKey) {
        message = document.getElementById('game-message').innerHTML = `You unlocked the door... Maybe you escape already?`;
        setTimeout(() => location.reload(), 3000);
      } else {
        message = document.getElementById('game-message').innerHTML = "The door is locked. Find a key to unlock it! 🔑";
      }
      break;
    
    case 2:
      if (!hasKey) {
        for (let i = 0; i < 3; i++) {
          console.log("You search under the bed...");
        }
        message= document.getElementById('game-message').innerHTML = `You found a key! 🔑`;
        hasKey = true;
      } else {
        message= document.getElementById('game-message').innerHTML = `There's nothing left under the bed.`;
      }
      break;
    
    case 3:
      message = document.getElementById('game-message').innerHTML = `Oh no! A ghost appeared in front of you, but you tripped over the bed and hit your head.... Start again!`;
      setTimeout(() => location.reload(), 3000);
      break;
    default:
      message = "Invalid choice!";
  }

  document.getElementById("game-message").textContent = message;
}