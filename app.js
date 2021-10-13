const iconMoon = document.getElementById("icon-moon");
const iconSun = document.getElementById("icon-sun");
const icon = document.getElementById("icon");

icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        iconSun.style.display = "block";
        iconMoon.style.display = "none";
    }
    else{
        iconSun.style.display = "none";
        iconMoon.style.display = "block";
    }
}