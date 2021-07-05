var images=["pencil.png","knife.JPEG","binder.jpeg","blender.jpeg","penstand.jpg","car.jpeg"];
var azzure_result=["pencil","scalpel","binder","blender","toothpick","coupe"];
var image_no= 0;

function change_image(){
    image_no +=1;
if(image_no==6){
image_no=0;
document.getElementById("test_image").src= images[image_no];
}
else{
document.getElementById("test_image").src= images[image_no];
}
}

function check(){
    result= azzure_result[image_no];
    console.log(result);
document.getElementById("wolfram_results").innerHTML= result;
document.getElementById("azzure_results_div").style.visibility= "visible";
document.getElementById("mobilenet_results_div").style.visibility= "visible";
}