module.exports = function( grunt ) {

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/script.js' ],
          'assets/js/angular.min.js' : [ 'assets/_js/angular.min.js' ],
          'assets/js/teste.js' : [ 'assets/_js/teste.js' ],
        }
      }
    }, // uglify
    
    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : 'assets/_sass/style.sass'
        }
      }
    }, // sass
      
      coffee:{
          compile:{
              files:{
                  'site.js' : 'coffee/site.coffee'
              }
          }
      }, //coffee
      
      watch:{
          options:{
              livereload:true,
          },
          
          sass:{
              files:'assets/_sass/*.sass',
              tasks:'sass'
          },
          uglify:{
              files:'assets/_js/*.js',
              tasks:'uglify'
          },
      }, // watch
      
      express:{
            all:{
                options:{
                    port:9000,
                    hostname:'localhost',
                    bases:['.'],
                    liveload: true
                }
            }
      }
  });


  // Plugins do Grunt
  
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-coffee' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.registerTask( 'default', [ 'coffee','uglify','sass' ] );
  grunt.loadNpmTasks( 'grunt-express' );


  // Tarefas que serão executadas
  grunt.registerTask( 'server', [ 'express', 'watch' ] );       

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};