const container = document.getElementById("container");

// const newDiv = document.createElement('div');




// function createGrid(){
//     input = 16
    
//     const pickSize = document.getElementById("pickSize");

//     pickSize.addEventListener('click', function(){
//         let input = prompt("100");
//         createDivs();
//     })

//     let gridTemplate = 'repeat('+input+', 1fr)'
    
//     container.style.gridTemplateColumns = gridTemplate;
//     container.style.gridTemplateRows = gridTemplate;
    

//     let iValue = input ** 2;
        
//     function createDivs(input){   
        
//         for (i=0; i < iValue; i++){

//             function divInfo(){
//                 let newDiv = document.createElement('div');
//                 newDiv.className = "gridItem";
//                 container.appendChild(newDiv);
//                 newDiv.innerText = "";
                
                
//                 function hoverEffect(){
//                     let x = false;
//                     newDiv.addEventListener('mousedown', function(){
//                         newDiv.className = "gridItemHover";
//                         x = true;
//                     })
                    
//                     newDiv.addEventListener('mousemove', function(){
//                         if (x = true){
//                             newDiv.className = "gridItemHover";
//                         }
                        
//                     })
//                 }
//                 hoverEffect();
//             }
//             divInfo();
//         }       
//     }    
//         createDivs();      
// }   
        
        
    
   
        



// createGrid();
// let compStyles = window.getComputedStyle(container);

// let bgColor = compStyles.getPropertyValue('background-color')
// let splitOne = bgColor.split("(")

// console.log(splitOneString)
// let number = splitOne.shift()
// // console.log(splitOne)

console.log(randomRGB())
createDivs(16);

const button = document.getElementById("pickSize");
const buttonTwo = document.getElementById("clearCanvas");



button.addEventListener('click', function(){
    clearBoard();
    let input = prompt("Select a number up to 40");
    let number = parseInt(input);
    console.log(typeof(input))
    if (number <= 40){
        createDivs(input);
    }else{
        createDivs(16);
    }
    
})

buttonTwo.addEventListener('click', function(){
    window.location.reload();
})

function clearBoard(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}




function randomRGB(){
    let randNum = Math.random() * (255-0) + 0;
    return Math.round(randNum);
}



function createDivs(input){
    let gridTemplate = 'repeat('+input+', 1fr)'
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridTemplateRows = gridTemplate;
   

    for(i = 0; i < input ** 2; i++){
        let newDiv = document.createElement('div');
       
        newDiv.className = "gridItem";
        container.appendChild(newDiv);
        newDiv.innerText = " ";
        newDiv.id = "newDiv"
        
        // let randomColor = "rgb(" + randomRGB() + "," + " " + randomRGB() + "," + " " + randomRGB() + ")"
        // console.log(randomColor)
        newDiv.addEventListener('mouseenter', function(event){
            let randomColor = "rgb(" + randomRGB() + "," + " " + randomRGB() + "," + " " + randomRGB() + ")"

            event.target.style.backgroundColor = randomColor;
            // event.target.style.backgroundColor = "black"
            
            
        })
        
    }

    let newDiv = document.getElementById('newDiv');
    console.log(newDiv.innerText)
    
    
  
}