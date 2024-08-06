$(document).ready(function() {
    $("#contactForm").on("submit", function(event) {
        event.preventDefault();

        let valid = true;
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            valid = false;
            alert("All fields are required.");
        }

        if (valid) {
            $.ajax({
                url: "contact_process.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                success: function(response) {
                    if (response === "success") {
                        $("#contactForm").hide();
                        $("#confirmationMessage").show();
                    } else {
                        alert("There was an error processing your request. Please try again.");
                    }
                }
            });
        }
    });
});
