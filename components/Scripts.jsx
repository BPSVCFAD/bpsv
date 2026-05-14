'use client'

import Script from 'next/script'

export default function Scripts() {
  return (
    <>
      <Script src="/assets/js/jquery-1.12.4.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/equal-height.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.appear.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/modernizr.custom.13711.js" strategy="afterInteractive" />
      <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/progress-bar.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/count-to.js"
        strategy="afterInteractive"
        onReady={() => { window.dispatchEvent(new Event('jqueryready')) }}
      />
    </>
  )
}
