// Function to show signup section and hide login section
document.getElementById("showSignupButton").addEventListener("click", function() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("signupSection").style.display = "block";
});

// Function to go back to login section
document.getElementById("backToLoginButton").addEventListener("click", function() {
    document.getElementById("signupSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("loginMessage").innerText = ""; // Clear login message
});