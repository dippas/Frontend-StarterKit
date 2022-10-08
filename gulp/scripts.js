import gulp from 'gulp';
import { config } from './_config.js';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import terser from 'gulp-terser';

const { src, dest } = gulp;

const coreScripts = (basename, source, dist) =>
  src(source, { sourcemaps: true })
    .pipe(plumber())
    .pipe(concat(`${basename}.min.js`))
    .pipe(terser())
    .pipe(dest(dist, { sourcemaps: '.' }));

const scripts = done => {
  coreScripts('vendor', config.scripts.vendor, config.scripts.dist.vendor);
  coreScripts('app', config.scripts.app.src, config.scripts.dist.app);
  done();
};

export default scripts;
