<?php
$currentPage    = $currentPage    ?? 'home';
$currentProject = $currentProject ?? '';
$pageStyles     = $pageStyles     ?? '';
$isHome = ($currentPage === 'home');
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="description" content="<?= htmlspecialchars($metaDesc ?? 'BPSV - Beyond Purpose Social Ventures') ?>">
   <title><?= htmlspecialchars($pageTitle ?? 'BPSV') ?></title>
   <link rel="shortcut icon" href="<?= ASSETS ?>img/favicon.png" type="image/x-icon">
   <link href="<?= ASSETS ?>css/bootstrap.min.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/font-awesome.min.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/themify-icons.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/flaticon-set.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/magnific-popup.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/owl.carousel.min.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/owl.theme.default.min.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/animate.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/bootsnav.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/about.css" rel="stylesheet" />
   <link href="<?= BASE ?>style.css" rel="stylesheet">
   <link href="<?= ASSETS ?>css/responsive.css" rel="stylesheet" />
   <link href="<?= ASSETS ?>css/custom.css" rel="stylesheet" />
   <?php if (!empty($extraCss)): foreach ($extraCss as $css): ?>
   <link href="<?= $css ?>" rel="stylesheet" />
   <?php endforeach; endif; ?>
   <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800" rel="stylesheet">
   <?php if ($pageStyles): ?>
   <style><?= $pageStyles ?></style>
   <?php endif; ?>
</head>
<body>
   <div class="se-pre-con"></div>
   <header id="home">
      <nav class="navbar navbar-default navbar-fixed white no-background bootsnav">
         <div class="container-full">
            <div class="attr-nav button fixed-nav">
               <ul>
                  <li><a href="<?= BASE ?>contact.php">Get Started</a></li>
               </ul>
            </div>
            <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i class="fa fa-bars"></i>
               </button>
               <a class="navbar-brand brand-premium" href="<?= $isHome ? '#home' : BASE . 'index.php' ?>">
                  <img src="<?= ASSETS ?>img/logo-light.png" class="logo logo-display" alt="BPSV Logo">
                  <img src="<?= ASSETS ?>img/logo1.1.png" class="logo logo-scrolled" alt="BPSV Logo" style="width:60px;">
                  <span class="logo-text logo-display">Beyond Purpose</span>
                  <span class="logo-text logo-scrolled">Beyond Purpose</span>
               </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-menu">
               <ul class="nav navbar-nav navbar-right" data-in="#" data-out="#">
                  <li<?= $isHome ? ' class="active"' : '' ?>>
                     <a href="<?= $isHome ? '#home' : BASE . 'index.php#home' ?>"<?= $isHome ? ' class="smooth-menu"' : '' ?>>Home</a>
                  </li>
                  <li<?= $currentPage === 'about' ? ' class="active"' : '' ?>>
                     <a href="<?= BASE ?>about.php">About</a>
                  </li>
                  <li class="dropdown<?= $currentPage === 'projects' ? ' active' : '' ?>">
                     <a href="<?= $isHome ? '#portfolio' : BASE . 'index.php#portfolio' ?>"<?= $isHome ? ' class="smooth-menu dropdown-toggle"' : ' class="dropdown-toggle"' ?> data-toggle="dropdown">Projects</a>
                     <ul class="dropdown-menu">
                        <li<?= ($currentPage === 'projects' && $currentProject === '') ? ' class="active"' : '' ?>>
                           <a href="<?= BASE ?>projects/">All Projects</a>
                        </li>
                        <li class="divider"></li>
                        <li<?= $currentProject === 'efficiency' ? ' class="active"' : '' ?>>
                           <a href="<?= BASE ?>projects/efficiency-for-access-enabling-dre-agribusiness/">Efficiency for Access: Enabling DRE Agribusiness</a>
                        </li>
                        <li<?= $currentProject === 'pure' ? ' class="active"' : '' ?>>
                           <a href="<?= BASE ?>projects/using-PURE-appliances-in-the-Livelihoods-Enterprises/">CLASP MAF – Scaling DRE through Ecosystem Building</a>
                        </li>
                        <li<?= $currentProject === 'doorstep' ? ' class="active"' : '' ?>>
                           <a href="<?= BASE ?>projects/doorstep-business-services/">DRIVE – Doorstep Business Services for Women Foodpreneurs</a>
                        </li>
                     </ul>
                  </li>
                  <li<?= $currentPage === 'contact' ? ' class="active"' : '' ?>>
                     <a href="<?= BASE ?>contact.php">Contact</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </header>
