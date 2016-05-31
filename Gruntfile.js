module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/style.css' : 'bower_components/foundation-sites/scss/foundation.scss',
                    'css/style.css' : 'bower_components/motion-ui/motion-ui.scss'

              }
            }
        },
        watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};

