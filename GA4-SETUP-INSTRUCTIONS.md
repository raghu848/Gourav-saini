# Google Analytics 4 and Search Console Setup Instructions

## Files Created

1. `.env.local` - Contains environment variables for GA4 and GTM
2. `public/googlef908ecc32b2da324.html` - Google Search Console verification file
3. `public/google1234567890.html` - Existing verification file (already correct)

## Next Steps

### 1. Update GA4 Measurement ID
In the `.env.local` file, replace `G-XXXXXXXXXX` with your actual GA4 measurement ID:
```
NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID-HERE
NEXT_PUBLIC_GTM_ID=GTM-MX92CL54
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION=googlef908ecc32b2da324.html
```

### 2. Restart Your Development Server
After updating the environment variables, restart your Next.js development server:
```bash
npm run dev
```

### 3. Verify Implementation

#### Check Network Requests:
1. Open your website in Chrome
2. Press F12 to open DevTools
3. Go to Network tab
4. Look for requests containing "collect" or "g/collect"
5. You should see GA4 requests if properly configured

#### Use GA4 DebugView:
1. In Google Analytics, go to Admin > Property > DebugView
2. Visit your website in a new browser tab
3. Check if visits appear in real-time

#### Verify Search Console:
1. Check Google Search Console to confirm the property is verified
2. Submit your sitemap if not already done

## Troubleshooting

If you still see 0 metrics:

1. Confirm your GA4 measurement ID is correct
2. Check that Google Tag Manager container GTM-MX92CL54 is properly configured
3. Ensure your website is receiving actual traffic (localhost traffic won't appear in GA4 reports)
4. Wait a few hours for data to populate in GA4 (DebugView shows real-time data)

## Important Notes

- Changes to environment variables require a server restart
- GA4 doesn't track localhost traffic by default
- Data typically appears in GA4 reports within 24-48 hours
- Use DebugView for immediate feedback during testing