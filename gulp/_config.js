import path from 'path';

const __dirname = path.resolve();

export const config = {
  data: {
    src: 'src/data/*.json',
    temp: 'src/data/temp/',
    file: 'data.json'
  },
  scripts: {
    app: {
      src: 'src/js/app/**/*.js',
      watch: 'src/js/**/*'
    },
    dist: {
      app: 'dist/assets/js/app/',
      vendor: 'dist/assets/js/vendor/'
    },
    vendor: [
      //ADD VENDORS HERE - path from Node_modules path
      path.join(__dirname, 'node_modules', 'fever-cookies-plugin', 'dist', 'js', 'cookie.min.js') // USE IF USING COOKIES
    ]
  },
  json: {
    src: 'src/json/*.json',
    dest: 'dist/assets/json/'
  },
  views: {
    pug: {
      src: ['src/views/**/*.pug', '!src/views/templates/*.pug'],
      templates: 'src/views/templates/*.pug',
      watch: 'src/views/**/*',
      dest: 'dist/views'
    },
    index: {
      src: 'src/index.pug',
      watch: 'src/*.pug',
      dest: 'dist/'
    }
  },
  styles: {
    app: {
      src: 'src/scss/global.scss',
      srcSG: 'src/scss/styleguide.scss',
      watch: 'src/scss/**/*.scss'
    },

    dist: {
      dest: 'dist/assets/css/',
      vendor: 'dist/assets/css/vendor/'
    },
    vendor: [
      //ADD VENDORS HERE - path from Node_modules folder
      path.join(__dirname, 'node_modules', 'fever-cookies-plugin', 'dist', 'css', 'cookie.min.css') // USE IF USING COOKIES
    ]
  },
  pdfs: {
    src: 'src/pdf/**/*.pdf',
    watch: 'src/pdf/**/*.pdf',
    dest: 'dist/assets/pdf/'
  },
  videos: {
    src: 'src/video/**/*.{webm,ogg,mp4}',
    watch: 'src/video/**/*.{web,ogg,mp4}',
    dest: 'dist/assets/video/'
  },
  images: {
    src: 'src/img/**/*.{gif,jpg,png,svg,ico}',
    watch: 'src/img/**/*.{gif,jpg,png,svg,ico}',
    dest: 'dist/assets/img/'
  },
  fonts: {
    src: 'src/fonts/**/*.{ttf,otf,woff,woff2,eot}',
    watch: 'src/fonts/**/*.{ttf,otf,woff,woff2,eot}',
    dest: 'dist/assets/fonts/'
  }
};
