import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Twitter | VELDORA - Follow Us',
  description: 'Follow Veldora on Twitter for the latest updates and memes!',
}

export default function TwitterPage() {
  redirect('https://twitter.com/veldora')
}