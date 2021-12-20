import config from './_config.js'
import del from 'del'

async function clean(done) {
	await del.sync(`${config.views.index.dest}*`)
	done()
}

export default clean