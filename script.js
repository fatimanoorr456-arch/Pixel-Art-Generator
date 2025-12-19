let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
  mouse: {
    down: "mousedown",   //mousedown means touch the screen start drawing
    move: "mousemove",   //mouse moving on the screen
    up: "mouseup",      // stop drawing, lift finger up on the mouse or screen
  },
  touch: {
    down: "touchstart",
    mobe: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {   //function to check the device is touch or mouse
  try {
    document.createEvent("TouchEvent"); //we can only write events with touch so we use it to check condition..

    deviceType = "touch";
    return true;
  } 
  catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();   //function call

gridButton.addEventListener("click", () => {
  
  container.innerHTML = "";

  let count = 0;

  for (let i = 0; i < gridHeight.value; i++)
     {
    count += 2;
    let div = document.createElement("div");
    div.classList.add("gridRow");

    for (let j = 0; j < gridWidth.value; j++) {
      count += 2;
      let col = document.createElement("div");
      col.classList.add("gridCol");

      col.setAttribute("id", `gridCol${count}`);

      col.addEventListener(events[deviceType].down, () => {
        draw = true;

        if (erase) {
          col.style.backgroundColor = "transparent";
        } else {
          col.style.backgroundColor = colorButton.value;
        }
      });

      col.addEventListener(events[deviceType].move, (e) => {
        let elementId = document.elementFromPoint(
          !isTouchDevice() ? e.clientX : e.touches[0].clientX,
          !isTouchDevice() ? e.clientY : e.touches[0].clientY
        ).id;
        checker(elementId);
      });

      col.addEventListener(events[deviceType].up, () => {
        draw = false;
      });

      div.appendChild(col);  //div k andr col insert kro
    }

    container.appendChild(div);  //container k andr div dalo yani insert kro
  }
});

function checker(elementId) {
  let gridColumns = document.querySelectorAll(".gridCol");
  gridColumns.forEach((element) => {
    if (elementId == element.id) {
      if (draw && !erase) {
        element.style.backgroundColor = colorButton.value;
      } else if (draw && erase) {
        element.style.backgroundColor = "transparent";
      }
    }
  });
}

clearGridButton.addEventListener("click", () => {
  container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
  erase = true;
});

paintBtn.addEventListener("click", () => {
  erase = false;
});

gridWidth.addEventListener("input", () => {
  widthValue.innerHTML =
    gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", () => {
  heightValue.innerHTML =
    gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

window.onload = () => {
  gridHeight.value = 0;
  gridWidth.value = 0;
};
