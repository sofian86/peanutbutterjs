module.exports = {
  options: {
    devFile: '<%= config.bowerSrc %>/modernizr/modernizr.js',
    'extra': {
      'shiv': true,
      'printshiv': false,
      'load': true,
      'mq': false,
      'cssclasses': true
    },
    'extensibility': {
      'addtest': false,
      'prefixed': false,
      'teststyles': false,
      'testprops': false,
      'testallprops': false,
      'hasevents': false,
      'prefixes': false,
      'domprefixes': false
    },
    uglify: true
  },
  dev: {
    outputFile: '<%= config.dev.assets %>/js/vendor/modernizr.js',
    files: [
      '<%= config.dev.src %>/js/{,*/}*.js',
      '<%= config.dev.src %>/styles/{,*/}*.{css,scss}',
      '!<%= config.dev.src %>/js/vendor/*'
    ],
  },
  prod: {
    outputFile: '<%= config.prod.assets %>/js/vendor/modernizr.js',
    files: [
      '<%= config.prod.src %>/js/{,*/}*.js',
      '<%= config.prod.src %>/styles/{,*/}*.{css,scss}',
      '!<%= config.prod.src %>/js/vendor/*'
    ],
  },
  staging: {
    outputFile: '<%= config.staging.assets %>/js/vendor/modernizr.js',
    files: [
      '<%= config.staging.src %>/js/{,*/}*.js',
      '<%= config.staging.src %>/styles/{,*/}*.{css,scss}',
      '!<%= config.staging.src %>/js/vendor/*'
    ],
  }

};
