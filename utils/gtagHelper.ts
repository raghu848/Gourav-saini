// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Tag Manager Container ID
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// Google Search Console Verification Code
export const GOOGLE_SEARCH_CONSOLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

type Gtag = (...args: unknown[]) => void;

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, category: string, label: string, value: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Google Tag Manager event tracking
export const gtmEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
};

// Helper function to generate responsive image sources
export const generateImageSrcSet = (baseSrc: string, width: number, height: number) => {
  // Extract file extension and name
  const lastDotIndex = baseSrc.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  
  const extension = baseSrc.substring(lastDotIndex);
  const baseName = baseSrc.substring(0, lastDotIndex);
  
  // Generate different sizes for responsive loading
  const sizes = [320, 480, 640, 768, 1024, 1200, 1536, 2048];
  
  return sizes
    .filter(size => size <= width) // Only include sizes up to the original width
    .map(size => {
      const ratio = size / width;
      const newHeight = Math.round(height * ratio);
      return `${baseName}-${size}w${extension} ${size}w`;
    })
    .join(', ');
};
