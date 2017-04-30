const path = require('path');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: sourcePath,
          src: '*.pug',
          dest: buildPath,
          ext: '.html'
        }]
      }
    },
    sass: {
      options: {
        sourceMap: false,
      },
      dist: {
        files: [{
          expand: true,
          cwd: sourcePath,
          src: '*.scss',
          dest: buildPath,
          ext: '.css'
        }]
      }
    },
    watch: {
      html: {
        files: 'src/index.pug',
        tasks: ['pug']
      },
      css: {
        files: 'src/*.scss',
        tasks: ['sass']
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['pug', 'sass']);
};
