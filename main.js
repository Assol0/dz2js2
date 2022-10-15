let btnRed = document.querySelector('.btnRed')  
let btnYellow = document.querySelector('.btnYellow')
let btnGreen = document.querySelector('.btnGreen')
let btnReset = document.querySelector('.btnReset')

const d = document.body
btnRed.addEventListener('click', () => {
    setTimeout(() => {
        d.style.backgroundColor = "red"
        btnRed.style.backgroundColor = "red"
    },100)
    console.log('Paint it Red');
})
btnYellow.addEventListener('click', () => {
    setTimeout(() => {
        d.style.backgroundColor = "yellow"
        btnYellow.style.backgroundColor = "yellow"
    },100)
    console.log('Paint it Yellow');
})
btnGreen.addEventListener('click', () => {
    setTimeout(() => {
        d.style.backgroundColor = "green"
        btnGreen.style.backgroundColor = " Paint it green"

    },100)
    console.log('Green');
})

btnReset.addEventListener('click', () => {
     setTimeout(() =>{
        d.style.backgroundColor = "white"
        btnRed.style.backgroundColor = "white"
        btnYellow.style.backgroundColor = "white"
        btnGreen.style.backgroundColor = "white"

     },100)
     console.log("reset");
})