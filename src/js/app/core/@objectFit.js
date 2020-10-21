const objectFit = {

	events() {
		if ('objectFit' in document.documentElement.style === false) {
			document.addEventListener('DOMContentLoaded', () => {
				document.querySelectorAll('img[data-object-fit]').forEach(image => {
					(image.runtimeStyle || image.style).background = `url("${image.src}") no-repeat 50%/${image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit')}`
					image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${image.width}' height='${image.height}'%3E%3C/svg%3E`
				})
			})
		}
	},

	init() {
		this.events()
	}
}

objectFit.init()