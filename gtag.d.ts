// Type definitions for gtag
export {}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}