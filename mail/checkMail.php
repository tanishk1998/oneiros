<?php
  include 'mail.php';

  $content = trim(file_get_contents("php://input"));

  $data = json_decode($content, true);

  $message = $data["message"];
  $email = $data["email"];
  $name = $data["name"];

  if ($message == '' || $email == '' ) {
    $arr = array("message" => "empty", "code" => 405);
    echo json_encode(array($arr));
    die();
  }

  $subject = "Succesful Registration";
  sendMail('','', $message, $subject, $email);
  // Prototype: sendMail(<sender mail username>, <sender mail password>, message, subject, <receiver email id>)
  $arr = array("message" => "Sent", "code" => 200);
  echo json_encode(array($arr));
  
?>
