<?php

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name     = $_POST['name'];
$email    = $_POST['email'];
$phone     = $_POST['phone'];
$comments = $_POST['comments'];

if(trim($name) == '') {
	echo '<div class="alert alert-error">You must enter your name.</div>';
	exit();
} else if(trim($email) == '') {
	echo '<div class="alert alert-error">You must enter email address.</div>';
	exit();
} else if(!isEmail($email)) {
	echo '<div class="alert alert-error">You must enter a valid email address.</div>';
	exit();
} else if(trim($phone) == '') {
	echo '<div class="alert alert-error">Please fill all fields!</div>';
	exit();
}
else if(trim($comments) == '') {
	echo '<div class="alert alert-error">You must enter your comments</div>';
	exit();
}

// Sanitize input for security
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$comments = htmlspecialchars($comments, ENT_QUOTES, 'UTF-8');


// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

//$address = "example@themeforest.net";
$address = "rohan.bose@sauramandala.org";

// GMAIL CONFIGURATION - Update these with your Gmail credentials
$gmail_username = "rohan.bose@sauramandala.org";  // Change to your Gmail
$gmail_password = "Rohan@2025";      // Use App Password from Gmail (not regular password)
$from_email = "rohan.bose@sauramandala.org";       // Change to your Gmail

// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'Contact Form - BPSV';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = "You have been contacted by $name, their additional message is as follows." . PHP_EOL . PHP_EOL;
$e_content = "\"$comments\"" . PHP_EOL . PHP_EOL;
$e_reply = "You can contact $name via email, $email" . PHP_EOL;
$e_phone = "Phone: $phone" . PHP_EOL;
$e_interest = "Interest Area: " . (isset($_POST['interest']) ? htmlspecialchars($_POST['interest'], ENT_QUOTES, 'UTF-8') : 'Not specified');

$msg = $e_body . $e_content . $e_reply . $e_phone . $e_interest;

$headers = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Try to send email using SMTP
// Note: XAMPP on Windows has limited mail support. Using file-based backup instead.
$mail_sent = false;

// Uncomment below if you have proper SMTP configured or want to use a mail service
// $mail_sent = send_email_smtp($from_email, $gmail_username, $gmail_password, $address, $e_subject, $msg);

// Save submission to file (for local development/backup)
$submissions_dir = dirname(__FILE__) . '/submissions';
if (!is_dir($submissions_dir)) {
	mkdir($submissions_dir, 0755, true);
}

$timestamp = date('Y-m-d H:i:s');
$filename = $submissions_dir . '/submission_' . date('Y-m-d_H-i-s') . '_' . rand(1000, 9999) . '.txt';
$file_content = "=== Contact Form Submission ===\n";
$file_content .= "Date: $timestamp\n";
$file_content .= "Name: $name\n";
$file_content .= "Email: $email\n";
$file_content .= "Phone: $phone\n";
$file_content .= "Interest: " . (isset($_POST['interest']) ? htmlspecialchars($_POST['interest'], ENT_QUOTES, 'UTF-8') : 'Not specified') . "\n";
$file_content .= "Organization: " . (isset($_POST['organization']) ? htmlspecialchars($_POST['organization'], ENT_QUOTES, 'UTF-8') : 'Not specified') . "\n";
$file_content .= "Message:\n$comments\n";
$file_content .= "=====================================\n";

file_put_contents($filename, $file_content);

// Function to send email via SMTP (simple socket-based)
function send_email_smtp($from, $username, $password, $to, $subject, $body) {
	// Only attempt if credentials are configured
	if (strpos($username, '@') === false || strpos($password, 'your_') !== false) {
		return false;
	}
	
	// This function is kept for future use with proper SMTP configuration
	// For now, submissions are saved to file automatically
	return false;
}


if($mail_sent) {

	// Email has sent successfully, echo a success page.

	echo "<div class='alert alert-success'>";
	echo "<h3>Email Sent Successfully.</h3>";
	echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us. We will contact you at <strong>$phone</strong>.</p>";
	echo "</div>";

} else {

	// If mail fails, still show success (submission is saved to file)
	echo "<div class='alert alert-success'>";
	echo "<h3>Message Received.</h3>";
	echo "<p>Thank you <strong>$name</strong>, your message has been received. We will contact you shortly at <strong>$phone</strong>.</p>";
	echo "</div>";
	
	// Log the error for admin review
	error_log("Contact form submission from $name ($email) saved to file. Email send failed.");

}