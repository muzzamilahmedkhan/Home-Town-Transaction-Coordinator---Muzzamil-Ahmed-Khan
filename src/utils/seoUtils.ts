import { ResourceItem, RESOURCE_LIBRARY_ITEMS } from '../data/resourceLibraryData';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface AlternateHreflang {
  lang: string;
  url: string;
}

export interface PageSeoData {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs: BreadcrumbItem[];
  structuredData?: Record<string, any>[];
  language?: 'en' | 'es';
  alternates?: AlternateHreflang[];
}

/**
 * Generates SEO + AEO metadata and structured data for the Free Guides & Downloads main library
 */
export function getMainLibrarySeoData(): PageSeoData {
  const canonicalUrl = 'https://hometowntc.com/resources/free-guides-downloads/';
  const title = 'Free Real Estate Tools, Guides & Templates | Hometown TC';
  const description =
    'Free tools for Florida Realtors, including transaction guides, checklists, templates, calculators, AI prompts, automation resources, and real estate classes.';
  const ogImage =
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80';

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://hometowntc.com/' },
    { name: 'Resources', url: 'https://hometowntc.com/resources/' },
    { name: 'Free Guides + Downloads', url: canonicalUrl }
  ];

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  // CollectionPage & ItemList JSON-LD for AI Answer Engines & Search Engines
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Florida Real Estate Tools, Guides & Templates Library',
    description: description,
    url: canonicalUrl,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Hometown Transaction Coordinators',
      url: 'https://hometowntc.com',
      logo: 'https://hometowntc.com/favicon.jpg',
      sameAs: [
        'https://www.facebook.com/hometowntc',
        'https://www.linkedin.com/company/hometowntc'
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: RESOURCE_LIBRARY_ITEMS.length,
      itemListElement: RESOURCE_LIBRARY_ITEMS.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.title,
        description: item.shortDescription,
        url: `https://hometowntc.com/resources/free-guides-downloads/${item.slug}/`,
        image: item.thumbnailUrl
      }))
    }
  };

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    ogImage,
    breadcrumbs,
    structuredData: [breadcrumbSchema, collectionSchema]
  };
}

/**
 * Generates SEO + AEO metadata and structured data for an individual resource landing page
 */
export function getResourceLandingPageSeoData(resource: ResourceItem): PageSeoData {
  const canonicalUrl = `https://hometowntc.com/resources/free-guides-downloads/${resource.slug}/`;
  const title = resource.seoTitle || `${resource.title} | Hometown TC`;
  const description =
    resource.seoDescription ||
    resource.shortDescription ||
    `Free Florida real estate tool: ${resource.title}. Download checklists, templates, and operational guides from Hometown TC.`;
  const ogImage =
    resource.previewImageUrl ||
    resource.thumbnailUrl ||
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80';

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://hometowntc.com/' },
    { name: 'Resources', url: 'https://hometowntc.com/resources/' },
    { name: 'Free Guides + Downloads', url: 'https://hometowntc.com/resources/free-guides-downloads/' },
    { name: resource.title, url: canonicalUrl }
  ];

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  // Build entity schema matching the specific resource type
  let entitySchema: Record<string, any>;

  if (
    resource.resourceType === 'Class' ||
    resource.resourceType === 'Mini-Course' ||
    resource.resourceType === 'Class / Mini-Course'
  ) {
    entitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: resource.title,
      description: resource.shortDescription,
      provider: {
        '@type': 'Organization',
        name: 'Hometown Transaction Coordinators',
        sameAs: 'https://hometowntc.com'
      },
      isAccessibleForFree: true,
      inLanguage: 'en-US',
      url: canonicalUrl,
      image: ogImage,
      educationalLevel: 'Professional Realtor Education',
      courseCode: resource.catalogId || 'HTC-EDU'
    };
  } else if (
    resource.resourceType === 'Calculator' ||
    resource.resourceType === 'Interactive Tool' ||
    resource.resourceType === 'Calculator / Interactive' ||
    resource.resourceType === 'Automation / Apps Script' ||
    resource.resourceType === 'Apps Script Tool'
  ) {
    entitySchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: resource.title,
      description: resource.shortDescription,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web-based / Browser / Google Sheets',
      offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD'
      },
      url: canonicalUrl,
      image: ogImage,
      author: {
        '@type': 'Organization',
        name: 'Hometown Transaction Coordinators'
      }
    };
  } else {
    // Default to DigitalDocument / CreativeWork for Checklists, Guides, Canva Templates, and AI Prompts
    entitySchema = {
      '@context': 'https://schema.org',
      '@type': 'DigitalDocument',
      name: resource.title,
      headline: resource.title,
      description: resource.shortDescription,
      encodingFormat:
        resource.deliveryMethod === 'canva_link'
          ? 'application/x-canva'
          : resource.deliveryMethod === 'copy_prompt'
          ? 'text/plain'
          : 'application/pdf',
      isAccessibleForFree: true,
      url: canonicalUrl,
      image: ogImage,
      datePublished: resource.publishDate || '2024-03-01',
      dateModified: resource.updatedDate || '2025-02-15',
      inLanguage: 'en-US',
      author: {
        '@type': 'Organization',
        name: 'Hometown Transaction Coordinators',
        url: 'https://hometowntc.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Hometown Transaction Coordinators',
        url: 'https://hometowntc.com',
        logo: 'https://hometowntc.com/favicon.jpg'
      },
      keywords: [
        'Florida Real Estate',
        'Florida Transaction Coordinator',
        'FAR/BAR Contract',
        resource.topic,
        ...(resource.topics || [])
      ]
    };
  }

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'article',
    ogImage,
    breadcrumbs,
    structuredData: [breadcrumbSchema, entitySchema]
  };
}

