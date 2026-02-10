export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'NameSpark',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://namespark.vercel.app',
  description: 'Free name generators for babies, businesses, brands, usernames, gaming tags, pets, and more. Find the perfect name instantly.',
  adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
};
