function searchChrome(){
    var TabTitel = document.getElementById("TabTitel").innerHTML;
    var AmazonTitle = document.getElementById("AmazonTitle").innerHTML;
        if(searchiInputGoogle.value == "Amazon"|| searchiInputGoogle.value == "amazon"){
        firstPagechrome.style.display = "none";
        Amazon.style.display = "block";
        TabTitel = ""+AmazonTitle;
        }else if(searchiInputGoogle.value != "Amazon"|| searchiInputGoogle.value != "amazon") {
            cantReach.style.display= "flex"
            firstPagechrome.style.display = "none";
            cantReachAddress.innerHTML = searchiInputGoogle.value;
        }
}
function searchChrome2(){
    var TabTitel = document.getElementById("TabTitel").innerHTML;
    var AmazonTitle = document.getElementById("AmazonTitle").innerHTML;
        if(searchiInputGoogle2.value == "Amazon"|| searchiInputGoogle2.value == "amazon"){
        firstPagechrome.style.display = "none";
        Amazon.style.display = "block";
        TabTitel = ""+AmazonTitle;
        }else if(searchiInputGoogle2.value != "Amazon"|| searchiInputGoogle2.value != "amazon") {
            cantReach.style.display= "flex"
            firstPagechrome.style.display = "none";
            cantReachAddress.innerHTML = searchiInputGoogle2.value;
        }
}
function goToAmazon(){
    firstPagechrome.style.display = "none";
    Amazon.style.display = "block";
}
function changeBg(i){
	firstPagechrome.style.background = " url(./img/images/background"+i+".jpg) no-repeat -10% 60%";
    firstPagechrome.style.backgroundSize= "100%";
}