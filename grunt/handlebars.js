module.export = {
  options: {
    namespace: false,
    amd: true,
    processContent: function(content) {
      content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
      content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
      return content;
    }
  },
  dev: {
    files: [{
      expand: true,
      cwd: '<%= config.dev.src %>/js/templates/',
      src: ['**/*.hbs'],
      dest: '<%= config.dev.dest %>/js/templates',
      ext: '.js',
    }],
  },
  prod: {
    files: [{
      expand: true,
      cwd: '<%= config.prod.src %>/js/templates/',
      src: ['**/*.hbs'],
      dest: '<%= config.prod.dest %>/js/templates',
      ext: '.js',
    }],
  },
};
