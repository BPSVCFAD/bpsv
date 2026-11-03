export const metadata = {
  title: 'Our Projects — BPSV',
  description: 'Explore Beyond Purpose Social Ventures projects in rural enterprise development, clean energy, and community incubation across India.',
  openGraph: {
    title: 'Our Projects — Beyond Purpose Social Ventures',
    description: 'Explore Beyond Purpose Social Ventures projects in rural enterprise development, clean energy, and community incubation across India.',
    url: 'https://beyondpurpose.in/projects',
    siteName: 'Beyond Purpose Social Ventures',
    images: [{ url: '/assets/img/empower.png', width: 1200, height: 630, alt: 'BPSV Projects' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects — Beyond Purpose Social Ventures',
    description: 'Explore Beyond Purpose Social Ventures projects in rural enterprise development, clean energy, and community incubation across India.',
    images: ['/assets/img/empower.png'],
  },
}

export default function Layout({ children }) {
  return <>{children}</>
}
