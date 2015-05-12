module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            options: {
              style: 'compact'
            },
            files: {
              'css/styles.css': 'css/styles.scss'
            }
          }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    base: '.',
                    open: {
                        target: 'http://localhost:9001',
                        appname: 'open'
                    }
                }
            }
        },
        jshint: {
            all: ['src/*'],
            options: {
                node: true,
            }
        },
        watch: {
            markup: {
                files: ['index.html'],
                tasks: [],
                options: {
                    livereload: true 
                }
            },
            js: {
                files: ['js/*'],
                tasks: [],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['css/styles.scss','css/sass/*'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('dev', ['sass','connect','watch']);
    grunt.registerTask('server', ['connect','watch']);

};
