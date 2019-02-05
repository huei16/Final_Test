var bg = document.getElementById("hide");
var button = document.getElementById("yes");

button.onclick = function(){
  if(bg.className == "hide"){
    bg.className = "";
  } else {
    bg.className = "hide";
  }
};
