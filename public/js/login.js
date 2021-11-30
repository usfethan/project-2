async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector(' #email-login').value.trim();
    const password = document.querySelector(' #password-login').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'},
        });

        if(response.ok) {
            console.log('success');
            document.location.replace(`/${email}`);
        } else {
            alert ('Failed to log in!');
        }
    }
};

async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector(' #email-signup').value.trim();
    const password = document.querySelector(' #password-signup').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'},
        });

        if(response.ok) {
            console.log('success');
            document.location.replace(`/${email}`);
        } else {
            alert ('Failed to sign up!');
        }
    }
};

const searcFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-search').value.trim();
    document.location.replace(`/${email}`);
};

document.querySelector('.login-form')
document.addEventListener('submit', signupFormHandler);
document.querySelector('.search').addEventListener('submit', searcFormHandler);