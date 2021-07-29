module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      // options
      viewportWidth: 375,
      viewportHeight: 667,
      viewportUnit: 'vw',
      selectorBlackList: ['tab-bar'],
      unitPrecision: 5,
      minPixelValue: 1
    }
  }
}