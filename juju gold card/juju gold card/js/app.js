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

    },1500);



},4000);