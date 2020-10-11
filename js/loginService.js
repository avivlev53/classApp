'use strict'
var gUsers;




function login(user) {
    user.lastLoginTime = Date.now()
    saveToStorage('loggedUser', user);
    // saveToStorage('usersDB', gUsers);
}


function renderLoginPage(user) {
    document.querySelector('h1').innerText = `${user.userName}`
    if (user.isAdmine) {
        document.querySelector('.admin-link').hidden = false
    }
}

function renderAdminPage(user) {

    var users = loadFromStorage('usersDB')
    document.querySelector('h1').innerText = `Hello Admin ${user.userName}`
    var strhtml1 = `
                <thead>
                <th scope="col">#</th>
            <th scope="col">userName</th>
            <th scope="col">password</th>
            <th scope="col">lastLoginTime</th>
            <th scope="col">isAdmin</th>
                </thead >
                <tbody> `
    var strhtml2 = users.map(function (user, index) {
        var date = fromTimeStempToDate(user.lastLoginTime)

        return `<tr>
        <th scope="row">${index + 1}</th>
    <td>${user.userName}</td>
    <td>${user.password}</td>
    <td>${date}</td>
    <td>${user.isAdmine}</td>
    </tr>
    `})
    strhtml1 += strhtml2.join(' ')
    strhtml1 += `</tbody>`
    document.querySelector('.table.table-striped.admin').innerHTML = strhtml1

}

function getUser(username) {
    return gUsers.find((user) => user.userName === username)
}
function checkPassword(user, password) {
    return user.password === password;
}

function generateUsers(){
    gUsers = _createUsers();
    saveToStorage('usersDB', gUsers);
}

function _createUsers() {
    var users = [
        { id: 'u101', userName: 'ronit', password: '123', lastLoginTime: '', isAdmine: true },
        { id: 'u102', userName: 'inbar', password: '321', lastLoginTime: '', isAdmine: false },
        { id: 'u103', userName: 'talia', password: '234', lastLoginTime: '', isAdmine: false }
    ]

    return users
}