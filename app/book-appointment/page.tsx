import { Metadata } from 'next'
import BookAppointmentForm from './BookAppointmentForm'

export const metadata: Metadata = {
  title: 'Book Appointment | Dr. Gaurav Saini Orthopedic Surgeon',
  description: 'Book an appointment with expert orthopedic surgeon Dr. Gaurav Saini in Mohali & Tricity. Schedule consultations for knee replacement, hip surgery, and sports injury treatment online.',
  alternates: {
    canonical: 'https://drgauravsaini.com/book-appointment/'
  }
}

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <BookAppointmentForm />
    </div>
  )
}