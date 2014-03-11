modules.export = {
  clean: {
    prod: {
      files: [{
        dot: true,
        src: [
          '<%= config.prod.dest %>/*',
          '!<%= config.prod.dest %>/.git'
        ],
      }],
    },
    dev: ['<%= config.dev.dest %>'],
    compassSprites: {
      files: [{
        src: [
          '<%= build.dist %>/assets/images/sprites/*',
          '!<%= build.dist %>/assets/images/sprites/*.*',
        ],
      }],
    },
  },
};
