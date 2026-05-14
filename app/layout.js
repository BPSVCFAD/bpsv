import Header from '../components/Header'
import Footer from '../components/Footer'
import Scripts from '../components/Scripts'

export const metadata = {
  title: 'BPSV — Beyond Purpose Social Ventures',
  description: 'A people-first social enterprise dedicated to building sustainable, resilient communities through doorstep incubation, clean energy, and ecosystem development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/css/themify-icons.css" rel="stylesheet" />
        <link href="/assets/css/flaticon-set.css" rel="stylesheet" />
        <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
        <link href="/assets/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/css/owl.theme.default.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/bootsnav.css" rel="stylesheet" />
        <link href="/assets/css/about.css" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        <link href="/assets/css/custom.css" rel="stylesheet" />
        <link href="/assets/css/project-pages.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div className="se-pre-con"></div>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
