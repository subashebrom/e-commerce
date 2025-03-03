function showEditBox(){
    document.querySelector('.sh-second-account-right-items').style.display = 'none';
    document.querySelector('.sh-second-account-right-items-two').style.display = 'block';
}
function saveDetails(){
    document.querySelector('.sh-second-account-right-items-two').style.display = 'none';
    document.querySelector('.sh-second-account-right-items').style.display = 'block';
}
function showSignup(){
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'block';
}
function hideSignup(){
    document.querySelector('.sh-sing-up-section').style.display = 'none'
    document.querySelector('.sh-account-second-section').style.display = 'flex';
    document.querySelector('.sh-account').style.display = 'flex';
}

function showLoginPage(){
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'block';
}
function showsigUpPage(){
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'block';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
}
function hidelogin(){
    document.querySelector('.sh-account-second-section').style.display = 'flex';
    document.querySelector('.sh-account').style.display = 'flex';
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
}
function showOtp(){
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
    document.querySelector('.sh-otp-section').style.display = 'block';
}
function hideotp(){
    document.querySelector('.sh-account').style.display = 'flex';
    document.querySelector('.sh-account-second-section').style.display = 'flex';
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
    document.querySelector('.sh-otp-section').style.display = 'none';
}
