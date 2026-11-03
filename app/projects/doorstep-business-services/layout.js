export const metadata = {
  title: 'Doorstep Business Services — BPSV',
  description: 'BPSV\'s Doorstep Business Services project delivers hands-on incubation support directly to rural women entrepreneurs in Odisha.',
  openGraph: {
    title: 'Doorstep Business Services — Beyond Purpose Social Ventures',
    description: "BPSV's Doorstep Business Services project delivers hands-on incubation support directly to rural women entrepreneurs in Odisha.",
    url: 'https://beyondpurpose.in/projects/doorstep-business-services',
    siteName: 'Beyond Purpose Social Ventures',
    images: [{ url: '/assets/img/rural.png', width: 1200, height: 630, alt: 'Doorstep Business Services — BPSV' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doorstep Business Services — Beyond Purpose Social Ventures',
    description: "BPSV's Doorstep Business Services project delivers hands-on incubation support directly to rural women entrepreneurs in Odisha.",
    images: ['/assets/img/rural.png'],
  },
}

export default function Layout({ children }) {
  return <>{children}</>
}
