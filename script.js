const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)

/*_____________________________________________________________________*/

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      jump();
    }
});

function start(){
    if(cactus.classList != "start"){
        cactus.classList.add("start");
    }else{
        cactus.classList.remove("start");
    }
}

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
      start();
    }
});


