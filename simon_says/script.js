// window event listener, run playsound function on keydown
window.addEventListener('keydown', playSound)

function playSound(e) { // accepts the event by default
    const audio = document.querySelector(`audio[data-key=${e.code}]`) // find ONE audo file in the doc
    const key = document.querySelector(`.button[data-key=${e.code}]`) // find ONE .button in the doc

    if (!audio) return // stps function if no audio data-key

    audio.currentTime = 0 // rewinds audio
    audio.play() // play audio
    key.classList.add('active') // add active class
    userInputs.push(e.code)
}
const userInputs = []
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('transitionend', removeTransition)) // add transiton end function to each button 

function removeTransition(e){
    if(e.propertyName !== 'transform') return // if not currently in transform, exit
    this.classList.remove('active') // this = the button as button was called against addeventlistener
}
