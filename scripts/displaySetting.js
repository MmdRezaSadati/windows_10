function changeWindowBg(i){
    body = document.querySelector("body");
    body.style.background = "url(img/images/background"+i+".jpg) no-repeat -10% 10%";
    body.style.backgroundSize= "100%";
}
function changeThemeBackgroundFill(){
    body = document.querySelector("body");
    windowsFill = document.getElementById("windowsFill").value;
    body.style.background= "url(img/images/null.png)";
    body.style.backgroundColor= windowsFill;
}