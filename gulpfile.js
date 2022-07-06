const gulp = require('gulp');
const {src, dest, series, parallel, watch} = require('gulp');
const minify = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const autoprefix = require('gulp-autoprefixer');
const sync = require('browser-sync').create();

function task () {
    return src('style.scss')
    .pipe(sass())
    .pipe(autoprefix())
    // .pipe(minify())
    .pipe(dest('dist'));
}

exports.default = function() {
    watch('style.scss', { events: 'all' }, task);
};