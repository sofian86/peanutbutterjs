module.exports = (function(){

  var ignoredFiles = [
    'README.md',
    'Gruntfile.js',
    'node-inspector.js',
    'karma.conf.js',
    '/.git/',
    '/node_modules/',
    '/<%= config.ui.src %>/',
    '/<%= config.tmp %>/',
    '/<%= config.prod.dest %>/',
    '/<%= config.staging.dest %>/',
    '/test/',
    '/coverage/',
    '/.sass-cache',
    '*.txt',
    '*.jade',
    '*.hbs',
    '*.handlebars'
  ];

  var extensions = ['js'];

  return {
    dev: {
      options: {
        file: 'index.js',
        args: ['development'],
        nodeArgs: ['--debug'],
        watchedExtensions: extensions,
        debug: true,
        delayTime: 1,
        ignoredFiles: ignoredFiles,
      }
    },
    nodeInspector: {
      options: {
        file: 'node-inspector.js',
        watchedExtensions: extensions,
        exec: 'node-inspector',
        ignoredFiles: ignoredFiles,
      }
    }
  };
}());
