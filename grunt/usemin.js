module.exports = {
  prod: {
    options: {
      assetDirs: ['<%= config.prod.dest %>','<%= config.prod.assets %>'],
    },
    html: ['<%= config.prod.dest %>'],
    css: ['<%= config.prod.assets %>/styles/{,*/}*.css'],
  },
  staging: {
    options: {
      assetDirs: ['<%= config.staging.dest %>','<%= config.prod.assets %>'],
    },
    html: ['<%= config.staging.dest %>'],
    css: ['<%= config.staging.assets %>/styles/{,*/}*.css'],
  }
};
