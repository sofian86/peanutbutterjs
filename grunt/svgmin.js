module.exports = {
  prod: {
    files: [{
      expand: true,
      cwd: '<%= config.prod.ui %>/img',
      src: '{,*/}*.svg',
      dest: '<%= config.prod.assets %>/img'
    }]
  },
  staging: {
    files: [{
      expand: true,
      cwd: '<%= config.staging.ui %>/img',
      src: '{,*/}*.svg',
      dest: '<%= config.staging.assets %>/img'
    }]
  },
};
