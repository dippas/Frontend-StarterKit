//--------- Include references
const paths = require('./_config'),
	del = require('del')


//--------- Clean files
function clean(done) {
	del.sync(`${paths.views.index.dest}*`)
	done()
}

exports.clean = clean