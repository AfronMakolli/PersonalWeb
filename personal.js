// Alert when the page loads
window.onload = function () {
    alert("Welcome to my personal website!");
    document.getElementById("year").innerHTML =
        "© " + new Date().getFullYear() + " My Personal Website";
};

// Show message when button is clicked
function showMessage() {
    document.getElementById("message").innerHTML =
        "Thanks for visiting my website!";
}

// Change background color
function changeColor() {
    document.body.style.backgroundColor = "#dfe9f3";
}