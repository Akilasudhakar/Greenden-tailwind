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

// Product Search Functionality

var productContainer = document.getElementById("product-container")

var search = document.getElementById("search")

var productList= productContainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase() 
    for(count=0;count<productList.length;count=count+1){
        // var productname= productList[count].querySelectorAll("h1").textContent
        if(productList[count].textContent.toUpperCase().indexOf(enteredValue)<0)
    {
        productList[count].style.display="none"
    }
    else{
        productList[count].style.display="block"

    }
    }
 })