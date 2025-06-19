let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn");
let newgame=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");


let turnO= true; //playerX playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked");
        box.innerText="x";
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
      checkwin();  
    })

});

const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwin = (winner) => {
    if(winner){
        msg.innerText=`Winner is ${winner}`;
    }else{
        msg.innerText="It's a draw!";
    }    
    msgcontainer.classList.remove("hide");
    disableboxes();
};




const checkwin=()=>{
    for(let pattern of winpatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            
            
            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val===pos2val && pos2val===pos3val){
                    // console.log("Winner is "+pos1val)
                    showwin(pos1val);



                }
            }
    }
}


const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);