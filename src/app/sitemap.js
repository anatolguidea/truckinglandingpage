export default function sitemap() {
  const baseUrl = 'https://www.nomadexpressgroup.com';
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/apply`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}


