import type { Metadata } from "next"
import { ReportLayout } from "@/components/report/ReportLayout"
import { ReportHero } from "@/components/report/ReportHero"
import { Header } from "@/components/layout/Header"
import { ReportFooter } from "@/components/report/ReportFooter"
import "../../report-theme.css"

export const metadata: Metadata = {
  title: "Precision Agriculture Market Size to Reach USD 28.6 Bn by 2035",
  description: "Precision Agriculture market valued at USD 9.7 billion in 2025, projected to reach USD 28.6 billion by 2035 at 11.4% CAGR. Segmentation, regional analysis & key players inside.",
  alternates: {
    canonical: "https://www.agricultureindustryinsights.com/precision-agriculture-market",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "article",
    title: "Precision Agriculture Market Size to Reach USD 28.6 Bn by 2035",
    description: "Precision Agriculture market valued at USD 9.7 billion in 2025, projected to reach USD 28.6 billion by 2035 at 11.4% CAGR.",
    url: "https://www.agricultureindustryinsights.com/precision-agriculture-market",
    siteName: "Agriculture Industry Insights",
    images: [
      {
        url: "https://www.agricultureindustryinsights.com/images/precision-agriculture-market-statistics.webp",
        width: 1200,
        height: 630,
        alt: "Precision Agriculture Market Size & Forecast 2026–2035",
      },
    ],
    locale: "en_US",
    publishedTime: "2025-01-01T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AgriIndustryIns",
    title: "Precision Agriculture Market Size to Reach USD 28.6 Bn by 2035",
    description: "Precision Agriculture market valued at USD 9.7 billion in 2025, projected to reach USD 28.6 billion by 2035 at 11.4% CAGR.",
    images: ["https://www.agricultureindustryinsights.com/images/precision-agriculture-market-statistics.webp"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Precision Agriculture Market Size to Reach USD 28.6 Bn by 2035",
      "description": "Precision Agriculture market valued at USD 9.7 billion in 2025, projected to reach USD 28.6 billion by 2035 at 11.4% CAGR.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.agricultureindustryinsights.com/images/precision-agriculture-market-statistics.webp",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2025-01-01",
      "dateModified": "2026-06-01",
      "author": {
        "@type": "Person",
        "name": "Meera Krishnan",
        "jobTitle": "Senior Research Analyst",
        "worksFor": {
          "@type": "Organization",
          "name": "Agriculture Industry Insights",
          "url": "https://www.agricultureindustryinsights.com"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Agriculture Industry Insights",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.agricultureindustryinsights.com/images/logo.png"
        }
      },
      "mainEntityOfPage": "https://www.agricultureindustryinsights.com/precision-agriculture-market"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.agricultureindustryinsights.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AgriTech",
          "item": "https://www.agricultureindustryinsights.com/agritech"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Precision Agriculture Market",
          "item": "https://www.agricultureindustryinsights.com/precision-agriculture-market"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Precision Agriculture market size in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Precision Agriculture market is projected to reach USD 10.8 billion in 2026, growing from USD 9.7 billion in 2025."
          }
        },
        {
          "@type": "Question",
          "name": "What is the projected size of the Precision Agriculture market by 2035?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Precision Agriculture market is projected to reach USD 28.6 billion by 2035, driven by rising adoption of GPS-guided equipment, IoT sensors, and data-driven farm management."
          }
        },
        {
          "@type": "Question",
          "name": "What is the CAGR of the Precision Agriculture market from 2026 to 2035?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Precision Agriculture market is expected to grow at a CAGR of 11.4% from 2026 to 2035."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Precision Agriculture Market Research Report 2026–2035",
      "description": "Comprehensive analysis covering market size, segmentation, regional outlook, competitive landscape, and key players.",
      "brand": {
        "@type": "Brand",
        "name": "Agriculture Industry Insights"
      },
      "offers": {
        "@type": "Offer",
        "price": "4490",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
}

export default function ReportPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <div id="progress-bar" role="progressbar" aria-label="Reading progress"></div>
        <Header />
        <ReportHero />
        <ReportLayout />
        <ReportFooter />
      </div>
    </>
  )
}
