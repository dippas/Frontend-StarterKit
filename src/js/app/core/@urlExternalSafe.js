const url = {
	el: {
		doc: document,
		linkToNewTab: document.querySelectorAll('a[target="_blank"]')
	},

	fxFixUrlExternal() {
		this.el.linkToNewTab.forEach(el => el.setAttribute('rel', 'noopener noreferrer'))
	},

	init() {
		this.fxFixUrlExternal()
	}
}

url.init()