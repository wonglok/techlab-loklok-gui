module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://techlab-loklok.netlify.app'
    : '/',
  filenameHashing: false,
  css: {
    extract: false
  }
}
