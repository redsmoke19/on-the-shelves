const gulp = require('gulp');
const { argv } = require('yargs');
const fonts = require('./gulp/tasks/fonts');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const serve = require('./gulp/tasks/serve');

const dev = gulp.parallel(
  pug2html,
  styles,
  imageMinify,
  fonts,
);

exports.default = argv.prod
  ? gulp.series(clean, dev)
  : gulp.series(clean, dev, serve);
