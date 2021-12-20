import gulp from 'gulp'
import config from './_config.js'
import lec from 'gulp-line-ending-corrector'
import path from 'path'
import merge from 'gulp-merge-json'

const { src, dest } = gulp

function data() {
	return src(config.data.src)
		.pipe(merge({
			fileName: config.data.file,
			edit: (json, file) => {
				const filename = path.basename(file.path),
					primaryKey = filename.replace(path.extname(filename), '')

				const data = {}
				data[primaryKey] = json
				
				return data
			}
		}))
		.pipe(lec({ eolc: 'CRLF' }))
		.pipe(dest(config.data.temp))

}

export default data