/**
 * Injects or updates meta tags, title, link tags, and JSON-LD structured data into the browser DOM
 */
export function applyPageSeo(seoData: PageSeoData): void {
  if (typeof document === 'undefined') return;

  // 1. Update Title & Document Language
  document.title = seoData.title;
  if (document.documentElement) {
    document.documentElement.lang = seoData.language || (seoData.canonicalUrl.includes('/es/') ? 'es' : 'en');
  }

  // 2. Helper to set or create meta tag
  const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard Meta Tags
  setMeta('name', 'description', seoData.description);
  setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // Open Graph Meta Tags
  const currentLang = seoData.language || (seoData.canonicalUrl.includes('/es/') ? 'es' : 'en');
  setMeta('property', 'og:title', seoData.title);
  setMeta('property', 'og:description', seoData.description);
  setMeta('property', 'og:url', seoData.canonicalUrl);
  setMeta('property', 'og:type', seoData.ogType || 'website');
  setMeta('property', 'og:site_name', 'Hometown Transaction Coordinators');
  setMeta('property', 'og:locale', currentLang === 'es' ? 'es_US' : 'en_US');
  if (seoData.ogImage) {
    setMeta('property', 'og:image', seoData.ogImage);
    setMeta('property', 'og:image:alt', seoData.title);
  }

  // Twitter Card Meta Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', seoData.title);
  setMeta('name', 'twitter:description', seoData.description);
  if (seoData.ogImage) {
    setMeta('name', 'twitter:image', seoData.ogImage);
  }

  // Canonical Link Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', seoData.canonicalUrl);

  // Alternate Hreflang Link Tags
  const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflangs.forEach(link => link.remove());

  if (seoData.alternates && seoData.alternates.length > 0) {
    seoData.alternates.forEach(alt => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.lang);
      link.setAttribute('href', alt.url);
      document.head.appendChild(link);
    });
  }

  // 3. Inject or update JSON-LD Structured Data
  // Remove existing dynamic script blocks
  const existingScripts = document.querySelectorAll('script[data-seo-jsonld="true"]');
  existingScripts.forEach(s => s.remove());

  if (seoData.structuredData && seoData.structuredData.length > 0) {
    seoData.structuredData.forEach((schemaObj, i) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.setAttribute('id', `seo-jsonld-${i}`);
      script.text = JSON.stringify(schemaObj, null, 2);
      document.head.appendChild(script);
    });
  }
}
