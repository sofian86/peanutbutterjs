module.exports = {
  options: {},
  prod: {
    files: [{
      expand: true,
      cwd: '<%= config.prod.ui %>',
      src: '{,*/}*.html',
      dest: '<%= config.prod.assets %>'
    }]
  },
  staging: {
    files: [{
      expand: true,
      cwd: '<%= config.staging.ui %>',
      src: '{,*/}*.html',
      dest: '<%= config.staging.assets %>'
    }]
  },
};
