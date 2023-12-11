const btnEl = document.querySelector(".btn");
const inputEL = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    createPassword();
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword();

    if(inputEL.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");}, 2000
            )};
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randonNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randonNum, randonNum + 1);  
    }
    inputEL.value = password;
    // alertContainerEl.innerText = password + " copied!"
}

function copyPassword(){
    inputEL.select();
    inputEL.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEL.value);
}