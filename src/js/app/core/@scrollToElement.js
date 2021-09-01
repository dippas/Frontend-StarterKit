const scrollToElement = {
	el: {
		btnScroll: document.querySelectorAll('.js-scrollto'),
		header: document.querySelector('.header')
	},

	// polyfilled smooth scrolling for Edge & Safari
	fxSmoothScrollToPolyfill(to, duration) {
		const element = document.scrollingElement || document.documentElement,
			start = element.scrollTop,
			change = to - start,
			startDate = +new Date()

		// t = current time b = start value c = change in value d = duration
		const easeInOutQuad = (t, b, c, d) => {
			t /= d / 2
			if (t < 1) return c / 2 * t * t + b
			t--
			return -c / 2 * (t * (t - 2) - 1) + b
		}

		const animateScroll = () => {
			const currentDate = +new Date(),
				currentTime = currentDate - startDate

			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration))
			currentTime < duration ? requestAnimationFrame(animateScroll) : element.scrollTop = to

		}
		animateScroll()
	},

	fxScrollTo(e) {
		e.preventDefault()
		const buttonScrollTo = e.currentTarget,
			target = document.getElementById(buttonScrollTo.dataset.scroll),
			headerHeight = this.el.header.offsetHeight,
			supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style

		if (target) {
			if (supportsNativeSmoothScroll)
				window.scroll({
					behavior: 'smooth',
					top: target.offsetTop - (this.el.header ? headerHeight : 0),
					left: 0
				})

			else
				this.fxSmoothScrollToPolyfill(target.offsetTop - (this.el.header ? headerHeight : 0), 1000)
		}
	},

	events() {
		for (const button of this.el.btnScroll)
			button.addEventListener('click', e => this.fxScrollTo(e))
	},

	init() {
		this.events()
	}
}

scrollToElement.init()