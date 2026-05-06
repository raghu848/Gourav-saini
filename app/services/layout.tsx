import type { Metadata } from 'next'
import { servicesMetadata } from '../metadata-improved'

export const metadata: Metadata = {
  title: 'Orthopedic Services | Dr. Gaurav Saini',
  description: 'Comprehensive orthopedic services including robotic knee replacement, hip surgery, and sports injury treatment.',
}


export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}