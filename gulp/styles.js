import gulp from 'gulp';
import { config } from './_config.js';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import sassCompiler from 'sass';
import gulpSass from 'gulp-sass';
import postCSS from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

const { src, dest } = gulp;
const sass = gulpSass(sassCompiler);

const coreStyles = (basename, source, dist) =>
  src(source, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(concat(`${basename}.min.css`))
    .pipe(postCSS([autoprefixer()]))
    .pipe(dest(dist, { sourcemaps: '.' }));

const styles = done => {
  coreStyles('vendor', config.styles.vendor, config.styles.dist.vendor);
  coreStyles('styles', config.styles.app.src, config.styles.dist.dest);
  coreStyles('styleguide', config.styles.app.srcSG, config.styles.dist.dest);
  done();
};

export default styles;
