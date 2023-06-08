function loginToWindows(){
    if(inputLogin.value == "1234"){
        LoginWindows = document.querySelector(".Login-To-Windows");
        LoginWindows.style.display = "none";
        inputLogin.style.border="0";
        wrong.style.display="none"
    }else{
        inputLogin.style.border="3px solid #f00";
        wrong.style.display="block"
    }
    inputLogin.value = "";
}