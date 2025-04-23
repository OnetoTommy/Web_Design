<?php
$host = "localhost";
$dbname = "shopping";
$dbusername = "root";
$dbpassword = "";

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname", $dbusername, $dbpassword);
  $pdo ->setAttribute(PDO :: ATTR_ERRMODE, PDO :: ERRMODE_EXCEPTION);
} catch (PDOEXCEPTION $e) {
  die("Connection failed: " . $e->getMessage());
}

?>