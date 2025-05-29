let userscore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencomChoice =() =>{
    const options=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was Draw.");
    msg.innerText ="Game was Draw. Play again.";
    msg.style.backgroundColor= "#081b31";
};
const showWinner = (userwin, userChoice, compchoice) =>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Win");
        msg.innerText= `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText= `You lose. ${compchoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    const compchoice = gencomChoice();
    console.log("comchoice = ", compchoice);
    if(userChoice== compchoice)
    {
        //draw
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice === "rock")
        {
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userwin = compchoice === "scissor" ? false: true;
        }
        else{
           userwin = compchoice ==="rock"  ? false :true;       }
      showWinner (userwin, userChoice,compchoice);
    }
};

choices.forEach((choice)=>{
  
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});