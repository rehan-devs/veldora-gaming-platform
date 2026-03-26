import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Telegram | VELDORA - Join Our Group',
  description: 'Join the Veldora Telegram group and stay connected!',
}

export default function TelegramPage() {
  redirect('https://t.me/veldora')
}