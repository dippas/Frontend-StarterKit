const url = {
	el: {
		linkToNewTab: document.querySelectorAll('a[target="_blank"]')
	},

	fxFixUrlExternal() {
		for (const link of this.el.linkToNewTab)
			link.setAttribute('rel', 'noopener noreferrer')
	},

	init() {
		this.fxFixUrlExternal()
	}
}

url.init()