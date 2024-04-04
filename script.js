let tog=document.getElementById("btn")
let text=document.getElementById("text")
let icon=document.getElementById("icon")

tog.addEventListener("click",function(){
document.body.classList.toggle("dark")
if (document.body.classList.contains("dark")) {
    icon.src="images/moon.png"
    text.innerHTML="Dark"

}
else{
    icon.src="images/sun.png"
    text.innerHTML="Light"

}
 })