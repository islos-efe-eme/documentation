module.exports = {
  title: 'Product',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    sidebar: [
      '/',
      '/green-heists/',
      '/doomsday-series/',
      '/casino-heist/',
      '/drug-labs/',
      '/ie-vehicles/',
      '/securoserv/'
    ],
    repo: 'islos-efe-eme/product',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nextLinks: false,
    prevLinks: false
  }
}
