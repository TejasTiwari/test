var empty = document.querySelectorAll('.inputElements').value
const sign = document.querySelector('.button')
sign.addEventListener('click',() => {
    ValidateEmail(email)
    if (empty == "") {
        alert("A required field is missing");
    }
    else {
        alert('Your account is successfully created!! Welcome to project')
    }
})

const email = document.querySelector('.email').value

function ValidateEmail(mail){
    if (mail.includes('a')) {
        alert('message: string')
    }
}
