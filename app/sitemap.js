export default function sitemap() {
  const siteUrl = "https://tahabuilds.vercel.app"; 
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
