function logIn(){
    userName=document.getElementById("logInIP").value;
    localStorage.setItem("userName",userName);
    window.location="roomPage.html";
}