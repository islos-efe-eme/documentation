module.exports = {
  title: 'Product',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    sidebar: [
      '/',
      '/casino-heist/',
      '/drug-labs/'
    ],
    repo: 'islos-efe-eme/product',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: false,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: false
  }
}
