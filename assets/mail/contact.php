<?php

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name     = isset($_POST['name']) ? $_POST['name'] : '';
$email    = isset($_POST['email']) ? $_POST['email'] : '';
$phone    = isset($_POST['phone']) ? $_POST['phone'] : '';
$comments = isset($_POST['comments']) ? $_POST['comments'] : '';
$interest = isset($_POST['interest']) ? $_POST['interest'] : 'Not specified';
$organization = isset($_POST['organization']) ? $_POST['organization'] : 'Not specified';

if (trim($interest) === '') {
	$interest = 'Not specified';
}
if (trim($organization) === '') {
	$organization = 'Not specified';
}

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
$interest = htmlspecialchars($interest, ENT_QUOTES, 'UTF-8');
$organization = htmlspecialchars($organization, ENT_QUOTES, 'UTF-8');


// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

//$address = "example@themeforest.net";
$address = getenv('BPSV_RECIPIENT_EMAIL') ? getenv('BPSV_RECIPIENT_EMAIL') : "atanu@sauramandala.org";

// SMTP configuration (set these in Apache/PHP environment for production use)
// Example values for Gmail: host=smtp.gmail.com, port=465, secure=ssl, user=you@gmail.com, pass=app-password
$smtp_host = getenv('BPSV_SMTP_HOST') ? getenv('BPSV_SMTP_HOST') : 'smtp.gmail.com';
$smtp_port = getenv('BPSV_SMTP_PORT') ? (int) getenv('BPSV_SMTP_PORT') : 465;
$smtp_secure = getenv('BPSV_SMTP_SECURE') ? strtolower(trim(getenv('BPSV_SMTP_SECURE'))) : 'ssl';
$smtp_user = getenv('BPSV_SMTP_USER') ? getenv('BPSV_SMTP_USER') : 'rohan.bose@sauramandala.org';
$smtp_pass = getenv('BPSV_SMTP_PASS') ? getenv('BPSV_SMTP_PASS') : 'muijquocweuecpqp';

$from_email = $smtp_user !== '' ? $smtp_user : "no-reply@beyondpurpose.in";

// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'Contact Form - BPSV';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$msg_text  = "New enquiry received from BPSV website" . PHP_EOL . PHP_EOL;
$msg_text .= "Name: $name" . PHP_EOL;
$msg_text .= "Email: $email" . PHP_EOL;
$msg_text .= "Phone: $phone" . PHP_EOL;
$msg_text .= "Interest Area: $interest" . PHP_EOL;
$msg_text .= "Organization: $organization" . PHP_EOL . PHP_EOL;
$msg_text .= "Message:" . PHP_EOL;
$msg_text .= $comments . PHP_EOL;

$msg_html = "";
$msg_html .= "<html><body style='margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;'>";
$msg_html .= "<table role='presentation' width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6fb;padding:24px 0;'>";
$msg_html .= "<tr><td align='center'>";
$msg_html .= "<table role='presentation' width='680' cellpadding='0' cellspacing='0' style='max-width:680px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e7ebf3;'>";
$msg_html .= "<tr><td style='background:#0f172a;color:#ffffff;padding:18px 24px;'>";
$msg_html .= "<h2 style='margin:0;font-size:20px;font-weight:700;'>New Enquiry Received</h2>";
$msg_html .= "<p style='margin:6px 0 0 0;font-size:13px;opacity:0.9;'>BPSV Website Contact Form</p>";
$msg_html .= "</td></tr>";
$msg_html .= "<tr><td style='padding:24px;'>";
$msg_html .= "<table role='presentation' width='100%' cellpadding='0' cellspacing='0' style='border-collapse:collapse;'>";
$msg_html .= "<tr><td style='padding:10px 0;border-bottom:1px solid #eef2f7;width:180px;color:#475569;font-size:13px;'><strong>Name</strong></td><td style='padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;'>" . $name . "</td></tr>";
$msg_html .= "<tr><td style='padding:10px 0;border-bottom:1px solid #eef2f7;width:180px;color:#475569;font-size:13px;'><strong>Email</strong></td><td style='padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;'>" . $email . "</td></tr>";
$msg_html .= "<tr><td style='padding:10px 0;border-bottom:1px solid #eef2f7;width:180px;color:#475569;font-size:13px;'><strong>Phone</strong></td><td style='padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;'>" . $phone . "</td></tr>";
$msg_html .= "<tr><td style='padding:10px 0;border-bottom:1px solid #eef2f7;width:180px;color:#475569;font-size:13px;'><strong>Interest Area</strong></td><td style='padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;'>" . $interest . "</td></tr>";
$msg_html .= "<tr><td style='padding:10px 0;border-bottom:1px solid #eef2f7;width:180px;color:#475569;font-size:13px;'><strong>Organization</strong></td><td style='padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;'>" . $organization . "</td></tr>";
$msg_html .= "</table>";
$msg_html .= "<div style='margin-top:18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;'>";
$msg_html .= "<p style='margin:0 0 8px 0;color:#334155;font-size:13px;'><strong>Message</strong></p>";
$msg_html .= "<p style='margin:0;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;'>" . nl2br($comments) . "</p>";
$msg_html .= "</div>";
$msg_html .= "</td></tr>";
$msg_html .= "<tr><td style='padding:14px 24px;background:#f8fafc;color:#64748b;font-size:12px;'>This email was generated automatically from the BPSV website enquiry form.</td></tr>";
$msg_html .= "</table>";
$msg_html .= "</td></tr>";
$msg_html .= "</table>";
$msg_html .= "</body></html>";

$headers = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

