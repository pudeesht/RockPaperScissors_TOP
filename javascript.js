// console.log("pudeeshtam")

function rps()
{
    const num=Math.random();
    // console.log(num);

    if (num>0.33 && num <0.66)
        return "Rock";
    else if (num>0.66)
        return "Scissors";
    else 
        return "Paper";
}




function takechoice ()
{
    let choice = prompt("Enter your choice -: ");
    return choice;
}



function playround(hh, cc)
{

    hchoice = hh.toLowerCase();
    cchoice = cc.toLowerCase();

    if (hchoice===cchoice)
        console.log("Draw!");

    
    else if (hchoice === "rock" )
    {
        if (cchoice==="scissors")
        {    
            console.log("You win! rock beats scissors.");
            ++hscore;
        }
        else   
        { 
            console.log("You lose! Paper beats rock.");
            ++cscore;
        }
    }


    else if (hchoice === "paper" )
    {
        if (cchoice==="rock")
        {    
            console.log("You win! Paper beats rock.");
            ++hscore;
        }
        else   
        { 
            console.log("You lose! scissors beats rock.");
            ++cscore;
        }
    }


    else if (hchoice === "scissors" )
    {
        if (cchoice==="paper")
        {    
            console.log("You win! scissors beats paper.");
            ++hscore;
        }
        else   
        { 
            console.log("You lose! rock beats scissors.");
            ++cscore;
        }
    }
    
}


function playgame()
{
    for (let i=0;i<5;i++)
    {
        const human=takechoice();
        const comp = rps();
        playround(human,comp);
    }

}










var hscore =0;
var cscore=0;
playgame();




// const str= rps();
// console.log(str);
// const ch=takechoice();
// console.log ("User choice is " +  ch);