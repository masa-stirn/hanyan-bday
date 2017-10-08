let bDaySvg = document.querySelector("#hbdy-text-svg");
let playBtn = document.querySelector(".btnStart");
let body = document.querySelector("body");
let pics = document.querySelectorAll(".polaroid");
let poem = document.querySelector(".poem");
let backBtn = document.querySelector(".btnBack");
let candles = document.querySelector(".candles");
let present1 = document.querySelector(".present1");
let present2 = document.querySelector(".present2");
let tickets = document.querySelector(".tickets");
let a = document.querySelector("a");
let divPres1For = document.querySelector(".div-present-1");
let divPres2For = document.querySelector(".div-present-2");
let divTickets = document.querySelector(".div-tickets");
let divCandles = document.querySelector(".div-candles");
let divPoem = document.querySelector(".div-poem");
let bgsound = document.querySelector("#bgsound");

function pageLoad(){
    console.log("function: pageLoad")
    console.log("function: svgWrites")
    console.log("TODO: background sound");
    bgsound.play();
    console.log("function: btnAppear")
    playBtn.classList.add("btnAppear");
    playBtn.addEventListener('click', function1Done);
}


function function1Done(){
    console.log("TODO: svg & btn Dissapear");
    bDaySvg.classList.add("dissapear");
    playBtn.classList.add("dissapear");
    console.log("TODO: picEnter");
    pics[0].classList.add("pic");
    pics[1].classList.add("pic");
    pics[2].classList.add("pic");



if(pics[0].classList.contains("pic")){

pics[0].addEventListener('click', pic1event);


function pic1event (){
        console.log("TODO: remmove class pic");
        pics[0].classList.remove("pic");
        pics[1].classList.remove("pic");
        pics[2].classList.remove("pic");
        console.log("TODO: poemEnter");
        poem.classList.add("poemShow");
    divPoem.classList.add("div-poem-forward");
    backBtn.classList.add("btnAppear");
    backBtn.addEventListener('click', pic1eventDone);
        }
}


function pic1eventDone(){
    poem.classList.remove("poemShow");
    divPoem.classList.remove("div-poem-forward");
    backBtn.classList.remove("btnAppear");
    pics[0].classList.add("pic");
    pics[1].classList.add("pic");
    pics[2].classList.add("pic");
}


if(pics[1].classList.contains("pic")){

pics[1].addEventListener('click', pic2event);

function pic2event (){
        console.log("TODO: pic go away");
        pics[0].classList.remove("pic");
        pics[1].classList.remove("pic");
        pics[2].classList.remove("pic");
        console.log("TODO: candlesEnter");
        candles.classList.add("poemShow");
    divCandles.classList.add("div-candles-forward");
    let candleSong = document.querySelector("#hbday");
    bgsound.pause();
    candleSong.play();
    let yay = document.querySelector("#yay");
    setTimeout(playYay, 14500);
    function playYay (){
        yay.play();
    }
    backBtn.classList.add("btnAppear2");
    backBtn.addEventListener('click', pic2eventDone);
        }
}

function pic2eventDone(){
    candles.classList.remove("poemShow");
    backBtn.classList.remove("btnAppear2");
    divCandles.classList.remove("div-candles-forward");
    pics[0].classList.add("pic");
    pics[1].classList.add("pic");
    pics[2].classList.add("pic");
    bgsound.play();
}

if(pics[2].classList.contains("pic")){

pics[2].addEventListener('click', pic3event);

function pic3event (){
        console.log("TODO: pic go away");
        pics[0].classList.remove("pic");
        pics[1].classList.remove("pic");
        pics[2].classList.remove("pic");
        console.log("TODO: present enter");
        present1.classList.add("poemShow");
        divPres1For.classList.add("div-present-1-forward");
        present1.addEventListener('click', pic3halfeventDone);

        function pic3halfeventDone (){
            console.log("TODO: hide present 1");
            present1.classList.remove("poemShow");
            divPres1For.classList.remove("div-present-1-forward");
            console.log("TODO: show present 2");
            present2.classList.add("poemShow");
            divPres2For.classList.add("div-present-2-forward");
            present2.addEventListener('click', pic3ticket);
            }
        function pic3ticket () {
            console.log("TODO: hide present 2");
            present2.classList.remove("poemShow");
            divPres2For.classList.remove("div-present-2-forward");
            tickets.classList.add("poemShow");
            divTickets.classList.add("div-tickets-forward");
            a.classList.add("add");
            tickets.addEventListener('click', enlargeTickets);
        }
        function enlargeTickets () {
            console.log("TODO: enlarge tickets");
            tickets.classList.add("enlarge");
        }
            backBtn.classList.add("btnAppear2");
            backBtn.addEventListener('click', pic3eventDone);
   }
}

function pic3eventDone(){
    tickets.classList.remove("poemShow");
    backBtn.classList.remove("btnAppear2");
    divTickets.classList.remove("div-tickets-forward");
    a.classList.remove("add");
    pics[0].classList.add("pic");
    pics[1].classList.add("pic");
    pics[2].classList.add("pic");
}

}

pageLoad();
