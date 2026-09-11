import { useEffect } from 'react';
import { PageSeoData, applyPageSeo } from '../utils/seoUtils';

/**
 * Hook to apply SEO + AEO metadata, Open Graph tags, canonical links,
 * and JSON-LD structured data in client-side React components.
 */
export function usePageSeo(seoData: PageSeoData): void {
  useEffect(() => {
    applyPageSeo(seoData);

    return () => {
      // Clean up dynamic JSON-LD scripts when component unmounts
      if (typeof document !== 'undefined') {
        const existingScripts = document.querySelectorAll('script[data-seo-jsonld="true"]');
        existingScripts.forEach(s => s.remove());
      }
    };
  }, [
    seoData.title,
    seoData.description,
    seoData.canonicalUrl,
    seoData.ogImage,
    seoData.ogType
  ]);
}
