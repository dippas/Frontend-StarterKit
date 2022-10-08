import gulp from 'gulp';
import { config } from './_config.js';
import path from 'path';
import merge from 'gulp-merge-json';

const { src, dest } = gulp;

const data = () =>
  src(config.data.src)
    .pipe(
      merge({
        fileName: config.data.file,
        edit: (json, file) => {
          const filename = path.basename(file.path),
            primaryKey = filename.replace(path.extname(filename), '');

          const data = {};
          data[primaryKey] = json;

          return data;
        }
      })
    )
    .pipe(dest(config.data.temp));

export default data;
