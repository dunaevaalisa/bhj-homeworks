const signIn = document.querySelector('.signin'),
        signInForm = document.getElementById('signin__form');

const welcomeWindow = document.querySelector('.welcome');

const userID = document.getElementById('user_id');

const signOut = document.getElementById('signout');

window.addEventListener('load', handleOnLoad);

signInForm.addEventListener('submit', handleSignIn);

signOut.addEventListener('click', handleSignOut);

function handleOnLoad() {
    if (localStorage.getItem('userID')) {
        userID.textContent = localStorage.getItem('userID');
        showWelcomeWindow();
        showSignOut();
    } else {
        showSignIn();
    };
};

function handleSignIn(e) {
    
    const formData = new FormData(signInForm);

    initXHR(formData, 'https://netology-slow-rest.herokuapp.com/auth.php');

    e.preventDefault();
};

function handleSignOut(e) {
    localStorage.removeItem('userID');
    removeSignOut();
    rmvWelcomeWindow();

    userID.textContent = '';
    showSignIn();

    e.preventDefault();
};

function initXHR(form, url) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', url);

    xhr.addEventListener('readystatechange', function() {

        if(this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.response);
            
            if (response.success) {
                saveUserId(response);
                showWelcomeWindow();
                showSignOut();
                signInForm.reset();
            } else {
                alert('Неверный логин/пароль');
            };
        };
    });

    signin.send(form);
};

function saveUserId(response) {
    localStorage.setItem('userID', `${response['user_id']}`);
    userID.textContent = response['user_id'];
};

function showWelcomeWindow() {
    signIn.classList.remove('signin_active');
    welcomeWindow.classList.add('welcome_active');
};

function rmvWelcomeWindow() {
    welcomeWindow.classList.remove('welcome_active');
};

function showSignIn() {
    signIn.classList.add('signin_active');
};

function showSignOut() {
    signOut.classList.add('signout_active');
};

function removeSignOut() {
    signOut.classList.remove('signout_active');
};
