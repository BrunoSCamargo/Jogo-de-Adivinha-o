//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)

let xAtteempts = 1

//eventos
btnTry.addEventListener("click", buttonTryClick)
btnReset.addEventListener("click", buttonReset )
// document.addEventListener("keydown", function(e) {
//    if(e.key == "Enter") {
//      buttonReset()
//    }
   
// })
 

//funcão callback
function buttonTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#numberInput")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAtteempts} Tentativas`
  }
  
  inputNumber.value = ""
 xAtteempts++
}

function buttonReset() {
  toggleScreen()
  xAtteempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}