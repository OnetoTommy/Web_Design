<?php

include 'connect.php';

if (isset($_POST['signUp'])) {
  $firstName = $_POST['fName'];
  $lastName = $_POST['lName'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $password = md5($password);  // Hash the password (not secure in real-world apps, use bcrypt instead)
  $others = $_POST['others']; // Optional field from form

  // Check if email already exists
  $checkEmail = "SELECT * FROM users WHERE email = '$email'";
  $result = $conn->query($checkEmail);

  if ($result->num_rows > 0) {
      echo "Email Address Already Exists!";
  } else {
      // Insert new user
      $insertQuery = "INSERT INTO users (firstName, lastName, email, password, Others) 
                      VALUES ('$firstName', '$lastName', '$email', '$password', '$others')";
      if ($conn->query($insertQuery) === TRUE) {
          header("location: index.php");
      } else {
          echo "Error: " . $conn->error;
      }
  }
}

if (isset($_POST['signIn'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Hash password (must match the way you stored it)
  $password = md5($password);

  // Query to find the user
  $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // Start session and store user info
      session_start();
      $row = $result->fetch_assoc();
      $_SESSION['email'] = $row['email'];
      header("Location: homepage.php");
      exit();
      // Redirect to dashboard or home page (optional)
      // header("Location: dashboard.php");
  } else {
      echo "Invalid email or password.";
  }
}

?>