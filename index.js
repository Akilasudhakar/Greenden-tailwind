// Selecting sidenav and menuicon


var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0

})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
