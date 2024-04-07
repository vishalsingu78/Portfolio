let counter=0;
const countinterval=setInterval(count,1000);
function count(){
    console.log(counter++);
    if(counter==0){
        document.getElementById("workson").style.display="none";
        document.getElementById("workson1").style.display="none";
        document.getElementById("workson2").style.display="none";
    }
    if(counter>0){
        document.getElementById("workson").style.display="flex";
        document.getElementById("workson1").style.display="none";
        document.getElementById("workson2").style.display="none";
    }
    if(counter>4 && counter<=8){
        document.getElementById("workson").style.display="none";
        document.getElementById("workson1").style.display="flex";
        document.getElementById("workson2").style.display="none";
    }
    if(counter>8 && counter<=12){
        document.getElementById("workson").style.display="none";
        document.getElementById("workson1").style.display="none";
        document.getElementById("workson2").style.display="flex";
    }
    if(counter>12){
        counter=0;
    }
}

function bluetoothvis(){
    document.getElementById("hoverid1").style.display="flex";
    document.getElementById("titleb1").style.display="flex";
    document.getElementById("discb1").style.display="flex";
    document.getElementById("eye1").style.display="none";
    document.getElementById("eye2").style.display="flex";
}
function bluetoothhide(){
    document.getElementById("hoverid1").style.display="none";
    document.getElementById("titleb1").style.display="none";
    document.getElementById("discb1").style.display="none";
    document.getElementById("eye1").style.display="flex";
    document.getElementById("eye2").style.display="none";
}
function fruitvis(){
    document.getElementById("hoverid2").style.display="flex";
    document.getElementById("titlef2").style.display="flex";
    document.getElementById("discf2").style.display="flex";
    document.getElementById("eye3").style.display="none";
    document.getElementById("eye4").style.display="flex";
}
function fruithide(){
    document.getElementById("hoverid2").style.display="none";
    document.getElementById("titlef2").style.display="none";
    document.getElementById("discf2").style.display="none";
    document.getElementById("eye3").style.display="flex";
    document.getElementById("eye4").style.display="none";
}
