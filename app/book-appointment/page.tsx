import { Metadata } from 'next'
import BookAppointmentForm from './BookAppointmentForm'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'
import { bookAppointmentMetadata } from '../metadata-improved'

export const metadata: Metadata = bookAppointmentMetadata

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 lg:pt-32 relative">
      <PageAnimationWrapper />
      <div className="pb-12">
        <BookAppointmentForm />
      </div>
    </div>
  )
}