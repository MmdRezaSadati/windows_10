function shutDown(){
    Windows =document.querySelector(".windows-10");
    body.style.backgroundColor ="#000000";
    body.style.background ="url()";
    Windows.style.display = "none";
    turnOnPage.style.display = "flex";
}

function turnOn(){
    LoginToWindows = document.querySelector(".Login-To-Windows");
    turnOnPage.style.display = "none";
    Windows.style.display = "block";
    body.style.background =" url(img/images/background1.jpg) no-repeat ";
    body.style.backgroundSize ="100%";
    LoginToWindows.style.display = "flex";
}