module.export = {
  options: {
    livereload: true
  },
  compass: {
  files: ['<%= config.dev.ui %>/styles/{,*/}*.{scss,sass}'],
    tasks: ['scsslint', 'compass:dev'],
    options: {
      livereload: false,
    },
  },
  handlebars: {
  files: ['<%= config.dev.ui %>/js/templates/{,*/}*.{hbs,handlebars}'],
    tasks: ['handlebars:dev'],
    options: {
      livereload: false,
    }
  },
  scripts: {
  files: ['{<%= config.dev.assets %>,<%= config.dev.ui %>}/js/{,*/}*.js'],
    tasks: ['jshint']
  },
  css: {
  files: ['{<%= config.dev.assets %>,<%= config.dev.ui %>}/styles/{,*/}*.css']
  },
  images: {
    files: ['<%= config.dev.ui %>/img/{,*/}*.{png,jpg,jpeg,webp,gif}']
  },
};
