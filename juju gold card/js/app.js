const loader = document.getElementById("loader");

const app = document.getElementById("app");

const flash = document.getElementById("flash");



setTimeout(()=>{


    flash.animate([

        {opacity:0},

        {opacity:1},

        {opacity:0}

    ],{

        duration:450

    });



    loader.style.opacity="0";



    setTimeout(()=>{

        loader.style.display="none";

        app.classList.remove("hidden");


        // disparition de la carte après 5 secondes
        setTimeout(()=>{

           const card = document.querySelector(".gold-card");

card.style.opacity="0";
card.style.transform="scale(.8)";

        },3500);


    },1500);



},4000);
const percent = document.getElementById("percent");

let value = 0;

const counter = setInterval(()=>{

    value++;

    percent.textContent = value + " %";

    if(value >= 100){

        clearInterval(counter);

    }

},40);