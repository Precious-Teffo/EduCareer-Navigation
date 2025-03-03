<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    //collect form data
    $name=htmlspecialchars($_POST['name']);
    $email=htmlspecialchars($_POST['email']);
    $message=htmlspecialchars($_POST['message']);
    
    //Set the recipient email address
    $to="educareernavigator@gmail.com";
    
    //Build the email content
    $email_content="name:$name\n";
    $email_content="email:$email\n\n";
    $email_content="message:\n $message\n";
    
    //Send email
    if(mail($to, $subject, $emaik_content,$headers)){
        echo "Thank you! Your message hase being sent.";
    }else{
        echo "Oops! Something went wrong and we could't send ypur message";
    }
}else{
    echo "There was aproblem with your submission,please try again";
}