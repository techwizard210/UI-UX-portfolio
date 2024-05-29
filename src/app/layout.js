import './globals.css'
import { Inter } from 'next/font/google'

// import custom style in the top layout so every page can use this style
import '../../assets/style.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abood Portfolio',
  description: 'UI/UX desginer, Web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
