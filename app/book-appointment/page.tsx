import { Metadata } from 'next'
import BookAppointmentForm from './BookAppointmentForm'

import { bookAppointmentMetadata } from '../seo-metadata'

export const metadata: Metadata = bookAppointmentMetadata

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <BookAppointmentForm />
    </div>
  )
}