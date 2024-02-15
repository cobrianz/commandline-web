// Selecting necessary elements
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const output = document.querySelector('.output');
const commandForm = document.getElementById('commandForm');

// Adding event listener to the form submission
commandForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing the default form submission behavior

    const input = document.getElementById('command').value.trim().toLowerCase(); // Get and normalize input value

    // Checking the input value
    if (input === 'sudo login') {
        login.style.display = 'flex';
        signup.style.display = 'none';
        output.innerHTML = 'Kudoos😊😊'; // Clear output message
    } else if (input === 'sudo signup') {
        signup.style.display = 'flex';
        login.style.display = 'none';
        output.innerHTML = 'Got It'; // Clear output message
    } else if (input === 'sudo clear') {
        signup.style.display = 'none';
        login.style.display = 'none';
        output.innerHTML = 'Got It'; // Clear output message
    } else {
        output.innerHTML = 'Unknown command';
        login.style.display = 'none';
        signup.style.display = 'none';
    }
});
