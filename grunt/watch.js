module.export = {
  options: {
    livereload: true
  },
  compass: {
    files: ['<%= config.dev.src %>/js/{,*/}.{scss,sass}'],
    tasks: ['scsslint', 'compass:dev'],
    options: {
      livereload: false,
    },
  },
  handlebars: {
    files: ['<%= config.dev.src %>/js/templates/{,*/}*.hbs'],
    tasks: ['handlebars:dev'],
    options: {
      livereload: false,
    }
  },
  scripts: {
    files: ['{<%= config.dev.dest %>,<%= config.dev.src %>}/js/{,*/}*.js'],
    tasks: ['jshint']
  },
  css: {
    files: ['{<%= config.dev.dest %>,<%= config.dev.src %>}/css/{,*/}*.css']
  },
  images: {
    files: ['<%= config.dev.dest %>/img/{,*/}*.{png,jpg,jpeg,webp,gif}']
  },
};
