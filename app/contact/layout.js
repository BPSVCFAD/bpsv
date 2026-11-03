export const metadata = {
  title: 'Contact Us — BPSV',
  description: 'Get in touch with Beyond Purpose Social Ventures for partnerships, funding opportunities, or consulting enquiries.',
  openGraph: {
    title: 'Contact Us — Beyond Purpose Social Ventures',
    description: 'Get in touch with Beyond Purpose Social Ventures for partnerships, funding opportunities, or consulting enquiries.',
    url: 'https://beyondpurpose.in/contact',
    siteName: 'Beyond Purpose Social Ventures',
    images: [{ url: '/assets/img/empower.png', width: 1200, height: 630, alt: 'Contact BPSV' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Beyond Purpose Social Ventures',
    description: 'Get in touch with Beyond Purpose Social Ventures for partnerships, funding opportunities, or consulting enquiries.',
    images: ['/assets/img/empower.png'],
  },
}

export default function Layout({ children }) {
  return <>{children}</>
}
