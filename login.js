const form = document.querySelector(".js-form"),
    inputID = form.querySelector(".js-id"),
    inputPW = form.querySelector(".js-pw"),
    submitBtn = document.getElementById("js-submit");

const LS_ID = "user ID",
    LS_PW = "user PW";

function saveID(text){
    localStorage.setItem(LS_ID, text);
}

function savePW(text){
    localStorage.setItem(LS_PW, text);
    window.location.href = 'email.html';
}

function handleSubmit(e) {
    //e.preventDefault();
    const currentID = inputID.value;
    const currentPW = inputPW.value;
    saveID(currentID);
    savePW(currentPW);
}

function check(){
    handleSubmit()
    window.location.href = 'email.html';
}

function checkValidity(){
    var mailoutlook = /^\w+([\.-]?\w+)*@outlook.com/;
    var mailStudent = /^\w+([\.-]?\w+)*@rockets.utoledo.edu/;
    var mailProff = /^\w+([\.-]?\w+)*@utoledo.edu/;
    if(inputID.value.match(mailoutlook) || inputID.value.match(mailStudent) || inputID.value.match(mailProff)) {
        //true
        check();
    } else {
        alert("The email address you typed in is either invalid or not outlook email");
    }
}

function init(){
    checkValidity();
}
