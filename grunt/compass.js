module.exports = {
  options: {
    sassDir: '<%= config.ui.src %>/styles',
    imagesDir: '<%= config.ui.src %>/img',
    cssDir: '<%= config.prod.dest %>/css',
    generatedImagesDir: '<%= config.prod.dest %>/img',
    fontsDir: '<%= config.ui.src %>/fonts',
    javascriptDir: '<%= config.ui.src %>/js',
    importPath: '<%= config.ui.src %>/bower_components',

    // advanced compass config necessary for spritemaps
    // https://gist.github.com/passy/5270050
    // https://github.com/yeoman/yeoman/issues/419
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images',
    httpFontsPath: '/assets/fonts',
    // let the grunt-rev task handle cache-busting
    assetCacheBuster: false,
    // `relativeAssets: true` messes up spritemap url() references in CSS
    relativeAssets: false,
    // this can house any extra settings we might
    // need not provided by grunt-contrib-compass.
    // cannot be combined with these options:
    //   * generatedImagesDir
    //   * httpImagesPath
    //   * httpGeneratedImagesPath
    //   * httpFontsPath
    //   * assetCacheBuster
    // config: 'compass.rb',
  },
  dev: {
    options: {
      debugInfo: true,
      cssDir: '<%= config.dev.dest %>',
      generatedImagesDir: '<%= config.dev.dest %>/img',
    },
  },
  staging: {
    debugInfo: true,
    cssDir: '<%= config.staging.dest %>',
    generatedImagesDir: '<%= config.staging.dest %>/img',
  }
};
