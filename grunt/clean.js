module.export = {
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
    tmp: ['<%= config.tmp %>'],
    dev: ['<%= config.dev.dest %>'],
    staging: {
      files: [{
        dot: true,
        src: [
          '<%= config.staging.dest %>/*',
          '!<%= config.staging.dest %>/.git'
        ],
      }]
    },
    compassSprites: {
      files: [{
        src: [
          '{<%= config.prod.assets %>,<%= config.staging.assets %>}/img/sprites/*',
          '!{<%= config.prod.assets %>%>,<%= config.staging.assets %>}/img/sprites/*.*',
        ],
      }],
    },
  },
};
