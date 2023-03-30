import { Sidebar } from '@/components'
import { ThemeProvider } from '@/library/contexts/themeContext'

export const metadata = {
  title: 'Twitter Clone',
  description: 'Twitter Clone',
  keywords: [
    'next.js',
    'prisma',
    'mongoDB',
    'typescript',
    'twitter',
    'twitter clone',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Sidebar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
