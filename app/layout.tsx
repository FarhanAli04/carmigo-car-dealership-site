import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Carmigo - Premium Auto Dealer | Dallas, TX | Quality Used Cars & Financing",
    template: "%s | Carmigo Auto Dealership",
  },
  description:
    "Discover premium vehicles at Carmigo Auto Dealership in Dallas, TX. Browse 247+ quality used cars, get 60-second financing, and enjoy exceptional service. Serving DFW metroplex for 20+ years.",
  keywords: [
    "used cars Dallas",
    "auto dealership Dallas TX",
    "car financing Dallas",
    "certified pre-owned vehicles",
    "BMW Mercedes Audi dealer",
    "auto loans Dallas",
    "car dealership near me",
    "quality used cars Texas",
    "automotive financing",
    "trade-in value Dallas",
  ],
  authors: [{ name: "Carmigo Auto Dealership" }],
  creator: "Carmigo Auto Dealership",
  publisher: "Carmigo Auto Dealership",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://carmigo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carmigo.com",
    title: "Carmigo - Premium Auto Dealer | Dallas, TX",
    description:
      "Discover premium vehicles at Carmigo Auto Dealership in Dallas, TX. Browse 247+ quality used cars, get 60-second financing, and enjoy exceptional service.",
    siteName: "Carmigo Auto Dealership",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Carmigo Auto Dealership - Premium Vehicles in Dallas, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmigo - Premium Auto Dealer | Dallas, TX",
    description:
      "Discover premium vehicles at Carmigo Auto Dealership in Dallas, TX. Browse 247+ quality used cars, get 60-second financing, and enjoy exceptional service.",
    images: ["/placeholder.svg?height=630&width=1200"],
    creator: "@CarmigoAuto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Carmigo Auto Dealership",
  image: "https://carmigo.com/placeholder.svg?height=630&width=1200",
  description:
    "Premium auto dealership in Dallas, TX specializing in quality used cars, certified pre-owned vehicles, and automotive financing solutions.",
  url: "https://carmigo.com",
  telephone: "+1-555-123-4567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Auto Drive",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.797,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "17:00",
    },
  ],
  priceRange: "$15,000 - $100,000",
  paymentAccepted: ["Cash", "Credit Card", "Financing"],
  currenciesAccepted: "USD",
  areaServed: [
    {
      "@type": "City",
      name: "Dallas",
      addressRegion: "TX",
    },
    {
      "@type": "City",
      name: "Fort Worth",
      addressRegion: "TX",
    },
    {
      "@type": "City",
      name: "Arlington",
      addressRegion: "TX",
    },
    {
      "@type": "City",
      name: "Plano",
      addressRegion: "TX",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "247",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah Johnson",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Excellent service! Found my dream car and the financing was seamless. Highly recommend!",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Used Cars",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Auto Financing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Trade-In Services",
      },
    },
  ],
  sameAs: [
    "https://www.facebook.com/CarmigoAuto",
    "https://www.twitter.com/CarmigoAuto",
    "https://www.instagram.com/CarmigoAuto",
    "https://www.youtube.com/CarmigoAuto",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://carmigo.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="p:domain_verify" content="your-pinterest-verification-code" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
