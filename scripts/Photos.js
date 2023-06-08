function zoomPhotos(){
    let zoomRange = document.getElementById("zoomPhoto").value;
    projectPhoto.style.transform = "scale("+ zoomRange +")";
}