import React from "react";

export default function SchemaMarkup() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VAADRO Premium Water",
    "image": "https://vaadro.com/images/product-500ml-waterfall.jpg",
    "@id": "https://vaadro.com/#localbusiness",
    "url": "https://vaadro.com",
    "telephone": "+919988676742",
    "email": "gauravsadanand2002@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Corporate Tower, Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6273,
      "longitude": 77.3725
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://facebook.com/vaadropure",
      "https://instagram.com/vaadropure"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VAADRO Packaged Drinking Water",
    "image": [
      "https://vaadro.com/images/product-500ml-waterfall.jpg",
      "https://vaadro.com/images/product-sizes.jpg"
    ],
    "description": "Premium mineral-enriched packaged drinking water purified with advanced multi-stage RO, UV, and ozonization technology.",
    "brand": {
      "@type": "Brand",
      "name": "VAADRO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://vaadro.com/products",
      "priceCurrency": "INR",
      "lowPrice": "10",
      "highPrice": "150",
      "offerCount": "6"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
