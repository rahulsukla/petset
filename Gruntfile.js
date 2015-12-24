'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Generate template file
    ngtemplates: {
      options: {
        module: 'petdom.templates',
        standalone: true
      },
      app: {
        cwd: '../',
        src: 'petset/app/**/*.html',
        dest: 'app/templates.generated.js'
      }
    },

    // Set the version
    replace: {
      development: {
        files: {
          '../templates/index_dev.html': 'index_template.html'
        },
        options: {
          patterns: [{
            match: 'BASE_URL',
            replacement: ''
          }]
        }
      },
      production: {
        files: {
          '../templates/index.html': 'index_template.html'
        },
        options: {
          patterns: [{
            match: 'BASE_URL',
            replacement: ''
          }]
        }
      }
    },

    // Compile LESS
    less: {
      dev: {
        options: {
          sourceMap: true,
          outputStyle: 'expanded',
          sourceComments: true
        },
        files: [{
          expand: true,
          cwd: 'app/less',
          src: ['*.less'],
          dest: 'app/css',
          ext: '.css'
        }]
      }
    },

    // Postprocess CSS
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 1 version, last 3 Chrome versions, last 3 Firefox versions, Explorer >= 10, Safari >= 7'})
        ]
      },
      dev: {
        src: 'app/css/*.css'
      }
    },

    // Run tests
    karma: {
      single: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
      continuous: {
        configFile: 'karma.conf.js'
      }
    },

    // Run jshint
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        expr: true,
        latedef: 'nofunc',
        onevar: true,
        noarg: true,
        node: true,
        trailing: true,
        undef: true,
        unused: true,
        jasmine: true,
        strict: true,
        predef: ['inject', 'installPromiseMatchers'],
        globals: {
          angular: false,
          window: false
        }
      },
      all: ['Gruntfile.js', 'app/**/*.js']
    },

    // Build documentation
    ngdocs: {
      all: {
        title: 'Front End Documentation',
        src: ['app/**/*.js', 'app/**/*.ngdoc']
      }
    },

    // Server to view documentation
    connect: {
      options: {
        port: 9000,
      },
      docs: {
        options: {
          base: 'docs'
        }
      }
    },

    // Tasks to compile code for production
    clean: ['compiled_assets'],

    filerev: {
      compiled: {
        expand: true,
        cwd: '..',
        src: 'static/compiled_assets/*',
        dest: '..'
      }
    },

    useminPrepare: {
      html: '../templates/index.html',
      options: {
        root: '..',
        dest: '..'
      }
    },

    usemin: {
      html: '../templates/index.html',
      options: {
        blockReplacements: {
          css: function (block) {
            var media = block.media ? ' media="' + block.media + '"' : '';

            if (grunt.filerev.summary[block.dest]) {
              return '<link rel="stylesheet" href="' + grunt.filerev.summary[block.dest] + '"' + media + '>';
            } else if (grunt.filerev.summary['../' + block.dest]) {
              return '<link rel="stylesheet" href="' + grunt.filerev.summary['../' + block.dest].substr(3) + '"' + media + '>';
            } else {
              return '<link rel="stylesheet" href="' + block.dest +'"' + media + '>';
            }
          },
          js: function (block) {
            if (grunt.filerev.summary[block.dest]) {
              return '<script src="' + grunt.filerev.summary[block.dest] + '"></script>';
            } else if (grunt.filerev.summary['../' + block.dest]) {
              return '<script src="' + grunt.filerev.summary['../' + block.dest].substr(3) + '"></script>';
            } else {
              return '<script src="' + block.dest +'"></script>';
            }
          }
        }
      }
    },

    // Watch task, to run other tasks on file modifications
    watch: {
      less: {
        files: 'app/**/*.less',
        tasks: ['less', 'postcss']
      },
      livereload: {
        files: 'app/css/**/*.css',
        options: {
          livereload: true
        }
      },
      docs: {
        files: ['app/**/*.js', 'app/**/*.ngdoc'],
        tasks: ['ngdocs']
      },
      html: {
        files: ['index_template.html', 'app/**/*.html'],
        tasks: ['build-html:development']
      }
    }
  });

  grunt.registerTask('build-html', ['ngtemplates', 'replace']);

  grunt.registerTask('build-html:development', ['ngtemplates', 'replace:development']);

  grunt.registerTask('css', ['less', 'postcss']);

  grunt.registerTask('serve:docs', ['connect:docs:keepalive']);

  grunt.registerTask('test', ['jshint', 'karma:single']);
  grunt.registerTask('test:start', ['karma:continuous']);

  grunt.registerTask('compile', [
    'clean',
    'build-html',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('build', ['css', 'ngdocs', 'compile']);

  grunt.registerTask('default', ['test', 'build']);
};
