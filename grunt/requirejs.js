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
      dir: '<%= config.prod.dest %>/js'
    }
  },
  dev: {
    options: {
      dir: '<%= config.dev.dest %>/js',
      generateSourceMaps: true
    }
  }
};
