import './globals.css'
import { Inter } from 'next/font/google'
import { Search } from './components/Search'
import { Navigation } from './components/Navigation'
import { Icon } from './components/Icon'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <section className="section-left">
            <Icon />
            <Navigation />
          </section>
          <section className="section-right">
            <header>
              <Search />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <p>This product uses TMDB Api but is not endorsed or certified by TMDB</p>
            </footer>
          </section>
        </div>

      </body>
    </html>
  )
}
