function handleClick() {
    alert('Clicked!');
}
  
function handleMouseOver() {
    alert('Mouse over!');
}
  
function handleMouseOut() {
    alert('Mouse out!');
}
function handleMouseDown() {
    alert('Mouse down!');
}
function handleClick() {
    alert('Button clicked!');
}
function handleMouseOver() {
    alert('Mouse over!');
}
  
function handleMouseOut() {
    alert('Mouse out!');
}
function handleKeyUp(event) {
    alert('Key up: ' + event.key);
}
function handleKeyDown(event) {
    alert('Key down: ' + event.key);
}

const button = document.querySelector('#myButton');
button.onclick = handleClick;

const button2 = document.querySelector('#myButton2');
button2.onmouseover = handleMouseOver;

const button3 = document.querySelector('#myButton3');
button3.onmouseout = handleMouseOut;

const button4 = document.querySelector('#myButton4');
button4.onmousedown = handleMouseDown;
  
document.onkeyup = handleKeyUp;
document.onkeydown = handleKeyDown;
