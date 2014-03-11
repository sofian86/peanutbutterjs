module.exports = {
  tmp: '.tmp',
  ui: {
    src: 'ui-src',
    staging: '<%= config.tmp %>/staging/ui'
  }
  dev: {
    src:'<%= config.ui.src %>',
    dest: '<%= config.tmp %>/assets',
  },
  prod: {
    src:'<%= config.ui.src %>',
    dest: 'staging/assets',
  },
  staging: {
    src:'<%= config.ui.src %>',
    dest: 'assets',
  }
};
