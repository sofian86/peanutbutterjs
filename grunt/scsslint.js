module.exports = {
  allFiles: [
    '<%= config.ui.src %>/styles/{,*/}*.scss'
  ],
  options: {
    config: '.scss-lint.yml',
    reporterOutput: null
  },
};
