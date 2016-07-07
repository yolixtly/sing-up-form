var gulp = require('gulp');

//dependencies

var connect = require('gulp-connect');
var less = require('gulp-less');
var clean = require('gulp-clean');


// paths 

paths = {
	stylesFolder : './app/style/',
	less : './app/style/*.less',
	css : './app/style/*.css',
	scriptsFolder : './app/script/',
	scripts : ['./app/scripts/**/*.js', '!./app/scripts/**/*Spec.js'],
	viewsFolder : './app/views/',
	views : './app/views/*.html',
	images : './app/assets/*.{png,gif,jpg}',
	index : './app/index.html',
	build : 'build/',
	buildStyles : './build/styles/',
	buildScripts : './build/scripts/',
	buildViews : './build/views/',
	buildImages : './build/assets/',
};

gulp.task('watch', ['less', 'index', 'scripts', 'views', 'images'], function(){
	gulp.watch(paths.less, ['less']);
	gulp.watch(paths.index, ['index']);
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.views, ['views']);
	gulp.watch(paths.images, ['images']);
});

gulp.task('connect', ['watch'], function(){
	connect.server({
		root: './build',
		livereload: true
	});
});

gulp.task('clean', function(){
	return gulp.src(paths.build, {read: false})
	.pipe(clean());
});

gulp.task('images', function(){
	gulp.src(paths.images)
	.pipe(gulp.dest(paths.buildImages));
});

gulp.task('views', function(){
	gulp.src(paths.views)
	.pipe(gulp.dest(paths.buildViews))
	.pipe(connect.reload());
});

gulp.task('scripts', function(){
	gulp.src(paths.scripts)
	.pipe(gulp.dest(paths.buildScripts))
	.pipe(connect.reload());
});

gulp.task('index', function(){
	gulp.src(paths.index)
	.pipe(gulp.dest(paths.build))
	.pipe(connect.reload());
});

gulp.task('less', function(){
	gulp.src(paths.less)
	.pipe(less())
	.pipe(gulp.dest(paths.buildStyles))
	.pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);


