let container = document.querySelector("container");
let GridButton = document.getElementById("submit-grid");
let ClearBtn = document.getElementById("clear-grid");
let ColorBtn = document.getElementById("color-input");
let EraseBtn = document.getElementById("erase-btn");
let PaintBtn = document.getElementById("paint-btn");
let GridHeight = doocument.getElementById("height-range");
let GridWidth = document.getElementById("width-range");
let HeightValue = document.getElementById("height-value");
let WidthValue = document.getElementById("width-value");

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",  //start drawing down means like touch on the screen
    move: "touchmove",  //finger moving on the screen
    up: "touchend",   //stop drawing up the finger from the screen 
  },
};

let deviceType = "";
let draw = false;
let erase = false;

const isTouchDevice = () => {

    try {
        document.createEvent("TouchEvent"); //device check lre ka touch h k mouse touch h to true mouse h to false..

        devicetype = "touch";
        return true;
    }
    catch (e) {
        devicetype = "mouse";
        return false
    }
}
isTouchDevice();

gridButton.addEventListener("click", ()=> {

container.innerHTML = "";
let count = 0;

for(let i = 0; i< gridHeight.ariaValue; i++){
  count += 2;
}
}

})
