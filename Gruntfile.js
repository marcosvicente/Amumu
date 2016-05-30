module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
        sass: {
            dist: {
            options: {
                loadPath: ['node_modules/foundation-sites/scss']
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};

