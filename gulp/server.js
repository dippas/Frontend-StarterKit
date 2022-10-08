import gulp from 'gulp';
import { config } from './_config.js';
import browserSync from 'browser-sync';
import data from './data.js';
import html from './html.js';
import images from './images.js';
import scripts from './scripts.js';
import styles from './styles.js';

const { watch, series } = gulp;

//--------- Browser sync - local Server
const localServer = done => {
  browserSync.create();
  browserSync.init({
    snippetOptions: {
      rule: {
        match: /<\/body>/i,
        fn: (snippet, match) => `${snippet}${match}`
      }
    },
    port: 9000,
    ui: false,
    notify: false,
    open: false,
    server: 'dist'
  });
  done();
};

//--------- Reload browser Sync
const reload = done => {
  browserSync.reload();
  done();
};

//--------- Watch
const watchAssets = done => {
  watch(config.styles.app.watch, series(styles, reload));
  watch(config.scripts.app.watch, series(scripts, reload));
  watch(config.views.pug.watch, series(html, reload));
  watch(config.images.watch, series(images, reload));
  watch(config.data.src, series(data, html, reload));
  done();
};

const server = series(localServer, watchAssets);

export default server;
