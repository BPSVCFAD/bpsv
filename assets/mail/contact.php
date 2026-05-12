<?php

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name         = isset($_POST['name'])         ? $_POST['name']         : '';
$email        = isset($_POST['email'])        ? $_POST['email']        : '';
$phone        = isset($_POST['phone'])        ? $_POST['phone']        : '';
$comments     = isset($_POST['comments'])     ? $_POST['comments']     : '';
$interest     = isset($_POST['interest'])     ? $_POST['interest']     : 'Not specified';
$organization = isset($_POST['organization']) ? $_POST['organization'] : 'Not specified';

if (trim($interest) === '')     { $interest     = 'Not specified'; }
if (trim($organization) === '') { $organization = 'Not specified'; }

if (trim($name) == '') {
	echo '<div class="alert alert-error">You must enter your name.</div>';
	exit();
} else if (trim($email) == '') {
	echo '<div class="alert alert-error">You must enter email address.</div>';
	exit();
} else if (!isEmail($email)) {
	echo '<div class="alert alert-error">You must enter a valid email address.</div>';
	exit();
} else if (trim($phone) == '') {
	echo '<div class="alert alert-error">Please fill all fields!</div>';
	exit();
} else if (trim($comments) == '') {
	echo '<div class="alert alert-error">You must enter your comments</div>';
	exit();
}

// Sanitize input for security
$name         = htmlspecialchars($name,         ENT_QUOTES, 'UTF-8');
$email        = htmlspecialchars($email,        ENT_QUOTES, 'UTF-8');
$phone        = htmlspecialchars($phone,        ENT_QUOTES, 'UTF-8');
$comments     = htmlspecialchars($comments,     ENT_QUOTES, 'UTF-8');
$interest     = htmlspecialchars($interest,     ENT_QUOTES, 'UTF-8');
$organization = htmlspecialchars($organization, ENT_QUOTES, 'UTF-8');

// ── Save submission to file FIRST (before any network calls) ──────────────────
$submissions_dir = dirname(__FILE__) . '/submissions';
if (!is_dir($submissions_dir)) {
	mkdir($submissions_dir, 0755, true);
}
$safe_name    = preg_replace('/[^a-zA-Z0-9\-_]/', '_', trim($name));
$safe_name    = preg_replace('/_+/', '_', $safe_name);
$file_ts      = date('Y-m-d_H-i-s');
$filename     = $submissions_dir . '/submission_' . $file_ts . '_' . rand(1000, 9999) . '.txt';
$file_content  = "=== Contact Form Submission ===\n";
$file_content .= "Date: " . date('Y-m-d H:i:s') . "\n";
$file_content .= "Name: $name\n";
$file_content .= "Email: $email\n";
$file_content .= "Phone: $phone\n";
$file_content .= "Interest: $interest\n";
$file_content .= "Organization: $organization\n";
$file_content .= "Message:\n$comments\n";
$file_content .= "=====================================\n";
file_put_contents($filename, $file_content);

// ── SMTP configuration ────────────────────────────────────────────────────────
$address      = getenv('BPSV_RECIPIENT_EMAIL') ? getenv('BPSV_RECIPIENT_EMAIL') : "rohan.bose@sauramandala.org";
$smtp_host    = getenv('BPSV_SMTP_HOST')   ? getenv('BPSV_SMTP_HOST')                   : 'smtp.gmail.com';
$smtp_port    = getenv('BPSV_SMTP_PORT')   ? (int) getenv('BPSV_SMTP_PORT')              : 465;
$smtp_secure  = getenv('BPSV_SMTP_SECURE') ? strtolower(trim(getenv('BPSV_SMTP_SECURE'))) : 'ssl';
$smtp_user    = getenv('BPSV_SMTP_USER')   ? getenv('BPSV_SMTP_USER')                   : 'rohan.bose@sauramandala.org';
$smtp_pass    = getenv('BPSV_SMTP_PASS')   ? getenv('BPSV_SMTP_PASS')                   : 'muijquocweuecpqp';
$from_email   = $smtp_user !== '' ? $smtp_user : "no-reply@beyondpurpose.in";

$e_subject = 'Contact Form - BPSV';

// ── Admin notification email body ─────────────────────────────────────────────
$msg_text  = "New enquiry received from BPSV website" . PHP_EOL . PHP_EOL;
$msg_text .= "Name: $name" . PHP_EOL;
$msg_text .= "Email: $email" . PHP_EOL;
$msg_text .= "Phone: $phone" . PHP_EOL;
$msg_text .= "Interest Area: $interest" . PHP_EOL;
$msg_text .= "Organization: $organization" . PHP_EOL . PHP_EOL;
$msg_text .= "Message:" . PHP_EOL;
$msg_text .= $comments . PHP_EOL;

