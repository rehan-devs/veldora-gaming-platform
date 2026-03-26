import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Reddit | VELDORA - Join Our Subreddit',
  description: 'Join r/Veldora for discussions, memes, and community content!',
}

export default function RedditPage() {
  redirect('https://reddit.com/r/veldora')
}