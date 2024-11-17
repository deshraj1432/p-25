let btn = document.querySelector(".toggle-password");
let passwordInput = document.querySelector("#password");
btn.addEventListener("click", () =>{
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        } else
        passwordInput.type = "password";
        });

