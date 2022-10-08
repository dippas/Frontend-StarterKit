import gulp from 'gulp';
import { config } from './_config.js';
import plumber from 'gulp-plumber';
import fs from 'graceful-fs';
import pug from 'gulp-pug';
import data from 'gulp-data';

const { src, dest, series } = gulp;

const styleguide = () =>
  src(config.views.index.src)
    .pipe(plumber())
    .pipe(data(() => JSON.parse(fs.readFileSync(`${config.data.temp}${config.data.file}`))))
    .pipe(pug({ pretty: true, basedir: 'src' }))
    .pipe(dest(config.views.index.dest));

const views = () =>
  src(config.views.pug.src)
    .pipe(plumber())
    .pipe(data(() => JSON.parse(fs.readFileSync(`${config.data.temp}${config.data.file}`))))
    .pipe(pug({ pretty: true, basedir: 'src' }))
    .pipe(dest(config.views.pug.dest));

const templates = () =>
  src(config.views.pug.templates)
    .pipe(plumber())
    .pipe(data(() => JSON.parse(fs.readFileSync(`${config.data.temp}${config.data.file}`))))
    .pipe(pug({ pretty: true, basedir: 'src' }))
    .pipe(dest(`${config.views.pug.dest}/templates`));

const html = series(views, templates, styleguide);

export default html;
