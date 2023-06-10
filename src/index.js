import './less/index.less'

// Your code goes here!

//event 1
window.onload = function(){
    console.log("ready to go");
    let header = document.querySelector('h1');
    header.textContent = "event 1";

}
//event 2
window.addEventListener('copy',() => {
    navigator.clipboard.readText()
    .then(text => (
        console.log(text)
    ))
})

//event 3

document.addEventListener("pointerenter", () => {
    console.log("event 3");
})

//event 4

let signupButton = document.querySelector("a");

signupButton.addEventListener('click',() => {
    signupButton.textContent = "text changed";
})

//event 5

document.body.addEventListener('click', (event) =>{
    event.target.classList.toggle('event5');
})


// event 6



