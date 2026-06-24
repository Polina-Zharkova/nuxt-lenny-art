module.exports = {
  plugins: [
    'cleanupIds',
    {
      name: 'prefixIds',
      params: {
        prefix: 'my-icon-' // Укажите свой префикс
      }
    }
  ]
};