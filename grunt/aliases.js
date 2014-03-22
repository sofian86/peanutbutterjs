module.exports = {
  'prod': [
    'clean:prod',
    'concurrent:prod',
    'useminPrepare:prod',
    'requirejs:prod',
    'imagemin:prod',
    'concat',
    'cssmin',
    'uglify',
    'modernizr:prod',
    //'copy:prod',
    'regex-replace:prod',
    'filerev:prod',
    'usemin:prod',
    'clean:compassSprites',
  ],
  'staging': [
    'clean:staging',
    'concurrent:staging',
    'useminPrepare:staging',
    'requirejs:staging',
    'imagemin:staging',
    'concat',
    'cssmin',
    'uglify',
    'modernizr:staging',
    //'copy:prod',
    'regex-replace:staging',
    'filerev:staging',
    'usemin:staging',
    'clean:compassSprites',
  ],
  'test': [
    'concurrent:dev'
  ],
  'dev': [
    'concurrent:dev',
    'concurrent:nodemon',
  ],
  'default': [
    'dev'
  ]
};
