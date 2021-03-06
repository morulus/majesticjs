module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "../modules/core/main.css": "./less/main.less"
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
          '../dist/brahma.min.js': ['../dist/brahma.js']
        }
      }
    },
    snipper: {
      development: {
        files: {
          '../dist/': ['./scripts/brahma/brahma.js']
        }
      }
    },
    increase: {
      tick: { // 
          degree: 3,
          json:  '../bower.json',
          report: {'../UPDATES.md':'## Versions'}
      },
      model: {
          degree: 2,
          json:  '../bower.json',
          report: {'../UPDATES.md':'## Versions'}
      },
      version: {
          degree: 1,
          json:  '../bower.json',
          report: {'../UPDATES.md':'## Versions'}
      }
    },
    watch: {
      brahma: {
        files: ['./scripts/**/*.js'], // which files to watch
        tasks: ['snipper','uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-snipper');
  grunt.loadNpmTasks('grunt-increase');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['snipper', 'uglify', 'watch']);
  grunt.registerTask('up-tick', ['increase:tick']);
  grunt.registerTask('up-model', ['increase:model']);
  grunt.registerTask('up-version', ['increase:version']);
};