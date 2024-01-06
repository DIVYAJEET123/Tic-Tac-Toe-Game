let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let heading = document.querySelector(".heading");
let container = document.querySelector(".container");
let space = document.querySelector(".space");

let turn0 =true;

const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        console.log("Box was Clicked");
        box.disabled = true;
        checkWinner(); 
    });
});
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
};
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
};

const resetGame = ()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    space.classList.remove("space");
    disableBoxes();
    heading.style.fontSize = "40px";
    heading.style.marginTop = "0";
    container.style.height = "60vh";
    container.style.marginBottom = "20px";
};

const checkWinner = ()=>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);