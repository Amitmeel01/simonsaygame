let gameseq=[];
let userseq=[];

let btns=["red","blue","yellow","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let start=document.querySelector(".start");
// let stop=document.querySelector(".btn .stop");
let restart=document.querySelector(".restart");


start.addEventListener("click",()=>{
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
    
})


//orignal
// document.addEventListener("keypress",function(){
//     if(started==false){
//         console.log("game is started");
//         started=true;

//         levelup();
//     } 
// });


function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},300);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
    };

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3+1);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);

  
// console.log(randcolor);
// console.log(randidx);
// console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);

    btnFlash(randbtn);
    
}
function btnpress(){
    let btn=this;
    userFlash(btn);
    //console.log(this);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    cheakans(userFlash.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function cheakans(idx){
 //   console.log(`current levcel is : `,level);

 
 if(gameseq[idx]==userseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }

 }
 else{
    h2.innerText=`Game Over !! your score was  ${level-1}
     press start button to restart`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function(){
        document.querySelector("body").style.background="white";
     },200);
    
 
   reset();

   
    
 }
}


// function reset(){
//     started==false;
//     gameseq=[];
//     userseq=[];
//     level=0;
    

    
// }




function reset() {
    started = false; // Use assignment operator to set started back to false
    gameseq = [];
    userseq = [];
    level = 0;

    // Call the renamed function to attach the event listener again
    attachRestartListener();
}

function attachRestartListener() {
    restart.addEventListener("click", () => {
        if (started == false) {
            console.log("game is started");
            started = true;

            levelup();
        }
    });
}

// Call the function to attach the event listener initially
attachRestartListener();

