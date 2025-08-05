// This file contains the JavaScript code for the newsletter pop-up functionality.

document.addEventListener("DOMContentLoaded", function() {
    const newsletterPopup = document.getElementById("newsletter-popup");
    const closePopupButton = document.getElementById("close-popup");
    const subscribeButton = document.getElementById("subscribe-button");

    // Show the newsletter pop-up after 1 second
    if (!localStorage.getItem("newsletterShown")) {
        setTimeout(() => {
            newsletterPopup.style.display = "block";
            localStorage.setItem("newsletterShown", "true");
        }, 1000);
    }


    // Handle subscription
    subscribeButton.addEventListener("click", function() {
        const emailInput = document.getElementById("email-input").value;
        if (emailInput) {
            alert("Thank you for subscribing with " + emailInput);
            newsletterPopup.style.display = "none";
        } else {
            alert("Please enter a valid email address.");
        }
    });
});