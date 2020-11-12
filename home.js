let btn_cookie = document.getElementById("set_cookie");
const URL_CREDENT = "/credentials.html"
btn_cookie.addEventListener('click', open_credentials);

function open_credentials(){
    window.open(URL_CREDENT, "_self");
}