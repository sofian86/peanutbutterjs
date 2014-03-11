module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= config.ui.src %>/js/{,*/}*.js',
    '!<%= config.ui.src %>/js/vendor/*',

    // Node Paths
    'test/spec/{,*/}*.js',
    'server.js',
    'routes/{,*/}*.js',
    'modules/{,*/}*.js'
  ]
};
