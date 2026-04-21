import { SITE } from '../siteData';

export const Metadata = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.company,
    "url": SITE.website,
    "logo": `${SITE.website}/logo.jpg`,
    "description": "Custom steel bridge construction and heavy infrastructure services. Made in the USA.",
    "telephone": SITE.phone,
    "email": SITE.email,
    "founder": {
      "@type": "Person",
      "name": SITE.founder
    },
    "sameAs": [SITE.facebook]
  };

  const schemaLocal = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": SITE.company,
    "telephone": SITE.phone,
    "email": SITE.email,
    "url": SITE.website,
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "priceRange": "$$$$",
    "description": "Specializing in custom steel railcar bridges with weight capacities up to 300,000 lbs."
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaLocal)}
      </script>
    </>
  );
};
