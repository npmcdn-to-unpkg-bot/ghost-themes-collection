_ = require 'lodash'

module.exports = (grunt)->
  cfg =
    pkg: grunt.file.readJSON('package.json')
    watch:
      sass:
        files: ['assets/sass/*.scss']
        tasks: ['sass:dev']
    livereload:
      files: [
        'assets/css/*.css',
        'assets/js/*.js'
      ]
      options: livereload: true
    sass:
      dev: sassConfig  = 
        files:
          'assets/css/aexmachina.css': 'assets/sass/aexmachina.scss'
        options:
          includePaths: [
            'assets/css',
            '../../../node_modules/ghost/core/client/assets/sass',
            'bower_components/foundation/scss'
          ]
      prod: _.merge({}, sassConfig, options: style: 'compressed')

  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  grunt.initConfig cfg
  grunt.registerTask 'default', 'sass:dev'
