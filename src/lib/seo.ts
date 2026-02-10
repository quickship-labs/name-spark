import { Metadata } from 'next';
import { siteConfig } from './config';

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
