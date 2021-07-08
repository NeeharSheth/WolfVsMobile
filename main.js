var images=["pencil.png","knife.jpeg","binder.jpeg","blender.jpeg","penstand.jpg","car.jpeg"];
var azzure_result=["pencil","scalpel","binder","blender","toothpick","coupe"];
var mobile_result=["crane","cleaver","binder"," pencil sharpener","file","sports car"]
var conclusion_result=["Wolfram is more accurate than MobileNet","MobileNet is more accurate than Wolfram","Both are equally accurate","Wolfram is more accurate than MobileNet","None of them are accurate","Wolfram is more accurate than MobileNet"];
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
    azzure_results= azzure_result[image_no];
    mobilenet_results= mobile_result[image_no];
    conclusion_results= conclusion_result[image_no];
    console.log(azzure_result);
document.getElementById("azzure_results_div").style.visibility= "visible";
document.getElementById("mobilenet_results_div").style.visibility= "visible";
document.getElementById("conclusion_results_div").style.visibility= "visible";
document.getElementById("wolfram_results").innerHTML= azzure_results;
document.getElementById("mobilenet_results").innerHTML= mobilenet_results;
document.getElementById("conclusion_results").innerHTML= conclusion_results;
}