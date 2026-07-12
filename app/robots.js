export default function robots() {
  const siteUrl = "https://tahaali.dev"; // TODO: replace with your live domain

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
