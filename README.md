# Frontend StarterKit - [Gulp 4, Pug, SCSS, ES6+]

This starterkit allows you to have a quickly start in building your website.

![FS](https://repository-images.githubusercontent.com/306026878/8fb90e00-13da-11eb-9dcc-5e8ab3f4c992)

## Give some love

[![Ko-fi](https://img.shields.io/badge/Ko--fi-F16061?https://img.shields.io/badge/Ko--fi-F16061?style=flat-square&logo=ko-fi&logoColor=white)](https://ko-fi.com/dippas)
[![BuyMeACoffee](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-orange?style=flat-square&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/dippas)
[![Paypal](https://img.shields.io/badge/PayPal-00457C?style=flat-square&logo=paypal)](http://paypal.me/fserpa)

## Table of Contents

- [Status](#status)
- [Changelog](#changelog)
- [Setup](#setup)
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Notes](#notes)
- [Contributing](#contributing)
- [License](#license)

## Status

[![stars](https://img.shields.io/github/stars/dippas/Frontend-StarterKit.svg?style=social)](https://github.com/dippas/Frontend-StarterKit/stargazers)
[![forks](https://img.shields.io/github/forks/dippas/Frontend-StarterKit.svg?style=social)](https://github.com/dippas/Frontend-StarterKit/network)
[![watchers](https://img.shields.io/github/watchers/dippas/Frontend-StarterKit?label=Watchers&style=social)](https://github.com/dippas/Frontend-StarterKit/watchers)

[![release (latest by date)](https://img.shields.io/github/v/release/dippas/Frontend-StarterKit)](https://github.com/dippas/Frontend-StarterKit/releases/latest)
[![issues](https://img.shields.io/github/issues/dippas/Frontend-StarterKit)](https://github.com/dippas/Frontend-StarterKit/issues)
![maintenance](https://img.shields.io/maintenance/yes/2022)
![release date](https://img.shields.io/github/release-date/dippas/Frontend-StarterKit)

## ChangeLog

You can check the changelog [here](https://github.com/dippas/Frontend-StarterKit/releases)

## Setup

- Download Node.js from your favorite browser [here](https://nodejs.org/en/download/)
- Restart your PC (just in case)

## Installation

- Clone this [project](https://github.com/dippas/Frontend-StarterKit/)
- Open the Project with your favorite IDE
- Run the Shell
- In the Shell run the following commands:
  - `pnpm i -g pnpm gulp gulp-cli` (if is your first project using npm and gulp)
  - `pnpm i`
  - `gulp build` to compile files to `dist` folder

## Features

- A live-reloading server with [Browsersync](https://browsersync.io/)
- Automated build process that includes, but is not limited to: SCSS compilation (with Autoprefixer included) and image optimization
- Ability to add 3rd party plugins easily - `gulp/_config.js`
- Minified CSS & JS in dist folder
- SourceMaps for better debugging
- Core JS files includes (e.g.: URL external fix for security issue)
- Code Formatted with [Prettier](https://prettier.io/)
- Compiling HTML files from Pug
- Writing Pug with JSON, to separate logic from content
- Favicons Included
- Styleguide with links for templates/modules
- Cookiebar compliant with EU rules, fully customizable

## Tasks

- `gulp` - Create the local server (BrowserSync) and watch for source files
- `gulp build` - Compiles source files into `dist` folder, also cleans unused files in `dist`

## Project Structure

```html
| .prettierrc | .gitignore | gulpfile.js | LICENSE | package-lock.json |
package.json | README.md | +---dist | | index.html | | | +---assets | | +---css
| | | | styleguide.min.css | | | | styleguide.min.css.map | | | | styles.min.css
| | | | styles.css.min.map | | | | | | | \---vendor | | | vendor.min.css | | |
vendor.min.css.map | | | | | +---img | | | \---favicon | | |
apple-touch-icon-57x57.png | | | apple-touch-icon-72x72.png | | |
apple-touch-icon-114x114.png | | | apple-touch-icon-120x120.png | | |
apple-touch-icon-144x144.png | | | apple-touch-icon-152x152.png | | |
favicon-16x16.png | | | favicon-32x32.png | | | favicon.ico | | |
mstile-144x144.png | | | | | \---js | | +---app | | | app.js | | | app.js.map |
| | | | \---vendor | | vendor.js | | vendor.js.map | | | \---views |
+---skeleton | | | layout.html | | | | | +---footer | | | footer.html | | |
scripts.html | | | | | \---header | | head.html | | header.html | | |
+---styleguide | | footer.html | | header.html | | index.html | | layout.html |
| | \---templates | home.html | \---src | index.pug | +---data | |
styleguide.json | | | \---temp | data.json | +---img | \---favicon | |
apple-touch-icon-57x57.png | | apple-touch-icon-72x72.png | |
apple-touch-icon-114x114.png | | apple-touch-icon-120x120.png | |
apple-touch-icon-144x144.png | | apple-touch-icon-152x152.png | |
favicon-16x16.png | | favicon-32x32.png | | favicon.ico | | mstile-144x144.png |
+---js | \---app | +---core | | @cookies.js | | @outlineAccessibility.js | |
@preloader.js | | @scrollToElement.js | | @urlExternalSafe.js | | | \---general
+---scss | | global.scss | | styleguide.scss | | | +---abstracts | |
_functions.scss | | _mixins.scss | | _placeholders-includes.scss | |
_placeholders.scss | | _variables.scss | | | +---base | | _reset.scss | |
_typography.scss | | | +---layout | | _buttons.scss | | _fonts.scss | |
_footer.scss | | _general.scss | | _header.scss | | _utils.scss | | |
\---styleguide | _styleguide.scss | \---views +---modules +---skeleton | |
layout.pug | | | +---footer | | footer.pug | | scripts.pug | | | \---header |
head.pug | header.pug | +---styleguide | | footer.pug | | header.pug | |
index.pug | | layout.pug | | | \---modules \---templates home.pug
```

## Notes

- Doesn't support Internet Explorer
- [gulp-cli](https://github.com/gulpjs/gulp-cli) must be v2.30+

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[![Pull requests](https://img.shields.io/github/issues-pr/dippas/Frontend-StarterKit)](https://github.com/dippas/Frontend-StarterKit/pulls)

## License

[![MIT](https://img.shields.io/github/license/dippas/Frontend-StarterKit)](https://choosealicense.com/licenses/mit/)
