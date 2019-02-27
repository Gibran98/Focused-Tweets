
//Function to pop up feature on click
function hideEye(){
  var eye = document.getElementById("FeatureContent");
  if (eye.style.display==="none"){
    eye.style.display = "block";
  }
  else{
    eye.style.display = "none";
  }
}
window.onload = function(){
  hideEye();
}