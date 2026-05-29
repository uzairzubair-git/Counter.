var saveEl = document.getElementById("save-el");
var countEl = document.getElementById("count-el");


var count  = 0;
function increment(){
    count += 1;
    countEl.textContent = count;
    // console.log("clicked");   
}

function save(){
    var countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;

}
    // var welcomeEl = document.getElementById("welcome-el");
// var name = "Arun";
// var greeting = "Hi";

// welcomeEl.innerText = greeting + name ;
    
// welcomeEl.innerText += "👋🏻";