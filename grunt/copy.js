module.exports = {
  prod: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.prod.ui %>',
      dest: '<%= config.prod.assets %>',
      src: [
        '*.{ico,png,txt}',
        '.htaccess',
        'img/{,*/}*.{webp,gif}',
        'fonts/{,*/}*.*',
      ]
    }, {
      expand: true,
      dot: true,
      cwd: 'views',
      dest: '<%= config.prod.dest %>/views',
      src: ['{,*/}*.{hbs,handlebars,html,jade}']
    }, {
      expand: true,
      dot: true,
      cwd: '<%= config.bowerSrc %>/requirejs',
      dest: '<%= config.prod.assets %>/js/vendor',
      src: ['require.js']
    },{
      expand: true,
      dot: true,
      cwd: '<%= config.prod.ui %>/styles',
      dest: '<%= config.prod.assets %>/styles',
      src: '{,*/}*.css'
    }]
  },
  staging: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.staging.ui %>',
      dest: '<%= config.staging.assets %>',
      src: [
        '*.{ico,png,txt}',
        '.htaccess',
        'img/{,*/}*.{webp,gif}',
        'fonts/{,*/}*.*',
      ]
    }, {
      expand: true,
      dot: true,
      cwd: 'views',
      dest: '<%= config.staging.dest %>/views',
      src: ['{,*/}*.{hbs,handlebars,html,jade}']
    }, {
      expand: true,
      dot: true,
      cwd: '<%= config.bowerSrc %>/requirejs',
      dest: '<%= config.staging.assets %>/js/vendor',
      src: ['require.js']
    }, {
      expand: true,
      dot: true,
      cwd: '<%= config.staging.ui %>/styles',
      dest: '<%= config.staging.assets %>/styles',
      src: '{,*/}*.css'
    }]
  },
  dev: {
    expand: true,
    dot: true,
    cwd: '<%= config.dev.ui %>/styles',
    dest: '<%= config.dev.assets %>/styles',
    src: '{,*/}*.css'
  }
};
