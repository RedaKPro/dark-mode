import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import ThemeSwitcher from './ThemeSwitcher'

import './styles/globals.css'
import Providers from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
      </head>
      <body>
        <Providers><ThemeSwitcher />{children}</Providers>
      </body>
    </html>
  )
}