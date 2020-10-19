const firstDiv = document.getElementById("container");
//firstDiv.style.backgroundColor = "white"
let cells = 16;


function addDivs(cells){
  let gridSize = (60 / cells) * 10
  let gridOutline = `repeat(${cells}, ${gridSize}px)`;
  const secDiv = document.createElement("div");
      secDiv.style.display = "grid";
      secDiv.style.gridTemplateColumns = gridOutline;
      secDiv.style.gridTemplateRows = gridOutline;
      secDiv.style.border = "2px solid black";
      secDiv.style.position = "absolute";
      //secDiv.style.backgroundColor = "white";
      secDiv.id = "secDiv";
      firstDiv.appendChild(secDiv); 
      //firstDiv.style.setProperty('--grid-rows', cells);
      //firstDiv.style.setProperty('--grid-cols', cells);
  const grid = cells**2;
  for (var i = 0; i < grid; i++){
      let moreDivs = document.createElement("div");
      let squareHeightAndWidth = 600/parseInt(grid);
      ///firstDiv.style.width = squareHeightAndWidth * grid + "px";
      moreDivs.style.height = squareHeightAndWidth + 'px';
      moreDivs.style.width = squareHeightAndWidth + 'px';
      ///moreDivs.innerText = (i + 1); would show the number of the div
      moreDivs.innerText = "";
      moreDivs.classList = "divvy";
      secDiv.appendChild(moreDivs);
      console.log(cells + ' ' + squareHeightAndWidth + ' ' + grid + ' ' + moreDivs.classList);
    };  
  };

addDivs(cells);

//let pixel = document.getElementsByClassName("divvy");
//let pixelCount = pixel.length;

function blackSnake(){
  /*for (i = 0; i < pixelCount - 1; i++){
    pixel[i].addEventListener("mouseover", function( event ){
    event.target.style.backgroundColor = "black";
    });
  };*/
  let gridItem = document.querySelectorAll(".divvy");
    gridItem.forEach((gridItem) => {
        gridItem.addEventListener("mouseover", (e) => gridItem.style.backgroundColor = 'black');
    });
}

blackSnake();

function clearBox(elementID){
    document.getElementById(elementID).innerHTML = "";
}



document.getElementById("button").onclick = function (newSketch){
  var newGrid = prompt("Time for a new grid. What size?");
  let num = parseInt(newGrid, 10);
  if (num > 100) {
    return;
  } else {
  clearBox('container');
  addDivs(num);
  blackSnake();
  }
}





/*for (i = 0; i < pixelCount - 1; i++){
    if (pixel.style.backgroundColor = "black"){
      pixel.style.backgroundColor = "gray";
    }
  };*/