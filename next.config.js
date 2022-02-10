module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/proxied'
        }
      ]
    }
  }
}
