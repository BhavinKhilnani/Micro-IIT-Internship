let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let turner = document.querySelector("#show")

let turnO = true;
if(turnO){
    turner.innerHTML='<div class="turn-card"><h2>Current Turn</h2><div class="player">Player X</div></div>'

}else{
    turner.innerHTML='<div class="turn-card"><h2>Current Turn</h2><div class="player">Player O</div></div>'
}

let winning_patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false
            turner.innerHTML='<div class="turn-card"><h2>Current Turn</h2><div class="player">Player X</div></div>'
        } else {
            box.innerText = "X"
            turnO = true
            turner.innerHTML='<div class="turn-card"><h2>Current Turn</h2><div class="player">Player O</div></div>'
        }
        box.disabled = true
        if(!checkWinner()){
            checkDraw();
        }

        
    })
})

const checkWinner = () => {
    for (pattern of winning_patterns){
        pos1Val = boxes[pattern[0]].innerText
        pos2Val = boxes[pattern[1]].innerText
        pos3Val = boxes[pattern[2]].innerText
        console.log(pos1Val,pos2Val,pos3Val)
        if( pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if( pos1Val == pos2Val && pos2Val == pos3Val ){
            alert("player "+pos1Val+" has won.")
            reset_game();
            return true
        }
        }
        
    }
    
}
const checkDraw= () => {
    count = 0
    
    for (let i = 0; i < 9; i++) {
        if ( boxes[i].innerText != "" ){
            count++;

        }
    if (count == 9 ){
        alert("Draw")
        reset_game();

    }}
}
reset_btn.addEventListener("click",()=>{
   
    reset_game();
})
const reset_game = () => {
            boxes.forEach((box)=>{
        box.innerText = ""
        box.disabled = false})
}

// let move = document.querySelector('#show')
// if(turnO){

//     move.innerText = "player O has to play" 
// }
// else{
//     move.innerText = "player X has to play" 
// }
