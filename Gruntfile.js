'use strict';

module.exports = function (grunt) {

	// show elapsed time at the end
	require('time-grunt')(grunt);

	//load all grunt tasks
	require('load-grunt-tasks')(grunt);

	var buildConfig = {
		app: 'app',
		dist: 'dist'
	};

	//Move to a seperate file later
	var nodemonIgnoredFiles = [
		'README.md',
		'Gruntfile.js',
		'node-inspector.js',
		'karma.conf.js',
		'/.git/',
		'/node_modules/',
		'/app/',
		'/dist/',
		'/test/',
		'/coverage/',
		'/temp/',
		'/.tmp',
		'/.sass-cache',
		'*.txt',
		'*.jade',
	];

	grunt.initConfig({
		build: buildConfig,
		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: ['<%= build.app %>/styles/**/*.{scss,sass}'],
				tasks: ['compass:server'],
				options: {
					livereload: false,
				},
			},
			handlebars: {
				files: ['<%= build.app %>/scripts/templates/**/*.hbs'],
				tasks: ['handlebars:app'],
				options: {
					livereload: false,
				}
			},
			scripts: {
				files: ['{.tmp,<%= build.app %>}/scripts/**/*.js']
			},
			css: {
				files: ['{.tmp,<%= build.app %>}/styles/**/*.css']
			},
			images: {
				files: ['<%= build.app %>/images/**/*.{png,jpg,jpeg,webp,gif}']
			},
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= build.dist %>/*',
						'!<%= build.dist %>/.git'
					],
				}],
			},
			server: ['.tmp'],
			compassSprites: {
				files: [{
					src: [
						'<%= build.dist %>/<%= build.app %>/images/sprites/*',
						'!<%= build.dist %>/<%= build.app %>/images/sprites/*.*',
					],
				}],
			},
		},
		compass: {
			options: {
				sassDir: '<%= build.app %>/styles',
				cssDir: '.tmp/styles',
				imagesDir: '<%= build.app %>/images',
				generatedImagesDir: '.tmp/images',
				fontsDir: '<%= build.app %>/styles/fonts',
				javascriptDir: '<%= build.app %>/scripts',
				importPath: '<%= build.app %>/bower_components',

				// advanced compass config necessary for spritemaps
				// https://gist.github.com/passy/5270050
				// https://github.com/yeoman/yeoman/issues/419
				httpImagesPath: '/images',
				httpGeneratedImagesPath: '/images',
				httpFontsPath: '/styles/fonts',
				// let the grunt-rev task handle cache-busting
				assetCacheBuster: false,
				// `relativeAssets: true` messes up spritemap url() references in CSS
				relativeAssets: false,
				// this can house any extra settings we might
				// need not provided by grunt-contrib-compass.
				// cannot be combined with these options:
				//   * generatedImagesDir
				//   * httpImagesPath
				//   * httpGeneratedImagesPath
				//   * httpFontsPath
				//   * assetCacheBuster
				// config: 'compass.rb',
			},
			dist: {
				options: {
					generatedImagesDir: '<%= build.dist %>/<%= build.app %>/images'
				}
			},
			server: {
				options: {
					debugInfo: true,
				}
			}
		},
		handlebars: {
			app: {
				options: {
					namespace: false,
					amd: true,
					processContent: function (content) {
						content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
						content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
						return content;
					}
				},
				files: [{
					expand: true,
					cwd: '<%= build.app %>/scripts/templates/',
					src: ['**/*.hbs'],
					dest: '.tmp/scripts/templates',
					ext: '.js',
				}],
			},
		},
		modernizr: {
			devFile: '<%= build.app %>/bower_components/modernizr/modernizr.js',
			outputFile: '<%= build.dist %>/<%= build.app %>/scripts/vendor/modernizr.js',
			files: [
				'<%= build.dist %>/<%= build.app %>/scripts/{,*/}*.js',
				'<%= build.dist %>/<%= build.app %>/styles/{,*/}*.css',
				'!<%= build.dist %>/<%= build.app %>/scripts/vendor/*'
			],
			uglify: true
		},
		bower: {
			install: {
				options: {
					targetDir: '<%= build.app %>/bower_components',
					layout: 'byComponent',
					install: true,
					verbose: false,
					cleanTargetDir: false,
					cleanBowerDir: false,
					bowerOptions: {}
				}
			},
			options: {
				exclude: ['modernizr'],
			},
			all: {
				rjsConfig: '<%= build.app %>/scripts/main.js'
			}
		},
		requirejs: {
			all: {
				options: {
					baseUrl: 'app/scripts',
					name: 'main',
					mainConfigFile: 'app/scripts/config.js',
					//uglify2: {} // https://github.com/mishoo/UglifyJS2
					optimize: 'uglify2',
					// TODO: Figure out how to make sourcemaps work with grunt-usemin
					// https://github.com/yeoman/grunt-usemin/issues/30
					generateSourceMaps: true,
					// required to support SourceMaps
					// http://requirejs.org/docs/errors.html#sourcemapcomments
					preserveLicenseComments: false,
					useStrict: true,
					wrap: true,
				}
			},
			app: {
				options: {
					baseUrl: 'app/scripts',
					name: 'main',
					mainConfigFile: 'app/scripts/config.js',
					//uglify2: {} // https://github.com/mishoo/UglifyJS2
					optimize: 'uglify2',
					// TODO: Figure out how to make sourcemaps work with grunt-usemin
					// https://github.com/yeoman/grunt-usemin/issues/30
					generateSourceMaps: true,
					// required to support SourceMaps
					// http://requirejs.org/docs/errors.html#sourcemapcomments
					preserveLicenseComments: false,
					useStrict: true,
					wrap: true,
				}
			},
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= build.app %>/scripts/**/*.js',
				'!<%= build.app %>/scripts/vendor/*',
				'test/spec/**/*.js',
				'server.js',
				'routes/**/*.js',
				'modules/**/*.js'
			]
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= build.dist %>/<%= build.app %>/scripts/**/*.js',
						'<%= build.dist %>/<%= build.app %>/styles/**/*.css',
						'<%= build.dist %>/<%= build.app %>/images/**/*.{png,jpg,jpeg,gif,webp}',
						'<%= build.dist %>/<%= build.app %>/styles/fonts/**/*.*'
					]
				}
			}
		},
		useminPrepare: {
			options: {
				dest: '<%= build.dist %>/<%= build.app %>'
			},
			html: ['<%= build.app %>/{,*/}*.html', 'views/**/*.jade']
		},
		usemin: {
			options: {
				dirs: ['<%= build.dist %>/<%= build.app %>'],
				basedir: '<%= build.dist %>/<%= build.app %>',
			},
			html: ['<%= build.dist %>/<%= build.app %>/{,*/}*.html', '<%= build.dist %>/views/**/*.jade'],
			css: ['<%= build.dist %>/<%= build.app %>/styles/{,*/}*.css']
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= build.app %>/images',
					src: '**/*.{png,jpg,jpeg}',
					dest: '<%= build.dist %>/<%= build.app %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= build.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= build.dist %>/<%= build.app %>/images'
				}]
			}
		},
		cssmin: {
			// This task is pre-configured if you do not wish to use Usemin
			// blocks for your CSS. By default, the Usemin block from your
			// `index.html` will take care of minification, e.g.
			//
			//     <!-- build:css({.tmp,app}) styles/main.css -->
			//
			// dist: {
			//     files: {
			//         '<%= build.dist %>/<%= build.app %>/styles/main.css': [
			//             '.tmp/styles/{,*/}*.css',
			//             '<%= build.app %>/styles/{,*/}*.css'
			//         ]
			//     }
			// }
		},
		htmlmin: {
			dist: {
				options: {
					/*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
				},
				files: [{
					expand: true,
					cwd: '<%= build.app %>',
					src: '*.html',
					dest: '<%= build.dist %>/<%= build.app %>'
				}]
			}
		},
		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= build.app %>',
					dest: '<%= build.dist %>/<%= build.app %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'images/**/*.{webp,gif}',
						'styles/fonts/{,*/}*.*',
					]
				}, {
					// express server jade views
					expand: true,
					dot: true,
					cwd: 'views',
					dest: '<%= build.dist %>/views/',
					src: '**/*.jade',
				}]
			},
			styles: {
				expand: true,
				dot: true,
				cwd: '<%= build.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			},
		},
		nodemon: {
			dev: {
				options: {
					file: 'server.js',
					args: ['development'],
					nodeArgs: ['--debug'],
					watchedExtensions: [
						'js',
						// This might cause an issue starting the server
						// See: https://github.com/appleYaks/grunt-express-workflow/issues/2
						// 'coffee'
					],
					// nodemon watches the current directory recursively by default
					// watchedFolders: ['.'],
					debug: true,
					delayTime: 1,
					ignoredFiles: nodemonIgnoredFiles,
				}
			},
			nodeInspector: {
				options: {
					file: 'node-inspector.js',
					watchedExtensions: [
						'js',
						// This might cause an issue starting the server
						// See: https://github.com/appleYaks/grunt-express-workflow/issues/2
						// 'coffee'
					],
					exec: 'node-inspector',
					ignoredFiles: nodemonIgnoredFiles,
				},
			},
		},
		concurrent: {
			nodemon: {
				options: {
					logConcurrentOutput: true,
				},
				tasks: [
					'nodemon:nodeInspector',
					'nodemon:dev',
					'watch',
				],
			},
			server: [
				// 'coffee:dist',
				'jshint',
				'compass:server',
				'copy:styles',
				'handlebars:app',
			],
			// test: [
			// 'coffee',
			// 'compass',
			// 'handlebars:app',
			// ],
			dist: [
				// 'coffee',
				'handlebars:app',
				'copy:styles',
				'compass:dist',
				'svgmin',
				'htmlmin'
			]
		},
	});

	grunt.registerTask('build', [
		'clean:dist',
		'concurrent:dist',

		'useminPrepare',

		// Any other requirejs 'sub-projects' can be
		// compiled with 'requirejs:subprojectName'
		'requirejs:app',

		// place after compass:dist in order to
		// ensure compass spritemaps are generated
		// before images are copied over to dist/
		'imagemin',

		'concat',
		'cssmin',
		'uglify',
		'modernizr',
		'copy:dist',

		'rev',
		'usemin',

		// remove sprites folders in dist/images/sprites/
		// in favor of having just the spritesheet files
		'clean:compassSprites',
	]);

	grunt.registerTask('test', [
		'concurrent:server',
	]);

	grunt.registerTask('serve', [
		'concurrent:server',

		'concurrent:nodemon',
	]);

	grunt.registerTask('install', [
		'install-dependencies',
		'bower:install'
	]);

	grunt.registerTask('default', [
		// 'jshint',
		// 'test',
		'build'
	]);

};