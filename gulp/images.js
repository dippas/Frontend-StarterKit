import gulp from 'gulp';
import { config } from './_config.js';
import min from 'gulp-imagemin';

const { src, dest, lastRun } = gulp;

const images = () =>
  src(config.images.src, { since: lastRun(images) })
    .pipe(min())
    .pipe(dest(config.images.dest));

export default images;
