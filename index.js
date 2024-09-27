var numberofbtns= document.querySelectorAll(".drum").length;

        var tom1=new Audio("sounds/tom-1.mp3");

for(var i=0; i<numberofbtns; i++){

    document.querySelectorAll("button")[i].addEventListener("mousedown", function(){

    this.style.color="white";

    var btninnerHtml=this.innerHTML;

    switch(btninnerHtml){

        case "w":
                        var tom1=new Audio("sounds/tom-1.mp3");

        tom1.play();

        break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();

        
            break;
        
         case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();

            break;
        
         case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();

            break;
case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
            break;

         case "k":
            var kickb=new Audio("sounds/snare.mp3");
        kickb.play();
            break;

         case "l":
            var crash=new Audio("sounds/crash.mp3");
        crash.play();
            break;

        default:console.log(btninnerHtml);

    
    }
        btnanimation(btninnerHtml);


    });




}
for(var i=0; i<numberofbtns; i++){

    document.querySelectorAll("button")[i].addEventListener("mouseup", function(){

    this.style.color="#DA0463";

    });




}


 document.addEventListener("keypress",function(e){
  
    switch(e.key){

        case "w":                        var tom1=new Audio("sounds/tom-1.mp3");

        tom1.play();

        break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();

        
            break;
        
         case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();

            break;
        
         case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();

            break;

         case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
            break;

         case "k":
            var kickb=new Audio("sounds/snare.mp3");
        kickb.play();
            break;

         case "l":
            var crash=new Audio("sounds/crash.mp3");
        crash.play();
            break;

        default:console.log(btninnerHtml);}

        btnanimation(e.key);

})

function btnanimation(ckey){
    document.querySelector("." + ckey).classList.add("pressed");

setTimeout(function () {
        document.querySelector("." + ckey).classList.remove("pressed");

}, 100)

}




