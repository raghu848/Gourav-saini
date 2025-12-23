import { Metadata } from 'next'
import { servicesMetadata } from '../seo-metadata'

export const metadata: Metadata = servicesMetadata

import ServicesContent from './ServicesContent'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ServicesContent />
    </div>
  )
}