//--------- Include files
const { series } = require('gulp'),
	cleanFile = require('./gulp/clean'),
	dataFile = require('./gulp/data'),
	extrasFile = require('./gulp/extras'),
	htmlFile = require('./gulp/html'),
	imagesFile = require('./gulp/images'),
	scriptsFile = require('./gulp/scripts'),
	serverFile = require('./gulp/server'),
	stylesFile = require('./gulp/styles'),
	dev = series(cleanFile.clean, dataFile.data, stylesFile.styles, scriptsFile.scripts, htmlFile.html, extrasFile.extras, imagesFile.images, scriptsFile.esLinter, stylesFile.sassLinter)

//--------- Create tasks
exports.build = dev
exports.default = serverFile.server