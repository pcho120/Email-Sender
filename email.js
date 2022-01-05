const logoutBtn = document.getElementById("js-logout"),
    composeBtn = document.getElementById("compose"),
    emailSendBton = document.getElementById("emailSend"),
    formName = document.querySelector(".js-formName"),
    formTo = document.querySelector(".js-formTo"),
    formSubject = document.querySelector(".js-formSubject"),
    formBody = document.querySelector(".js-formBody"),
    inputTo = formTo.querySelector("input"),
    inputSubj = formSubject.querySelector("input"),
    inputBody = formBody.querySelector("input"),
    readTo = document.getElementById("readTo"),
    readSubj = document.getElementById("readSubj"),
    readBody = document.getElementById("readBody");

const list1 = document.getElementById("list1"),
    list1To = document.getElementById("list1To"),
    list1Subj = document.getElementById("list1Subj"),
    list1Body = document.getElementById("list1Body"),
    list2 = document.getElementById("list2"),
    list2To = document.getElementById("list2To"),
    list2Subj = document.getElementById("list2Subj"),
    list2Body = document.getElementById("list2Body"),
    list3 = document.getElementById("list3"),
    list3To = document.getElementById("list3To"),
    list3Subj = document.getElementById("list3Subj"),
    list3Body = document.getElementById("list3Body"),
    list4 = document.getElementById("list4"),
    list4To = document.getElementById("list4To"),
    list4Subj = document.getElementById("list4Subj"),
    list4Body = document.getElementById("list4Body"),
    list5 = document.getElementById("list5"),
    list5To = document.getElementById("list5To"),
    list5Subj = document.getElementById("list5Subj"),
    list5Body = document.getElementById("list5Body");
    
var currentList = "",
    currentListTo = "",
    currentListSubj = "",
    currentListBody = "";
var count = 0,
    clickedBtnID = "";

//clicked logout -> delete saved ID and password
function deleteLS() {
    localStorage.removeItem("user ID");
    localStorage.removeItem("user PW");
}

//clicked delete button to delete the information inside the sent email
function clickedInnerDelete(){
    readTo.innerText = "";
    readSubj.innerText = "";
    readBody.innerText = "";

    if(clickedBtnID === 'list1'){
        list1To.textContent = "";
        list1Subj.textContent = "";
        list1Body.textContent = "";
        console.log(list1To.textContent);
    } else if (clickedBtnID === 'list2') {
        readTo.innerText = list2To.textContent;
        readSubj.innerText = list2Subj.textContent;
        readBody.innerText = list2Body.textContent;
    } else if (clickedBtnID === 'list3') {
        readTo.innerText = list3To.textContent;
        readSubj.innerText = list3Subj.textContent;
        readBody.innerText = list3Body.textContent;
    } else if (clickedBtnID === 'list4') {
        readTo.innerText = list4To.textContent;
        readSubj.innerText = list4Subj.textContent;
        readBody.innerText = list4Body.textContent;
    } else if (clickedBtnID === 'list5') {
        readTo.innerText = list5To.textContent;
        readSubj.innerText = list5Subj.textContent;
        readBody.innerText = list5Body.textContent;
    } 
}

function clicked(){
    var list = [list1, list2, list3, list4, list5];
    var listA = [list1To, list2To, list3To, list4To, list5To];
    var listB = [list1Subj, list2Subj, list3Subj, list4Subj, list5Subj];
    var listC = [list1Body, list2Body, list3Body, list4Body, list5Body];
    
    for(count; count < 5; count++){
        if(listA[count] != null){
            currentList = list[count];
            currentListTo = listA[count];
            currentListSubj = listB[count];
            currentListBody = listC[count];
            break;
        }
    }
    const currentTo = inputTo.value;
    const currentSubj = inputSubj.value;
    const currentBody = inputBody.value;
    
    currentListTo.innerText = currentTo;
    currentListSubj.innerText = currentSubj;
    currentListBody.innerText = currentBody;
    count++;
}

//sending email function
function sendMail(params){
    var tempParams = {
        fromEmail: localStorage.getItem('user ID'),
        toEmail: document.getElementById("toEmail").value,
        subject: document.getElementById("subject").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };

    localStorage.setItem("to", toEmail);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", msg);

    clicked();

    emailjs.send('outlook', 'template_jpfph1k', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
    
    showDefault();
}

//check To Email address
function EmailValidity(){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputTo.value.match(mailFormat)){
        sendMail();
    } else {
        alert("The E-mail address is invalid!");
    }
}

function showDefault(){
    document.getElementById("composePart").style.display = "none";
    document.getElementById("readSentItem").style.display = "none";
    document.getElementById("default").style.display = "block";
}

//clicked compose button to display compose part on right side
function showCompose(){
    document.getElementById("default").style.display = "none";
    document.getElementById("readSentItem").style.display = "none";
    document.getElementById("composePart").style.display = "block";
    console.log("clicked");
}

//clicked sent email list
function listClicked(btn){
    document.getElementById("default").style.display = "none";
    document.getElementById("composePart").style.display = "none";
    document.getElementById("readSentItem").style.display = "block";
    
    clickedBtnID = btn.id;
    if(clickedBtnID === 'list1'){
        readTo.innerText = list1To.textContent;
        readSubj.innerText = list1Subj.textContent;
        readBody.innerText = list1Body.textContent;
    } else if (clickedBtnID === 'list2') {
        readTo.innerText = list2To.textContent;
        readSubj.innerText = list2Subj.textContent;
        readBody.innerText = list2Body.textContent;
    } else if (clickedBtnID === 'list3') {
        readTo.innerText = list3To.textContent;
        readSubj.innerText = list3Subj.textContent;
        readBody.innerText = list3Body.textContent;
    } else if (clickedBtnID === 'list4') {
        readTo.innerText = list4To.textContent;
        readSubj.innerText = list4Subj.textContent;
        readBody.innerText = list4Body.textContent;
    } else if (clickedBtnID === 'list5') {
        readTo.innerText = list5To.textContent;
        readSubj.innerText = list5Subj.textContent;
        readBody.innerText = list5Body.textContent;
    } 
    
}

function init() {
    document.getElementById("composePart").style.display = "none";
    document.getElementById("readSentItem").style.display = "none";
    logoutBtn.addEventListener("click", deleteLS);
    composeBtn.addEventListener("click", showCompose);
    //submitBtn.addEventListener("click", sendEmail);
    console.log(localStorage.getItem('user ID'));
    
    
}
init();