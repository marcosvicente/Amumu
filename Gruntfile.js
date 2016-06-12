module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/foundation.css' : 'bower_components/foundation-sites/assets/foundation.scss',
                    'css/motion-ui.css' : 'bower_components/motion-ui/motion-ui.scss'
                }
            }
        },


        watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
        concat:{
            dist:{
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/fakeLoader/fakeLoader.js',
                    'bower_components/foundation-sites/dist/foundation.min.js'
                ],
                dest: 'js/scripts.js'
            },
        },

        uglify:{
            scripts:{
                src:['js/scripts.js'],
                dest: 'js/scripts.min.js'
            }
        },
        cssmin :{
            all:{
                src: [
                    'css/**/*.css',
                    'bower_components/normalize-css/normalize.css',
                    'bower_components/fakeLoader/fakeLoader.css'
                ],
                dest: 'css/styles.min.css'
            }
        },
        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'index.html' : 'desenvolvimento.html'
                }
            },
            dev: {
                files: {
                    'index.html': 'desenvolvimento.html'

                }

            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 1
                },
                files: [{
                    expand: true,
                    cwd: 'imagem/',
                    src: ['**/*.png'],
                    dest: 'imagem/'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'imagem/',
                    src: ['**/*.jpg'],
                    dest: 'imagem/'
                }]
            }
        },
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'htmlmin:dist', 'imagemin']);

};

