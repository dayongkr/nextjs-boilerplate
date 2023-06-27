import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '700', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'Meta title',
  description: 'Meta description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
