status="";
function setup(){
    canvas = createCanvas(400,350);
     canvas.center();
     video = createCapture(VIDEO);
     video.hide();
}
function  start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects...";
    input = document.getElementById("object_name").value;
    console.log("Object to detect - "+input);
    document.getElementById("object_name").value = "";
}
function draw(){
    image(video,0,0,400,350);

}
function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
}
