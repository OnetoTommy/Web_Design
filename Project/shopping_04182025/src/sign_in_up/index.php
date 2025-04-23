
<?php 
    require_once 'includes/config_session.inc.php';
    require_once 'includes/signup_view.inc.php';
    require_once 'includes/login_view.inc.php'
  ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <div id = "login">
    <h3>Login</h3>
    <form action="includes/login.inc.php" method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="pwd" placeholder="Password">
        <input type="submit" value = "New Account" id = "login_sp">
        <button id = "login_lg">Login</button>

    </form>

  </div>

<?php
check_login_errors();

?>

<div id = "signup" style = "display:none;">
  <h3>Signup</h3>
  <form action="includes/signup.inc.php" method="post">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="pwd" placeholder="Password">
      <input type="text" name="email" placeholder="E-Mail">
      <button id = "signup_sp">Signup</button>
  </form>
</div>


<?php
check_signup_errors();
?>

<script src= "js/script.js"></script>
</body>
</html>