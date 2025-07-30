import type { Metadata } from 'next'
import './globals.css'
import { LoadingProvider } from "@/components/context/loading-context"
import { SimpleLoader } from "@/components/loading/simple-loader"
import { ClientLayout } from "@/components/client-layout"

export const metadata: Metadata = {
  title: 'Sooryathejus Group Canada',
  description: 'Premium real estate and digital marketing services in Canada',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <LoadingProvider>
          <SimpleLoader />
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  )
}