let txt_name  = document.getElementById("user_name");
let txt_pass  = document.getElementById("user_password");
let btn_login = document.getElementById("login");
let btn_clear = document.getElementById("clear");
let btn_view  = document.getElementById("view");

btn_login.addEventListener('click', set_cookies);
btn_clear.addEventListener('click', unset_cookies);
btn_view.addEventListener('click', view_cookies);

function set_cookies(){
    //encodeURIComponent()
    var cookies = "credentials=";
    cookies += "name=" + txt_name.value +"&"+"password=" + txt_pass.value;
    cookies += ";path=" + window.location.pathname;
    let date = new Date();
    date.setMinutes(date.getMinutes() + 10);
    cookies += ";expires=" + date.toUTCString() + "; SameSite=Lax;";
    document.cookie = cookies;
    console.log(cookies);
}
function unset_cookies(){
    console.log("Not Implemented Yet.")
}
function view_cookies(){
    console.log(document.cookie);
}