$msg_html  = "";
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

// Legacy mail() headers (fallback only)
$headers  = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

// ── Thank-you receipt email body ──────────────────────────────────────────────
$receipt_subject = 'Thank You for Contacting BPSV - We will be in Touch Soon!';

$receipt_html  = "";
$receipt_html .= "<html><body style='margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;'>";
$receipt_html .= "<table role='presentation' width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6fb;padding:32px 0;'>";
$receipt_html .= "<tr><td align='center'>";
$receipt_html .= "<table role='presentation' width='620' cellpadding='0' cellspacing='0' style='max-width:620px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e7ebf3;'>";
$receipt_html .= "<tr><td style='background:linear-gradient(135deg,#0d2d3f 0%,#1a5a68 100%);padding:32px 32px 28px;text-align:center;'>";
$receipt_html .= "<img src='https://www.beyondpurpose.in/assets/img/logo-light.png' alt='BPSV Logo' width='64' style='display:block;margin:0 auto 14px;'>";
$receipt_html .= "<h1 style='margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.02em;'>Beyond Purpose Social Ventures</h1>";
$receipt_html .= "<p style='margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);'>beyondpurpose.in</p>";
$receipt_html .= "</td></tr>";
$receipt_html .= "<tr><td style='padding:36px 32px 28px;'>";
$receipt_html .= "<p style='margin:0 0 14px;font-size:17px;font-weight:700;color:#0d2d3f;'>Hi " . $name . ",</p>";
$receipt_html .= "<p style='margin:0 0 18px;font-size:15px;color:#3d4e5c;line-height:1.75;'>Thank you for reaching out to <strong>Beyond Purpose Social Ventures</strong>. We have received your message and our team will review it shortly.</p>";
$receipt_html .= "<p style='margin:0 0 28px;font-size:15px;color:#3d4e5c;line-height:1.75;'>We typically respond within <strong>1-2 business days</strong>. If your matter is urgent, feel free to call us directly at <strong>+91 60092 12278</strong>.</p>";
$receipt_html .= "<div style='background:#f4fbfb;border:1px solid #d4f0ee;border-left:4px solid #2FA7A3;border-radius:10px;padding:20px 22px;margin-bottom:28px;'>";
$receipt_html .= "<p style='margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#2FA7A3;'>Your Submission Summary</p>";
$receipt_html .= "<table role='presentation' width='100%' cellpadding='0' cellspacing='0' style='font-size:14px;'>";
$receipt_html .= "<tr><td style='padding:5px 0;color:#7a93a3;width:130px;'>Name</td><td style='padding:5px 0;color:#0d2d3f;font-weight:600;'>" . $name . "</td></tr>";
$receipt_html .= "<tr><td style='padding:5px 0;color:#7a93a3;'>Email</td><td style='padding:5px 0;color:#0d2d3f;font-weight:600;'>" . $email . "</td></tr>";
if ($phone !== '') {
	$receipt_html .= "<tr><td style='padding:5px 0;color:#7a93a3;'>Phone</td><td style='padding:5px 0;color:#0d2d3f;font-weight:600;'>" . $phone . "</td></tr>";
}
if ($organization !== 'Not specified') {
	$receipt_html .= "<tr><td style='padding:5px 0;color:#7a93a3;'>Organization</td><td style='padding:5px 0;color:#0d2d3f;font-weight:600;'>" . $organization . "</td></tr>";
}
if ($interest !== 'Not specified') {
	$receipt_html .= "<tr><td style='padding:5px 0;color:#7a93a3;'>Interest Area</td><td style='padding:5px 0;color:#0d2d3f;font-weight:600;'>" . $interest . "</td></tr>";
}
$receipt_html .= "</table>";
$receipt_html .= "</div>";
$receipt_html .= "<div style='text-align:center;margin-bottom:28px;'>";
$receipt_html .= "<a href='https://www.beyondpurpose.in' style='display:inline-block;background:#2FA7A3;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 32px;border-radius:999px;letter-spacing:0.03em;'>Visit Our Website</a>";
$receipt_html .= "</div>";
$receipt_html .= "<p style='margin:0;font-size:14px;color:#3d4e5c;line-height:1.7;'>Warm regards,<br><strong style='color:#0d2d3f;'>The BPSV Team</strong><br><span style='color:#7a93a3;font-size:13px;'>Beyond Purpose Social Ventures</span></p>";
$receipt_html .= "</td></tr>";
$receipt_html .= "<tr><td style='background:#f8fafc;border-top:1px solid #e7ebf3;padding:16px 32px;text-align:center;'>";
$receipt_html .= "<p style='margin:0;font-size:12px;color:#94a3b8;line-height:1.6;'>Beyond Purpose Social Ventures &nbsp;|&nbsp; <a href='mailto:info@beyondpurpose.in' style='color:#2FA7A3;text-decoration:none;'>info@beyondpurpose.in</a> &nbsp;|&nbsp; +91 60092 12278</p>";
$receipt_html .= "<p style='margin:6px 0 0;font-size:11px;color:#b0bec5;'>This is an automated confirmation of your enquiry. Please do not reply to this email.</p>";
$receipt_html .= "</td></tr>";
$receipt_html .= "</table></td></tr></table></body></html>";

