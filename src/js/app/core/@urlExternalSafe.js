const url = {
	el: {
		doc: document,
		linkToNewTab: document.querySelectorAll('a[target="_blank"]')
	},

	events() {
		this.el.linkToNewTab.forEach(el => el.setAttribute('rel', 'noopener noreferrer'))
	},

	init() {
		this.events()
	}
}

url.init()