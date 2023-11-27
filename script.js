const allPaths = document.querySelectorAll('path');

const setBg = () => {
    allPaths.forEach((path) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      path.setAttribute('fill', "#" + randomColor);
    });
  }

  setBg();



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

function myFunction() {
  navbar.classList.add("sticky")
  
}


allPaths.forEach((path) => {
  const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const boundingBox = path.getBBox();
  const textX = boundingBox.x + boundingBox.width / 2;
  const textY = boundingBox.y + boundingBox.height / 2;

  textElement.setAttribute('x', textX);
  textElement.setAttribute('y', textY);
  textElement.setAttribute('text-anchor', 'middle');
  
  const fontSize = Math.min(boundingBox.width, boundingBox.height) * 0.25;
  textElement.setAttribute('font-size', fontSize);

  textElement.textContent = path.getAttribute('name');

  path.parentNode.appendChild(textElement);
});



const game = () => {
  let playerElements = document.querySelectorAll(".player");
  let player;
  let gameInProgress = false;
  let flag = document.getElementById("flag");
  const nexturn = document.getElementById("nexturn");
  let basegold = 14
  let AdmValue = document.getElementById("Adm").querySelector('.value');
  let DipValue = document.getElementById("Dip").querySelector('.value');
  let MilValue = document.getElementById("Mil").querySelector('.value');
  let goldValue = document.getElementById("gold").querySelector('.value');

  nexturn.addEventListener("click", () => {
    if (gameInProgress) {
      AdmValue.innerText = parseInt(AdmValue.innerText) + 14;
      DipValue.innerText = parseInt(DipValue.innerText) + 14;
      MilValue.innerText = parseInt(MilValue.innerText) + 14;
      goldValue.innerText = parseInt(goldValue.innerText) + basegold ;
    }
  });

  allPaths.forEach((path) => {
    path.addEventListener('click', () => {
      if (!gameInProgress) {
        player = path.getAttribute('name');
        console.log(player);
        gameInProgress = true;
        flag.style.backgroundImage = `url('img/${player}.svg')`;
        playerElements.forEach((element) => {
          element.innerText = player;
        });
      }
    });
  });
}

game();




