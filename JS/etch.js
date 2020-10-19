
const firstDiv = document.getElementById("container");

function addDivs(count){
  function addrows(){
    for (var i = 0; i < (count + 1); i++){
        let moreRows = document.createElement("div");
        firstDiv.appendChild(moreRows);
    } 
  }
   function addCols(){
      for (var i = 0; i < count; i++){    
         let moreCols = document.createElement("div");
         firstDiv.appendChild(moreCols); 
      }
    }   
  

}

addDivs(16);
console.log(addDivs(16));