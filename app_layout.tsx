import './globals.css'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { InteractiveLogo } from '../components/InteractiveLogo'
import { Menu } from '../components/menu'
import { BlurEffect } from '../components/blur-effect'
import { Footer } from '../components/footer'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrés Engler - Personal Website',
  description: 'Editor and entrepreneur building polished software and web experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.className} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen bg-white dark:bg-black flex flex-col">
            <div className="flex-1">
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <header className="flex justify-between items-center mb-4 pb-2">
                  <InteractiveLogo />
                  <Menu />
                </header>
                <main>
                  {children}
                </main>
              </div>
            </div>
            <BlurEffect />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

