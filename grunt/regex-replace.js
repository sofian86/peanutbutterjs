module.exports = {
  prod: {
    src: ['<%= config.prod.dest %>/views/{,*/}*.{hbs,handlebars,html,jade}'],
    actions: [{
      name: 'modernizrjs',
      search: '\\/assets\\/bower_components\\/modernizr\\/modernizr\\.js',
      replace: '/assets/scripts/vendor/modernizr.js',
      flags: 'g',
    }, {
      name: 'requirejs',
      search: '\\/assets\\/bower_components\\/requirejs\\/require\\.js',
      replace: '/assets/scripts/vendor/require.js',
      flags: 'g',
    }]
  },
  staging: {
    src: ['<%= config.staging.dest %>/views/{,*/}*.{hbs,handlebars,html,jade}'],
    actions: [{
      name: 'modernizrjs',
      search: '\\/assets\\/bower_components\\/modernizr\\/modernizr\\.js',
      replace: '/assets/scripts/vendor/modernizr.js',
      flags: 'g',
    }, {
      name: 'requirejs',
      search: '\\/assets\\/bower_components\\/requirejs\\/require\\.js',
      replace: '/assets/scripts/vendor/require.js',
      flags: 'g',
    }]
  },
};