$receipt_text  = "Hi $name,\r\n\r\n";
$receipt_text .= "Thank you for reaching out to Beyond Purpose Social Ventures. We have received your message and our team will review it shortly.\r\n\r\n";
$receipt_text .= "We typically respond within 1-2 business days. For urgent matters, please call us at +91 60092 12278.\r\n\r\n";
$receipt_text .= "YOUR SUBMISSION SUMMARY\r\n";
$receipt_text .= "-----------------------\r\n";
$receipt_text .= "Name: $name\r\n";
$receipt_text .= "Email: $email\r\n";
if ($phone !== '')                   $receipt_text .= "Phone: $phone\r\n";
if ($organization !== 'Not specified') $receipt_text .= "Organization: $organization\r\n";
if ($interest !== 'Not specified')     $receipt_text .= "Interest Area: $interest\r\n";
$receipt_text .= "\r\nWarm regards,\r\nThe BPSV Team\r\nBeyond Purpose Social Ventures\r\ninfo@beyondpurpose.in | +91 60092 12278\r\n";

// ── SMTP helpers ──────────────────────────────────────────────────────────────
function smtp_read_response($socket) {
	$data = '';
	while ($line = fgets($socket, 515)) {
		$data .= $line;
		if (strlen($line) >= 4 && $line[3] === ' ') { break; }
	}
	return $data;
}

function smtp_expect($response, $allowed_codes) {
	if (!preg_match('/^(\d{3})/', trim($response), $matches)) { return false; }
	return in_array((int) $matches[1], $allowed_codes, true);
}

function smtp_send_command($socket, $command, $allowed_codes) {
	fwrite($socket, $command . "\r\n");
	$response = smtp_read_response($socket);
	return smtp_expect($response, $allowed_codes);
}

/**
 * Send TWO emails in a single authenticated SMTP session.
 * Authenticates once, delivers message 1, issues RSET, delivers message 2, then QUIT.
 * Returns array( $ok_msg1, $ok_msg2 ).
 */
