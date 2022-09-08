function fillBoard(squares) {
for (let i = 1; i <= squares; i++) {
   const sketch = document.querySelector('#sketch');
   const div = document.createElement('div');
   div.classList.add('square');
   div.addEventListener('mouseover', mouseOver);
   //div.addEventListener('mouseout', mouseOut);

   sketch.appendChild(div);
  
}
}

fillBoard(256);



function mouseOver(e) {
   this.style.backgroundColor = 'black';
   
}



function mouseOut(e) {
   this.style.backgroundColor = 'white';
   
}



const button = document.querySelector('button');
button.addEventListener('click', newGrid);

function newGrid() {
   
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


