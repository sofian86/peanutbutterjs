module.exports = {
  options: {
    name: 'main',
    optimize: 'uglify2',
    wrap: true,
    useStrict: true,
    baseUrl: '<%= config.ui.src %>/js',
    mainConfigFile: '<%= config.ui.src %>/js/main.js',
    preserveLicenseComments: false,
  },
  prod: {
    options: {
      baseUrl: '<%= config.prod.ui %>/js',
      dir: '<%= config.prod.assets %>/js'
    }
  },
  dev: {
    options: {
      baseUrl: '<%= config.dev.ui %>/js',
      dir: '<%= config.dev.assets %>/js',
      generateSourceMaps: true
    }
  }
};
