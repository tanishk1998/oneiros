<?php
  include 'mail.php';

  $content = trim(file_get_contents("php://input"));

  $data = json_decode($content, true);

  $walkinId = $data["walkinId"];
  $email = $data["email"];
  $name = $data["name"];

  $message = "<h2>Hello ".$name."</h2>Thank you for coming to Oneiros '18. Your Walk-In ID is ".$walkinId;
  $subject = "Oneiros - Walk-In Unique ID";
  sendMail('','', $message, $subject, $email);
  // Prototype: sendMail(<sender mail username>, <sender mail password>, message, subject, <receiver email id>)
  $arr = array("message" => "Sent", "code" => 200);
  echo json_encode(array($arr));
  
?>
