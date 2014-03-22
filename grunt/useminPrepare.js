module.exports = {
  options: {
    dest: '<%= config.prod.dest %>/'
  },
  prod: {
    src: ['<%= config.prod.dest %>/{,*/}*.html'],
  },
  staging: {
    options: {
      dest: '<%= config.staging.dest %>/',
    },
    src: ['<%= config.staging.dest %>/{,*/}*.html'],
  }
};
