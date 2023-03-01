var clockInterval;
function q1(){      
    clockInterval=setInterval(q1Clock,1000);
}
function q1Clock(){
    let d=new Date();
    var time = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();    
    document.getElementById("time").innerHTML=time;  
    document.getElementById("stopClock").innerHTML="<button class=\"btn btn-danger mt-3\" onclick=\"q1Stop()\">Stop</button>";
    
}

function q1Stop(){    
    clearInterval(clockInterval);
}

var bgInterval;

function q2(){    
    bgInterval=setInterval(q2Start,1000);
}

function q2Start(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color="rgb("+red+","+green+","+blue+")";
    document.getElementById("Q2").style.backgroundColor = color;
    document.getElementById("stopBg").innerHTML="<button class=\"btn btn-danger mt-3 mb-4\" onclick=\"q2Stop()\">Stop</button>";    
}


function q2Stop(){    
    clearInterval(bgInterval);
}

function q3On(){    
    document.getElementById("para").style.fontSize="28px";
}

function q3Off(){
    document.getElementById("para").style.fontSize="16px";
}
var interval;
function q4Start(){ 
    car=document.getElementById("car");
    interval=setInterval(q4CarMove,20);
           
}
function q4Stop(){   
    clearInterval(interval);      
}

function q4CarMove(){
    
    car.style.left=parseInt(car.style.left)+2+"px";
    
    if(parseInt(car.style.left)>parseInt(screen.width)){        
        car.style.left="0px";
    }
}

function q5(){
    document.getElementById("bfr").innerHTML="Before 2000";
    document.getElementById("aft").innerHTML="After 2000";
    let student=[{name:"Alan D Daniels",regNo:"URK20CS2065",dob:"11/Jul/2002"},
                 {name:"Aegon Targaryen",regNo:"URK20CS2034",dob:"11/Jul/1993"},
                 {name:"Visenya Targaryen",regNo:"URK20CS2045",dob:"11/Jul/1994"},
                 {name:"Rhaegar Targaryen",regNo:"URK20CS2754",dob:"11/Jul/2004"},
                 {name:"Maegor Targaryen",regNo:"URK20CS2879",dob:"11/Jul/1999"},
                ]
    for(let i=0;i<student.length;i++){
        if(parseInt(student[i].dob.split("/")[2])<2000){
            document.getElementById("before").innerHTML+=student[i].name+"\'s "+"Register Number is "+student[i].regNo+" and the DOB is "+student[i].dob+"<br><br>";
        }
        else
        document.getElementById("after").innerHTML+=student[i].name+"\'s "+"Register Number is "+student[i].regNo+" and the DOB is "+student[i].dob+"<br><br>";

    }    
}