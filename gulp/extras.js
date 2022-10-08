import gulp from 'gulp';
import { config } from './_config.js';

const { src, dest, series, lastRun } = gulp;

const fonts = () => src(config.fonts.src, { since: lastRun(fonts) }).pipe(dest(config.fonts.dest));
const json = () => src(config.json.src, { since: lastRun(json) }).pipe(dest(config.json.dest));
const pdfs = () => src(config.pdfs.src, { since: lastRun(pdfs) }).pipe(dest(config.pdfs.dest));
const videos = () =>
  src(config.videos.src, { since: lastRun(videos) }).pipe(dest(config.videos.dest));

const extras = series(fonts, json, pdfs, videos);

export default extras;
