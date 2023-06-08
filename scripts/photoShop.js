var Project;
var layerNumber = 2;
var layerid = 3;
var textInput;
var submit;
function layerHandler(Pr){
    Project = document.querySelector(".Project"+Pr);
}
function createText(){
    creatLayer();
    textProject = document.createElement("p");
    textProject.style.display="none";
    textProject.className = "Project Project"+layerid++;
    Project1.appendChild(textProject);
    inputText();
}

function createMostatil(){
    creatLayer();
    Mostatil = document.createElement("div"); 
    Mostatil.style.width= "200px";
    Mostatil.style.height= "100px";
    Mostatil.style.backgroundColor= "#000";
    Mostatil.className = "Project Project"+layerid++;
    Project1.appendChild(Mostatil);
}

function createDayere(){
    creatLayer();
    Dayere = document.createElement("div"); 
    Dayere.style.width= "200px";
    Dayere.style.height= "100px";
    Dayere.style.backgroundColor= "#000";
    Dayere.style.borderRadius= "8px";
    Dayere.className = "Project Project"+layerid++;
    Project1.appendChild(Dayere);
}

function cursorMove(){
    workSpace.style.cursor= "move";
}

function cursorDefault(){
    workSpace.style.cursor= "default";
}
function inputText(){
    textInput = document.createElement("input");
    textInput.className ="text-input-photoShop";
    submit = document.createElement("input");
    submit.type = "button";
    submit.value ="Confirm";
    submit.className="confirm";
    submit.onclick = submitInputText;
    Project1.appendChild(textInput);
    Project1.appendChild(submit);
}

function submitInputText(){
    textProject.style.display="block";
    textProject.innerHTML = textInput.value;
    textInput.remove();
    submit.remove();
}
function creatLayer(){
    layerNumber++
    projectDisplay = document.createElement("input");
    projectDisplay.type ="checkbox";
    projectDisplay.className = "checkbox-display-none";
    Project1.appendChild(projectDisplay);
    projectLayer = document.createElement("div");
    projectLayer.className = "Layer";
        projectLayer.innerHTML =`
    <input type="checkbox" class="turn-on" id="turn-on${layerNumber}">
    <label class="setting-display" for="turn-on${layerNumber}">
        <label for="display-Layer-${layerNumber}"><svg xmlns="http://www.w3.org/2000/svg" style="width:27px" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="40" fill="none" stroke="#bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg></label>
    </label>
    <input type="radio" class="radio-Layers" name="layers" id="Layer-${layerNumber}">
    <label class="width100" for="Layer-${layerNumber}">
        <div class="layers" onclick="layerHandler('${layerNumber}')">Layer${layerNumber}</div>
    </label>`;
    layerSection.appendChild(projectLayer);
}

function displayNone(i){
    display = document.querySelector(".Project"+i);
    if(display.style.display="block"){
        display.style.display="none";
    }else if(display.style.display="none"){
        display.style.display="block";
    }
}
function displayblock(i){
    display = document.querySelector(".Project"+i);
    if(display.style.display="none"){
        display.style.display="block";
    }
}

// * * * * Start Setting Section * * * *//

function fontSize(Size){
    Project.style.fontSize= Size + "px";
}

function TextAlign(direction){
    Project.style.textAlign= direction ;
}

function fontFamily(font){
    Project.style.fontFamily= "'"+font+"'" ;
}

function widthProject(){
    let width = document.getElementById("width").value;
    Project.style.width = width +"px";
}

function ZIndexProject(){
    let ZIndex = document.getElementById("ZIndex").value;
    Project.style.zIndex = ZIndex ;
}


function BorderLeftProject(){
    let BorderLeft = document.getElementById("BorderLeft").value;
    Project.style.borderLeft = BorderLeft +"px solid " ;
}
function BorderRightProject(){
    let BorderRight = document.getElementById("BorderRight").value;
    Project.style.borderRight = BorderRight +"px solid" ;
}
function BorderTopProject(){
    let BorderTop = document.getElementById("BorderTop").value;
    Project.style.borderTop = BorderTop +"px solid" ;
}
function BorderbottomProject(){
    let Borderbottom = document.getElementById("BorderBottom").value;
    Project.style.borderBottom = Borderbottom +"px solid" ;
}
function borderRadiusProject(){
    let borderRadius = document.getElementById("Border-Radius").value;
    Project.style.borderRadius = borderRadius +"px";
}
function borderColorProject(){
    var BorderColor = document.getElementById("borderColor").value;
    Project.style.borderColor = BorderColor;
}
function heightProject(){
    let height = document.getElementById("height").value;
    Project.style.height = height +"px";
}

function fillProject(i){
    let backgroundFill = document.getElementById("backgroundFill").value;
    Project.style.backgroundColor = backgroundFill ;
}

function colorProject(){
    let Color = document.getElementById("textColor").value;
    Project.style.color = Color ;
    console.log(Project.style.color)

}
function opacityProject(){
    let opacity = document.getElementById("opacity").value;
    Project.style.opacity = opacity ;
}

function hueProject(){
    let hue = document.getElementById("hue").value;
    Project.style.filter = "hue-rotate("+hue+"deg)" ;
}

function brightnessProject(){
    let brightness = document.getElementById("brightness").value;
    Project.style.filter = "brightness("+brightness+")" ;
}

function blurProject(){
    let blur = document.getElementById("blur").value;
    Project.style.filter = "blur("+blur+"px)" ;
}

function contrastProject(){
    let contrast = document.getElementById("contrast").value;
    Project.style.filter = "contrast("+contrast+")" ;
}

function grayscaleProject(){
    let grayscale = document.getElementById("grayscale").value;
    Project.style.filter = "grayscale("+grayscale+")" ;
}

// * * * * End Setting Section * * * *//

function zoom(){
    let zoomRange = document.getElementById("zoomRange").value;
    Project1.style.transform = "scale("+ zoomRange +")";
}
function importDone(){
    let imageLayer= document.getElementById("imageLayer");
    let item6= document.getElementById("item6");
    let imageWorkSpace= document.querySelector(".imageWorkSpace");
    item6.style.display = "none";
    imageLayer.style.display = "flex";
    imageWorkSpace.style.display = "block";   
}