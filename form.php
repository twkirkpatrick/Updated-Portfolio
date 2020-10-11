<?php

if(isset($_POST['submit'])){

    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message']; 

    $mailTo = "twk4491@gmail.com";

    $header = "From: ".$mailFrom;

    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $header);

    header("Location: index.html?mailsend");


}

?>