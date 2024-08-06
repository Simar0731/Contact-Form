<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Server-side validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "error";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error";
        exit;
    }

    // Save the inquiry to the database or send an email
    // For example purposes, we'll assume success
    echo "success";
    exit;
}
?>
