module.export = {
  prod: {
    files: {
      src: [
        '<%= config.prod.assets %>/js/{,*/}{!(require|modernizr)}*.js',
        '<%= config.prod.assets %>/css/{,*/}*.css',
        '<%= config.prod.assets %>/img/{,*/}.{png,jpg,jpeg,gif,webp}',
        '<%= config.prod.assets %>/fonts/{,*/}*.*'
      ]
    }
  },
  staging: {
    files: {
      src: [
        '<%= config.staging.assets %>/js/{,*/}{!(require|modernizr)}*.js',
        '<%= config.staging.assets %>/css/{,*/}*.css',
        '<%= config.staging.assets %>/img/{,*/}.{png,jpg,jpeg,gif,webp}',
        '<%= config.staging.assets %>/fonts/{,*/}*.*'
      ]
    }
  }
};
