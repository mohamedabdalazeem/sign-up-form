const firstPass = document.getElementById('password')
const secondPass = document.getElementById('password-confirm')
const password1Msg = document.getElementById('password1-msg')
const password2Msg = document.getElementById('password2-msg')

firstPass.addEventListener('input', () => {
    if(firstPass.value.length < 8){
        password1Msg.textContent = 'must be 8 characters or more'
    }else {
        password1Msg.textContent = ''
    }
})

secondPass.addEventListener('input', () => {
     if(firstPass.value != secondPass.value) {
        secondPass.setCustomValidity('password do not match!')
        password2Msg.textContent = 'passwords do not match'
    }else{
        secondPass.setCustomValidity('')
        password2Msg.textContent = ''
    }
})