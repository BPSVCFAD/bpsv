<?php
// Entry point at the document root so POST requests are never blocked
// by server rules that restrict methods on /assets/ paths.
require dirname(__FILE__) . '/assets/mail/contact.php';
