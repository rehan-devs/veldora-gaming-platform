import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://veldora.io'
  ),
  title: 'VELDORA | Where Dragons Play and Dreams Float Away',
  description: 'The fluffiest blockchain gaming platform in the sky! Play games, earn tokens, and join the most adorable gaming kingdom ever created.',
  keywords: ['blockchain', 'gaming', 'crypto', 'NFT', 'play to earn', 'dragon', 'games'],
  openGraph: {
    title: 'VELDORA - The Fluffiest Blockchain Gaming Platform',
    description: 'Where Dragons Play and Dreams Float Away ☁️🐉',
    images: ['/og-image.png'],
    siteName: 'VELDORA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELDORA - Cloud Gaming Kingdom',
    description: 'The most adorable blockchain gaming platform! 🐉☁️✨',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&family=Patrick+Hand&family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}