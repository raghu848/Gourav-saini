import type { Metadata } from 'next'
import { servicesMetadata } from './metadata'

export const metadata: Metadata = {
  title: servicesMetadata.title,
  description: servicesMetadata.description,
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}