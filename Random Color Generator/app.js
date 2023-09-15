(function(){
const button = document.querySelector("button");
const body = document.querySelector("body");
const text = document.querySelector("h1");
button.addEventListener('click',function(e){
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
    text.textContent = color;
});
})();