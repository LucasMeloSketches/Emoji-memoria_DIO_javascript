const emojis = [
    "🤣",
    "🤣",
    "😈",
    "😈",
    "😱",
    "😱",
    "👻",
    "👻",
    "🤢",
    "🤢",
    "🥺",
    "🥺",
    "💩",
    "💩",
    "😎",
    "😎"
];
let openCards = [];

let tentativas = 10;

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.classList.add("boxOpen")
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
document.querySelector("#tentativas").innerHTML = `você tem ${tentativas} tentativas`;
setTimeout(startGame, 1000);
function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length == 2){

        setTimeout(checkMatch, 500);
    }
}
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        if(tentativas > 0){
            tentativas--;
            document.querySelector("#tentativas").innerHTML = `você tem ${tentativas} tentativas`;
        }else{
            alert("Tente Novamente!")
            for(let i = 0; i < document.querySelectorAll(".item").length; i++){
                document.querySelectorAll(".item")[i].classList.add("boxOpen");;
            }
        }
        
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você Venceu!")
    }
}
function startGame(){
    for(let i = 0; i < document.querySelectorAll(".item").length; i++){
        document.querySelectorAll(".item")[i].classList.remove("boxOpen");
    }
    
}
