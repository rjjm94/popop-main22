var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sitemap = require('gulp-sitemap');

// Lint Task
function lint() {
    return gulp.src('./src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

// Sitemap Task
function generateSitemap() {
    return gulp.src('src/**/*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'http://www.yoursite.com' // replace with your site's URL
        }))
        .pipe(gulp.dest('./dist'));
}

exports.lint = lint;
exports.generateSitemap = generateSitemap;

// Default Task
exports.default = gulp.series(lint, generateSitemap);
