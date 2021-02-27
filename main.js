var hits = 0;
var tstart;
var tend;
var toh;
var tone;
function hit() {
    hits++;
    if (hits == 31) {
        hits = 1;
    }
    document.getElementById("TotalHits").textContent = Math.round(hits);
    
    var random = Math.floor(Math.random() * 90);
    document.getElementById("target").style.left = random + "vw";
    random = Math.floor(Math.random() * 75);
    document.getElementById("target").style.top = random + "vh";
    
    
    
    //-------------------------------------------------------------------
    //start
    if (hits == 1) {
        tstart = new Date().getTime();
        console.log("tstart = " + tstart);
        document.getElementById("SecondText").style.display = "block";
        document.getElementById("ThirdText").style.display = "block";
        
        var countdownTimer = setInterval(() => {
            var idk = ((new Date().getTime() - tstart)/1000).toFixed(3);
            document.getElementById("SecondText").textContent = idk;
        
        
            if (hits >= 30) {
                clearInterval(countdownTimer);
            }
        
        }, 10);
    }
    //start    
    //-------------------------------------------------------------------------
    //not start
    else {
        tone = new Date().getTime();
        document.getElementById("ThirdText").textContent = (tone-toh) + "ms";
    }
    //not start
    //--------------------------------------------------
    //end
    if (hits == 30) {
        document.getElementById("target").style.display = "none";
        document.getElementById("TotalHits").textContent = "wp";    
        
        tend = new Date().getTime();
        console.log ("tend = " + tend);
        document.getElementById("TotalHits").style.top = "40vh";
        document.getElementById("TotalHits").textContent = "30 tagets took u " + (tend-tstart)/1000 + " seconds";    
        document.getElementById("SecondText").style.display = "none";
        var idkEither = ((tend-tstart)/hits).toFixed(0);
        document.getElementById("ThirdText").textContent = "avg. = " + idkEither + "ms";
        
        var timeoutYeah = setTimeout(() => { 
            document.getElementById("target").style.display = "block";
            document.getElementById("target").style.top = "40vh";
            document.getElementById("target").style.left = "45vw";
            document.getElementById("SecondText").textContent = "hit again to restart";
            document.getElementById("SecondText").style.display = "block";    
        }, 1500);
    } 
    //end
    //------------------------------------------------------------------------
    
    
    
    toh = new Date().getTime();
    console.log("toh = " + toh);
}