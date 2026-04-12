/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rtms-behandeling.nl',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/wp-admin/', '/aanmelden/bedankt/'],
      },
    ],
  },
}
