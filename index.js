var photos =["images/html.png","images/bootstrap.png","images/javascript.png","images/structure.png"];
var imgTag =document.querySelector(".image");
var count =0;
    function pre(){
        count++
        if(count >= photos.length){
             count=0;
             imgTag.src=photos[count];
        }
        else{
            imgTag.src=photos[count];
        }

    }
    function next(){
        count--
        if(count <0 ){
             count=photos.length-1;
             imgTag.src=photos[count];
        }
        else{
            imgTag.src=photos[count];
        }

    }
