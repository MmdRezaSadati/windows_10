
var item = document.querySelector(".item");
var itemsNavbar = document.querySelector(".items-navbar");
var AddFolder = document.getElementById("folder");
function showMenu(i){
    rightClickMenu= document.getElementById("RightClickMenu"+i);
        rightClickMenu.style.visibility = "visible";
        rightClickMenu.style.opacity = 1;
}
function closeMenu(i){
    
    rightClickMenu= document.getElementById("RightClickMenu"+i);
    if(rightClickMenu.style.visibility = "visibile"){
        rightClickMenu.style.visibility = "hidden";
        rightClickMenu.style.opacity = 0;
        rightClickMenu.style.display = "none";
    }
}
function showContent(i){
    item = document.getElementById("item"+i);
    itemsNavbar = document.getElementById("items-navbar" + i)
    item.style.display = "block";
    itemsNavbar.style.background = "rgb(151 151 151 / 50%)";
}
function showContentFlex(i){
    item = document.getElementById("item"+i);
    itemsNavbar = document.getElementById("items-navbar" + i)
    item.style.display = "flex";
    item.style.flexFlow = "column";
    itemsNavbar.style.background = "rgb(151 151 151 / 50%)";
}
function showContentFlexrow(i){
    item = document.getElementById("item"+i);
    itemsNavbar = document.getElementById("items-navbar" + i)
    item.style.display = "flex";
    itemsNavbar.style.background = "rgb(151 151 151 / 50%)";
}
function navItem(i){
    item = document.getElementById("item"+i);
    itemsNavbar = document.getElementById("items-navbar" + i)
    if(item.style.width = "100%"){
        item.style.display = "none";
        itemsNavbar.style.background = "transparent";
    } else if (item.style.display = "none"){
        item.style.display = "block";
        itemsNavbar.style.background = ("rgb(151 151 151 / 50%)");
    } else{
        alert("its not goo")
    }
}
function closeItem(i){
    item = document.getElementById("item"+i);
    item.style.display = "none";
    if((item.style.width = "100%") && (item.style.display = "none")){
        item.style.top = "0%";
        item.style.right = "0%";
        item.style.height = "100%";
        item.style.left = "0%";
        item.style.bottom = "0%";
        itemsNavbar.style.background = ("transparent");
    }
}
    var flagMiniItem = "big" ;
function miniItem(){
    if(flagMiniItem == "big"){
       item.style.width = "100%";
       item.style.height = "100%";
       item.style.top = "0%";
       item.style.right = "0%";
       item.style.left = "0%";
       item.style.bottom = "0%";
       flagMiniItem = "small";
   }else
   if(flagMiniItem == "small"){
       item.style.width = "60%";
       item.style.height = "75%";
       item.style.top = "10%";
       item.style.right = "20%";
       item.style.left = "20%";
       item.style.bottom = "20%";
       flagMiniItem = "big";
       console.log(flagMiniItem);
   }
}
function refresh(){
    window.location.reload();
}
function AddFolder(){
    folder= document.createElement("div");
    folder.className ="windows-items";
    folder.innerHtml = `<img src="./img/windows-icons/imageres_109.ico"><p>This Pc</p>`;
    column.appendChild(folder);
}
var showmenu =document.querySelector(".showmenu");
document.addEventListener("contextmenu",event=>event.preventDefault());
document.addEventListener("contextmenu",(position)=>{showRigtClickMenu(position)});
document.addEventListener("click",()=>{closeMenu(1)});
function showRigtClickMenu(position){
    RightClickMenu1.style.visibility = "visible";
    RightClickMenu1.style.opacity = 1;
    RightClickMenu1.style.display = "block";
    RightClickMenu1.style.left = position.pageX+"px";
    RightClickMenu1.style.top = position.pageY+"px";
    console.log(position.pageX);

}





// <div class="windows-items" ondblclick="showContentFlex(1)">
// <img src="./img/windows-icons/imageres_109.ico" alt="">
// <p>This Pc</p>