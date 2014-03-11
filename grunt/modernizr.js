module.exports = {
  devFile: '<%= config.dev.src %>/bower_components/modernizr/modernizr.js',
  outputFile: '<%= config.dev.dest %>/js/vendor/modernizr.js',
  files: [
    '<%= config.ui.src %>/js/{,*/}*.js',
    '<%= config.ui.src %>/scss/{,*/}*.{css,scss}',
    '!<%= config.ui.src %>/js/vendor/*'
  ],
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
};
