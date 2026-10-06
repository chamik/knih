module.exports = {
    plugins: [
      require('@tailwindcss/postcss')({ optimize: process.env.JEKYLL_ENV === 'production' ? { minify: true } : false }),
    ]
  }
