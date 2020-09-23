<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';


function sendMail($username,$password,$body,$subject,$receiver) {
  $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {
      //Server settings
      // $mail->SMTPDebug = 3;                               // Enable verbose debug output
      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'smtp.zoho.com:587';                    // Specify main and backup SMTP servers
      //Change Host to the appropriate mail provider.
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = $username;                          // SMTP username
      $mail->Password = $password;                          // SMTP password
      $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 587;                                    // TCP port to connect to
      //Port: TLS -> 587, SSL -> 465
      $mail->SMTPOptions = array(
       'ssl' => array(
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true
        )
      );
      //Recipients
      $mail->setFrom($username,'Connect - Oneiros');
      $mail->addAddress($receiver);     // Add a recipient

      //Attachments
      // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
      // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

      //Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = $subject;
      $mail->Body    = $body;
      // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

      $mail->send();
      // echo json_encode(array('message' => 'Sent', 'code' => "200"));
      
  } catch (Exception $e) {
    echo json_encode(array('message' => $mail->ErrorInfo, 'code' => "200"));
  }
}
