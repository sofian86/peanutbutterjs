module.exports = {
  tmp: '.tmp',
  bowerSrc: '<%= ui.src %>/bower_components',
  ui: {
    src: 'ui',
  },
  dev: {
    ui:'<%= config.ui.src %>',
    dest: '<%= config.tmp %>',
    assets: '<%= config.dev.dest %>/assets',
  },
  prod: {
    ui:'<%= config.ui.src %>',
    dest: 'prod',
    assets: '<%= config.prod.dest %>/assets',
  },
  staging: {
    ui:'<%= config.ui.src %>',
    dest: 'staging',
    assets: '<%= config.staging.dest %>/assets',
  }
};
