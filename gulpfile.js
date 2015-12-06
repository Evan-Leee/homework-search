var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function() {
  nodemon({
      script: './bin/www',
      ext: 'jade js sql json',
      ignore: ['public/*']
    })
    .on('restart', function() {
      console.log('restarted!');
    });

});