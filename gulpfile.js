let gulp = require('gulp');

function task (cb) {
    console.log('First task');
    cb();
}

exports.default = task;