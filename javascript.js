// // console.log("pudeeshtam")

// function rps()
// {
//     const num=Math.random();
//     // console.log(num);

//     if (num>0.33 && num <0.66)
//         return "Rock";
//     else if (num>0.66)
//         return "Scissors";
//     else 
//         return "Paper";
// }




// function takechoice ()
// {
//     let choice = prompt("Enter your choice -: ");
//     return choice;
// }



// function playround(hh, cc)
// {

//     hchoice = hh.toLowerCase();
//     cchoice = cc.toLowerCase();

//     if (hchoice===cchoice)
//         console.log("Draw!");

    
//     else if (hchoice === "rock" )
//     {
//         if (cchoice==="scissors")
//         {    
//             console.log("You win! rock beats scissors.");
//             ++hscore;
//         }
//         else   
//         { 
//             console.log("You lose! Paper beats rock.");
//             ++cscore;
//         }
//     }


//     else if (hchoice === "paper" )
//     {
//         if (cchoice==="rock")
//         {    
//             console.log("You win! Paper beats rock.");
//             ++hscore;
//         }
//         else   
//         { 
//             console.log("You lose! scissors beats rock.");
//             ++cscore;
//         }
//     }


//     else if (hchoice === "scissors" )
//     {
//         if (cchoice==="paper")
//         {    
//             console.log("You win! scissors beats paper.");
//             ++hscore;
//         }
//         else   
//         { 
//             console.log("You lose! rock beats scissors.");
//             ++cscore;
//         }
//     }
    
// }

// //OLD FUNCTION OF 5 Plays
// // function playgame()
// // {
// //     for (let i=0;i<5;i++)
// //     {
// //         const human=takechoice();
// //         const comp = rps();
// //         playround(human,comp);
// //     }

// // }



// const btn1=document.querySelector("#button1");
// const btn2=document.querySelector("#button2");
// const btn3=document.querySelector("#button3");


// btn1.addEventListener('click',()=>{const cchoice=rps();
//     playround("rock",cchoice);
// });


















// var hscore =0;
// var cscore=0;





// // const str= rps();
// // console.log(str);
// // const ch=takechoice();
// // console.log ("User choice is " +  ch);






//-------------------------------------------------------------------------------------------------------//


function randomchoice()
{
    const num=Math.random();
    // console.log(num);

    if (num>0.33 && num <0.66)
        return "rock";
    else if (num>0.66)
        return "scissors";
    else 
        return "paper";
}


const btn1=document.getElementById("button1");
const btn2=document.getElementById("button2");
const btn3=document.getElementById("button3");

const container= document.querySelector(".container");


function printres(result,choice)
{
    if (result==="win")
        {
            const div=document.createElement("div");
            div.textContent="You won, computer chose "+choice;
            container.appendChild(div);
        }
        

    else if (result==="loss")
        {
            const div=document.createElement("div");
            div.textContent="You lost, computer chose "+choice;
            container.appendChild(div);
        }

    else 
    {
        const div=document.createElement("div");
        div.textContent="Draw, both chose "+choice;
        container.appendChild(div);
    }
}




function playround(hchoice)
{
    const cchoice=randomchoice();
    if (hchoice===cchoice)
            printres("draw",cchoice);

    

    else if (hchoice === "rock" )
    {
        if (cchoice==="scissors")
        {    

            printres("win",cchoice);

        }
        else   
        { 
            printres("loss",cchoice);
        }
    }


    else if (hchoice === "paper" )
    {
        if (cchoice==="rock")
        {    
            printres("win",cchoice);
        }
        else   
        { 
            printres("loss",cchoice);
        }
    }


    else if (hchoice === "scissors" )
    {
        if (cchoice==="paper")
        {    
            printres("win",cchoice)
        }
        else   
        { 
            printres("loss",cchoice);
        }
    }
    
    





}





btn1.addEventListener('click',function()
{
    playround("rock");
});
btn2.addEventListener('click',function()
{
    playround("paper");
});
btn3.addEventListener('click',function()
{
    playround("scissors");
});