var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var   connect = require('gulp-connect');


// server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


//css
 
gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("styles/bundle.min.css"))
    .pipe(gulp.dest('app/'))
    .pipe(notify('Done!'))
    .pipe(connect.reload());
});


//HTML
gulp.task('html', function() {
	return gulp.src('app/*.html')
	    .pipe(connect.reload());

})

//watch

gulp.task('watch', function() {
	gulp.watch('css/*css', ['css'])
	 gulp.watch('css/*css', ['css'])

	
	
})

//defoult

gulp.task('default', ['connect', 'html', 'css', 'watch']);