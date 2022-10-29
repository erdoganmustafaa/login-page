var signForm = document.getElementById("Login");
var registerForm = document.getElementById("Register");
var btnId = document.getElementById("blueBtn");

function onPressRegister(){
    signForm.style.left="-400px";
    registerForm.style.left="130px";
    btnId.style.left="125px";
   

}
function onPressLogin(){
    signForm.style.left="120px";
    registerForm.style.left="550px";
    btnId.style.left="0px";
}

