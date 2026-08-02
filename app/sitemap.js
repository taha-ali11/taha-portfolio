export default function sitemap() {
  const siteUrl = "https://tahabuilds.vercel.app"; // TODO: replace with your live domain

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