function smtp_read_response($socket) {
	$data = '';
	while ($line = fgets($socket, 515)) {
		$data .= $line;
		// Multi-line response ends when 4th char is a space.
		if (strlen($line) >= 4 && $line[3] === ' ') {
			break;
		}
	}
	return $data;
}

function smtp_expect($response, $allowed_codes) {
	if (!preg_match('/^(\d{3})/', trim($response), $matches)) {
		return false;
	}
	return in_array((int) $matches[1], $allowed_codes, true);
}

function smtp_send_command($socket, $command, $allowed_codes) {
	fwrite($socket, $command . "\r\n");
	$response = smtp_read_response($socket);
	return smtp_expect($response, $allowed_codes);
}

function send_email_smtp_auth($host, $port, $secure, $username, $password, $from, $to, $subject, $html_body, $text_body, $reply_to) {
	if ($host === '' || $port <= 0 || $username === '' || $password === '') {
		return false;
	}

	$transport = ($secure === 'ssl') ? 'ssl://' . $host : $host;
	$socket = @stream_socket_client($transport . ':' . $port, $errno, $errstr, 20);
	if (!$socket) {
		return false;
	}

	stream_set_timeout($socket, 20);
	$greeting = smtp_read_response($socket);
	if (!smtp_expect($greeting, array(220))) {
		fclose($socket);
		return false;
	}

	if (!smtp_send_command($socket, 'EHLO localhost', array(250))) {
		fclose($socket);
		return false;
	}

	if ($secure === 'tls') {
		if (!smtp_send_command($socket, 'STARTTLS', array(220))) {
			fclose($socket);
			return false;
		}
		if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
			fclose($socket);
			return false;
		}
		if (!smtp_send_command($socket, 'EHLO localhost', array(250))) {
			fclose($socket);
			return false;
		}
	}

	if (!smtp_send_command($socket, 'AUTH LOGIN', array(334))) {
		fclose($socket);
		return false;
	}
	if (!smtp_send_command($socket, base64_encode($username), array(334))) {
		fclose($socket);
		return false;
	}
	if (!smtp_send_command($socket, base64_encode($password), array(235))) {
		fclose($socket);
		return false;
	}

	if (!smtp_send_command($socket, 'MAIL FROM:<' . $from . '>', array(250))) {
		fclose($socket);
		return false;
	}
	if (!smtp_send_command($socket, 'RCPT TO:<' . $to . '>', array(250, 251))) {
		fclose($socket);
		return false;
	}
	if (!smtp_send_command($socket, 'DATA', array(354))) {
		fclose($socket);
		return false;
	}

	$subject_header = 'Subject: ' . $subject;
	$email_headers = '';
	$email_headers .= 'Date: ' . date('r') . "\r\n";
	$email_headers .= 'From: ' . $from . "\r\n";
	$email_headers .= 'To: ' . $to . "\r\n";
	$email_headers .= 'Reply-To: ' . $reply_to . "\r\n";
	$email_headers .= 'MIME-Version: 1.0' . "\r\n";
	$boundary = 'bndry_' . md5(uniqid((string) mt_rand(), true));
	$email_headers .= 'Content-Type: multipart/alternative; boundary="' . $boundary . '"' . "\r\n";

	$mime_body = '';
	$mime_body .= '--' . $boundary . "\r\n";
	$mime_body .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
	$mime_body .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
	$mime_body .= $text_body . "\r\n\r\n";
	$mime_body .= '--' . $boundary . "\r\n";
	$mime_body .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
	$mime_body .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
	$mime_body .= $html_body . "\r\n\r\n";
	$mime_body .= '--' . $boundary . '--';

	// SMTP dot-stuffing for safety.
	$escaped_body = preg_replace('/^\./m', '..', $mime_body);
	$data = $email_headers . $subject_header . "\r\n\r\n" . $escaped_body . "\r\n.";

	fwrite($socket, $data . "\r\n");
	$data_response = smtp_read_response($socket);
	$ok = smtp_expect($data_response, array(250));

	smtp_send_command($socket, 'QUIT', array(221));
	fclose($socket);

	return $ok;
}

// Try to send email using PHP mail().
// On local XAMPP without SMTP, skip/suppress mail warnings and keep file backup.
$mail_sent = false;

// Preferred path: authenticated SMTP (works reliably on local and production).
if ($smtp_host !== '' && $smtp_user !== '' && $smtp_pass !== '') {
	$mail_sent = send_email_smtp_auth(
		$smtp_host,
		$smtp_port,
		$smtp_secure,
		$smtp_user,
		$smtp_pass,
		$from_email,
		$address,
		$e_subject,
		$msg_html,
		$msg_text,
		$email
	);
}

// Fallback path: PHP mail() if authenticated SMTP is not configured.
$php_smtp_host = trim((string) ini_get('SMTP'));
$php_smtp_port = (int) ini_get('smtp_port');

if (!$mail_sent && stripos(PHP_OS, 'WIN') === 0) {
	// On Windows/XAMPP, only attempt mail() when SMTP appears configured.
	if ($php_smtp_host !== '' && strtolower($php_smtp_host) !== 'localhost' && $php_smtp_port > 0) {
		$mail_sent = @mail($address, $e_subject, $msg_html, $headers);
	}
} else if (!$mail_sent) {
	// On Linux hosting, mail() may be available via local MTA.
	$mail_sent = @mail($address, $e_subject, $msg_html, $headers);
}

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
$file_content .= "Interest: $interest\n";
$file_content .= "Organization: $organization\n";
$file_content .= "Message:\n$comments\n";
$file_content .= "=====================================\n";

file_put_contents($filename, $file_content);


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
