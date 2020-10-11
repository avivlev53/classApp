'use strict'



function onLoad() {
    generateUsers()

}


function onLoginPress() {
    var userName = document.querySelector('#exampleInputText1').value
    var password = document.querySelector('#exampleInputPassword1').value
    var user = getUser(userName)
    if (!user || !checkPassword(user, password)) return;
    $('a.login').attr('href', `${"loginPage.html"}`) 
    login(user)
}


function renderPage() {
    var user =loadFromStorage('loggedUser')
    renderLoginPage(user)

}
function onLogoutPress(){
    removeFromStorage('loggedUser')
    // localStorage.clear()
}
function onAdminPage (){
    var user =loadFromStorage('loggedUser')
    // console.log(user)
    renderAdminPage(user)

}