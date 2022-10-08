import gulp from 'gulp';
import clean from './gulp/clean.js';
import data from './gulp/data.js';
import extras from './gulp/extras.js';
import html from './gulp/html.js';
import images from './gulp/images.js';
import scripts from './gulp/scripts.js';
import server from './gulp/server.js';
import styles from './gulp/styles.js';

const { series } = gulp;
const dev = series(clean, data, styles, scripts, extras, html, images);

//--------- Create tasks
export const build = dev;
export default server;