function send_two_emails_smtp_auth(
	$host, $port, $secure, $username, $password,
	$from1, $to1, $subject1, $html1, $text1, $reply_to1,
	$from2, $to2, $subject2, $html2, $text2, $reply_to2
) {
	if ($host === '' || $port <= 0 || $username === '' || $password === '') {
		return array(false, false);
	}

	$transport = ($secure === 'ssl') ? 'ssl://' . $host : $host;
	$socket    = @stream_socket_client($transport . ':' . $port, $errno, $errstr, 20);
	if (!$socket) { return array(false, false); }

	stream_set_timeout($socket, 20);

	$greeting = smtp_read_response($socket);
	if (!smtp_expect($greeting, array(220))) { fclose($socket); return array(false, false); }

	if (!smtp_send_command($socket, 'EHLO localhost', array(250))) { fclose($socket); return array(false, false); }

	if ($secure === 'tls') {
		if (!smtp_send_command($socket, 'STARTTLS', array(220))) { fclose($socket); return array(false, false); }
		if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) { fclose($socket); return array(false, false); }
		if (!smtp_send_command($socket, 'EHLO localhost', array(250))) { fclose($socket); return array(false, false); }
	}

	// Authenticate once
	if (!smtp_send_command($socket, 'AUTH LOGIN',              array(334))) { fclose($socket); return array(false, false); }
	if (!smtp_send_command($socket, base64_encode($username),  array(334))) { fclose($socket); return array(false, false); }
	if (!smtp_send_command($socket, base64_encode($password),  array(235))) { fclose($socket); return array(false, false); }

	// Inner helper: build and send one message envelope within the open session
	$deliver = function($from, $to, $subject, $html_body, $text_body, $reply_to) use ($socket) {
		if (!smtp_send_command($socket, 'MAIL FROM:<' . $from . '>',  array(250)))       return false;
		if (!smtp_send_command($socket, 'RCPT TO:<'  . $to   . '>',  array(250, 251)))  return false;
		if (!smtp_send_command($socket, 'DATA',                        array(354)))       return false;

		$boundary = 'bndry_' . md5(uniqid((string) mt_rand(), true));
		$msg  = 'Date: '     . date('r')   . "\r\n";
		$msg .= 'From: '     . $from       . "\r\n";
		$msg .= 'To: '       . $to         . "\r\n";
		$msg .= 'Reply-To: ' . $reply_to   . "\r\n";
		$msg .= 'Subject: '  . $subject    . "\r\n";
		$msg .= 'MIME-Version: 1.0'        . "\r\n";
		$msg .= 'Content-Type: multipart/alternative; boundary="' . $boundary . '"' . "\r\n\r\n";

		$msg .= '--' . $boundary . "\r\n";
		$msg .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
		$msg .= 'Content-Transfer-Encoding: 8bit'         . "\r\n\r\n";
		$msg .= $text_body . "\r\n\r\n";

		$msg .= '--' . $boundary . "\r\n";
		$msg .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
		$msg .= 'Content-Transfer-Encoding: 8bit'        . "\r\n\r\n";
		$msg .= $html_body . "\r\n\r\n";

		$msg .= '--' . $boundary . '--';

		// SMTP dot-stuffing: any line starting with '.' gets an extra '.'
		$escaped = preg_replace('/^\./m', '..', $msg);

		fwrite($socket, $escaped . "\r\n.\r\n");
		$resp = smtp_read_response($socket);
		return smtp_expect($resp, array(250));
	};

	// Send message 1 (admin notification)
	$ok1 = $deliver($from1, $to1, $subject1, $html1, $text1, $reply_to1);

	// Reset envelope (stay authenticated) before message 2
	smtp_send_command($socket, 'RSET', array(250, 500));

	// Send message 2 (receipt to enquirer)
	$ok2 = $deliver($from2, $to2, $subject2, $html2, $text2, $reply_to2);

	smtp_send_command($socket, 'QUIT', array(221));
	fclose($socket);

	return array($ok1, $ok2);
}

// ── Send both emails in one SMTP session ──────────────────────────────────────
$mail_sent = false;

if ($smtp_host !== '' && $smtp_user !== '' && $smtp_pass !== '') {
	$smtp_results = send_two_emails_smtp_auth(
		$smtp_host, $smtp_port, $smtp_secure, $smtp_user, $smtp_pass,
		// Message 1: admin notification
		$from_email, $address,        $e_subject,       $msg_html,      $msg_text,      $email,
		// Message 2: receipt to enquirer
		$from_email, $email,          $receipt_subject,  $receipt_html,  $receipt_text,  $from_email
	);
	$mail_sent = $smtp_results[0];
}

// Fallback: PHP mail() when SMTP is not configured
$php_smtp_host = trim((string) ini_get('SMTP'));
$php_smtp_port = (int) ini_get('smtp_port');

if (!$mail_sent && stripos(PHP_OS, 'WIN') === 0) {
	if ($php_smtp_host !== '' && strtolower($php_smtp_host) !== 'localhost' && $php_smtp_port > 0) {
		$mail_sent = @mail($address, $e_subject, $msg_html, $headers);
	}
} else if (!$mail_sent) {
	$mail_sent = @mail($address, $e_subject, $msg_html, $headers);
}

// ── Response ──────────────────────────────────────────────────────────────────
if ($mail_sent) {
	echo "<div class='alert alert-success'>";
	echo "<h3>Email Sent Successfully.</h3>";
	echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us. We will contact you at <strong>$phone</strong>.</p>";
	echo "</div>";
} else {
	// Submission was already saved to file; show success anyway
	echo "<div class='alert alert-success'>";
	echo "<h3>Message Received.</h3>";
	echo "<p>Thank you <strong>$name</strong>, your message has been received. We will contact you shortly at <strong>$phone</strong>.</p>";
	echo "</div>";
	error_log("Contact form submission from $name ($email) saved to file. Email send failed.");
}
