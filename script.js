let color = "black";
function fillBoard(squares) {

for (let i = 1; i <= squares; i++) {
   const sketch = document.querySelector('#sketch');
   const div = document.createElement('div');
   div.addEventListener('mouseover', colorSquare);
   sketch.appendChild(div);
}
}

fillBoard(256);

function colorSquare(e) {
   if (color === "gray") {
      let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
      if (currentOpacity <= 0.9) {
          this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
          }}
    else if (color === "random") {
      let rgb1 = Math.floor(Math.random() * 255);
      let rgb2 = Math.floor(Math.random() * 255);
      let rgb3 = Math.floor(Math.random() * 255);
      let randomColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
      this.style.backgroundColor = randomColor;
   }
   else {
   this.style.backgroundColor = color;   
   }
}

const newGrid = document.querySelector('.newGrid');
newGrid.addEventListener('click', setNewGrid);

function setNewGrid() {

   let result;
   const sketch = document.querySelector('#sketch');
   do {
    result = prompt('Enter the number of squares per side for the new grid (up to 100)');
   }
   while ((result > 100) || (result < 1)); 

   while (sketch.firstChild) {
      sketch.removeChild(sketch.firstChild);
   }
   
   sketch.style.gridTemplateColumns = `repeat(${result}, 1fr)`;
   sketch.style.gridTemplateRows = `repeat(${result}, 1fr)`;
    
   let squares = result * result;
   
   fillBoard(squares);
}

function changeColor(chosenColor) {
   color = chosenColor;
}



