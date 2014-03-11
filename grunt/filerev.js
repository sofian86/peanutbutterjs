module.export = {
  prod: {
    files: {
      src: [
        '<%= config.prod.dest %>/js/{,*/}{!(require|modernizr)}*.js',
        '<%= config.prod.dest %>/css/{,*/}*.css',
        '<%= config.prod.dest %>/img/{,*/}.{png,jpg,jpeg,gif,webp}',
        '<%= config.prod.dest %>/fonts/{,*/}*.*'
      ]
    }
  }
};
