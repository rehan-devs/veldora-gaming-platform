import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Discord | VELDORA - Join Our Community',
  description: 'Join the Veldora Discord server and chat with thousands of dragons!',
}

export default function DiscordPage() {
  // Redirect to Discord invite link
  redirect('https://discord.gg/veldora')
}