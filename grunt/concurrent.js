module.exports = {
  nodemon: {
    options: {
      logConcurrentOutput: true,
    },
    tasks: [
      'nodemon:nodeInspector',
      'nodemon:dev',
      'watch',
    ],
  },
  dev: [
    'jshint',
    'scsslint',
    'compass:dev',
    'copy:dev',
    'handlebars:dev',
  ],
  prod: [
    'jshint',
    'scsslint',
    'compass:prod',
    'copy:prod',
    'handlebars:prod',
    'svgmin',
    'htmlmin'
  ],
  staging: [
    'jshint',
    'scsslint',
    'compass:staging',
    'copy:staging',
    'handlebars:staging',
    'svgmin',
    'htmlmin'
  ]
};
