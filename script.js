const container = document.getElementById("container");

// const newDiv = document.createElement('div');




function createGrid(input){
    input = prompt("Enter up to 100");
    
    let gridTemplate = 'repeat('+input+', 1fr)'
    
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridTemplateRows = gridTemplate;
    
    let iValue = input ** 2;
    for (i=0; i< iValue; i++){
        function createDivs(){
            let newDiv = document.createElement('div');
            newDiv.className = "gridItem";
            container.appendChild(newDiv);
            newDiv.innerText = "";
        }
        createDivs();
        
    }
    
}
createGrid();





