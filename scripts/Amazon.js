    position = 0;
    function BSnext(){
        if(position > -300){
            position = position - 100;
            gallery.style.left = position + "%";
        }else if(position == -300){
            position = 0;
            gallery.style.left = position + "%";
        }
        next.style.border = "4px ridge #75FF97";
    }
    function BSprev(){
        if(position  < 0){
            position = position + 100;
            gallery.style.left = position + "%";
        }else if(position == 0){
            position = -300;
            gallery.style.left = position + "%";
        }
        prev.style.border = "4px ridge #75FF97";
    }
    function MSright(i){
        gridItems = document.getElementById("gridItems"+ i);
        if(position > -596){
            position = position - 149;
            gridItems.style.left = position + "px";
        }else if( position == -596){
            position = 0;
            gridItems.style.left = position + "px";
        }
    }
    function MSleft(i){
        gridItems = document.getElementById("gridItems"+ i);
        if(position < 0){
            position = position +149;
            gridItems.style.left = position + "px";
        }else if( position == 0){
            position = -596;
            gridItems.style.left = position + "px";
        }
    }
        