var hits = 0;
var tstart;
var tend;
var toh;
var tone;


var html = document.documentElement;

var Width = html.clientWidth;
var Height = html.clientHeight;



function screen() {
    console.log("width = " + html.clientWidth + ", height = " + html.clientHeight);
    console.log("%i, %i, %i, %i, %i", document.getElementById("body").scrollHeight, document.getElementById("body").offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    console.log("%i, %i, %i, %i, %i", document.getElementById("body").scrollWidth, document.getElementById("body").offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    if (html.clientWidth > html.clientHeight) {

        document.getElementById("vertical").style.height = "10vw";
        document.getElementById("vertical").style.width = "0.2vw";
        document.getElementById("vertical").style.left = "5vw";
        document.getElementById("vertical").style.top = "0vw";
        document.getElementById("horizontal").style.height = "0.2vw";
        document.getElementById("horizontal").style.width = "10vw";
        document.getElementById("horizontal").style.left = "0vw";
        document.getElementById("horizontal").style.top = "5vw";
        console.log("width > height");
    }

    if (html.clientWidth < html.clientHeight) {
        document.getElementById("vertical").style.height = "15vh";
        document.getElementById("vertical").style.width = "0.2vh";
        document.getElementById("vertical").style.top = "0vh";
        document.getElementById("vertical").style.left = "7.5vh";
        document.getElementById("horizontal").style.height = "0.2vh";
        document.getElementById("horizontal").style.width = "15vh";
        document.getElementById("horizontal").style.left = "0vh";
        document.getElementById("horizontal").style.top = "7.5vh";
        document.getElementById("vertical").style.backgroundColor = "red";
        document.getElementById("horizontal").style.backgroundColor = "red";
        console.log("width < height");

        document.getElementById("TotalHits").style.fontSize = "5vh";
        document.getElementById("SecondText").style.fontSize = "5vh";
        document.getElementById("ThirdText").style.fontSize = "5vh";
        document.getElementById("TotalHits").style.lineHeight = "5vh";
        document.getElementById("SecondText").style.lineHeight = "5vh";
        document.getElementById("ThirdText").style.lineHeight = "5vh";
        document.getElementById("TotalHits").style.width = "100%";
        document.getElementById("TotalHits").style.top = "5vh";
    }

}

function hit() {
    hits++;

    screen();

    if (localStorage.getItem('best') > 0) {
        document.getElementById("best").innerHTML = "best time: " + localStorage.getItem('best') / 1000;
        document.getElementById("best").style.color = "white";
    }

    if (hits == 31) {
        hits = 1;
    }
    document.getElementById("TotalHits").innerHTML = Math.round(hits);

    var random = Math.floor(Math.random() * 90);
    document.getElementById("target").style.left = random + "vw";
    random = Math.floor(Math.random() * 75);
    document.getElementById("target").style.top = random + "vh";

    document.getElementById("progressBar").value = hits;
    document.getElementById("progressBartoo").value = hits;

    //-------------------------------------------------------------------
    //start
    if (hits == 1) {
        tstart = new Date().getTime();
        console.log("tstart = " + tstart);
        document.getElementById("SecondText").style.display = "block";
        document.getElementById("ThirdText").style.display = "block";

        var countdownTimer = setInterval(() => {
            var idk = ((new Date().getTime() - tstart) / 1000).toFixed(3);
            document.getElementById("SecondText").innerHTML = idk;
            if ((new Date().getTime() - toh) < 1000 | document.getElementById("progressBarSecond").value < 1000) {
                document.getElementById("progressBarSecond").value = (new Date().getTime() - toh);
            }
            else {
                document.getElementById("progressBarSecond").value = "1000";
            }

            if (hits >= 30) {
                clearInterval(countdownTimer);
            }
            console.log("ahahah" + ((new Date().getTime() - tstart)) % 1);
        }, 10);
    }
    //start    
    //-------------------------------------------------------------------------
    //not start
    else {
        tone = new Date().getTime();
        document.getElementById("ThirdText").innerHTML = (tone - toh) + "ms";
    }
    //not start
    //--------------------------------------------------
    //end
    if (hits == 30) {
        document.getElementById("target").style.display = "none";

        tend = new Date().getTime();
        console.log("tend = " + tend);

        if (localStorage.getItem('best') > tend - tstart | !localStorage.getItem('best') > 0) {
            localStorage.setItem('best', tend - tstart);
        }
        if (localStorage.getItem('best') > 0) {
            document.getElementById("best").innerHTML = "best time: " + localStorage.getItem('best') / 1000;
        }

        document.getElementById("TotalHits").innerHTML = "30 tagets took u " + (tend - tstart) / 1000 + " seconds";

        document.getElementById("SecondText").style.display = "none";
        var idkEither = ((tend - tstart) / hits).toFixed(0);
        document.getElementById("ThirdText").innerHTML = "avg. = " + idkEither + "ms";
        var idktimeout = setTimeout(() => {
            document.getElementById("progressBarSecond").value = "0";
        }, 31)

        var timeoutYeah = setTimeout(() => {
            document.getElementById("target").style.display = "block";
            document.getElementById("target").style.top = "40vh";
            document.getElementById("target").style.left = "45vw";
            document.getElementById("SecondText").innerHTML = "hit again to restart";
            document.getElementById("SecondText").style.display = "block";
        }, 1500);
    }
    //end
    //------------------------------------------------------------------------



    toh = new Date().getTime();
    console.log("toh = " + toh);
}

function onload() {
    if (localStorage.getItem('best') > 0) {
        document.getElementById("best").innerHTML = "best time: " + localStorage.getItem('best') / 1000;
        document.getElementById("best").style.color = "white";
    }
    var intervalYeah = setInterval(() => { screen(); }, 500);
}
var timeoutYeah = setTimeout(() => { screen(); onload();}, 0);
