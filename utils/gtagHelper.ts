export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

type Gtag = (...args: unknown[]) => void

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  if (typeof window !== 'undefined') {
    ;(window as unknown as { gtag: Gtag }).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, category: string, label: string, value: number) => {
  if (typeof window !== 'undefined') {
    ;(window as unknown as { gtag: Gtag }).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}