const genderInput = document.getElementById('gender');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmation');
const birthdayInput = document.getElementById('birthday')
const errorMessages = document.querySelectorAll('.msg');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit');

// P O P - U P __ C O N D I T I O N

usernameInput.addEventListener('focus', ()=>{
    displayError(0, "5-10 lowercases characters")
    }
);

emailInput.addEventListener('focus', ()=>{
    displayError(1, "This has to be a valid address!")
});

passwordInput.addEventListener('focus', ()=>{
    displayError(2, "8-15 characters + A-a/0-9/@!_")
});

confirmPasswordInput.addEventListener('focus', ()=>{
    displayError(3, "It must be the same than de previous password")
});

// C O N D I T I O N S

usernameInput.addEventListener('input', () => {
    if (usernameInput.value.length < 5 || usernameInput.value.length>10) {
        displayError(0, "5-10 characters");
    } else {
        hideError(0);
    }
});

emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError(1, "8 characters, '@' and '.' !");
    } else {
        hideError(1);
    }
})

passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    const passwordConditions = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!_])[A-Za-z\d@!_]{8,15}$/;
    if (!passwordConditions.test(passwordValue) || passwordValue.length < 8 || passwordValue.length > 15) {
        displayError(2, "8-15 characters + A-a/0-9/@!_");
    } else {
        hideError(2);
    }
});

confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        displayError(3, "Passwords doesn't match");
    } else {
        hideError(3);
    }
});

// D I S P L A Y __ E R R O R __ M S G

function displayError(index, message) {
    errorMessages[index].textContent = message;
    errorMessages[index].style.display = 'block';
}

function hideError(index) {
    errorMessages[index].style.display = 'none';
}

// V A L I D A T I O N S

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameValue = usernameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    const genderValue = genderInput.value;
    const birthdayValue = birthdayInput.value;

    console.log("Gender: ", genderValue);
    console.log("Username: ", usernameValue);
    console.log("Email: ", emailValue);
    console.log("Password: ", passwordValue);
    console.log("Confirm Password: ", confirmPasswordValue);
    console.log("Birthday: ", birthdayValue);
});