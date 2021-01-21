//--------- Include references
const { src, dest } = require('gulp'),
	paths = require('./_config'),
	path = require('path'),
	merge = require('gulp-merge-json'),
	lec = require('gulp-line-ending-corrector')

//---------  pug from json
function data() {
	return src(paths.data.src)
		.pipe(merge({
			fileName: paths.data.file,
			edit: (json, file) => {
				// Extract the filename and strip the extension
				let filename = path.basename(file.path),
					primaryKey = filename.replace(path.extname(filename), '')

				// Set the filename as the primary key for our JSON data
				const data = {}
				data[primaryKey] = json

				return data
			}
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.data.temp))
}

exports.data = data