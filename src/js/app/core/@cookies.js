/* eslint-disable no-undef */

/* generate clientId hashed */
const cyrb53 = (str, seed = 0) => {
	let h1 = 0xdeadbeef ^ seed,
		h2 = 0x41c6ce57 ^ seed
	
	for (let i = 0, ch; i < str.length; i++) {
		ch = str.charCodeAt(i)
		h1 = Math.imul(h1 ^ ch, 2654435761)
		h2 = Math.imul(h2 ^ ch, 1597334677)
	}
	
	h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909)
	h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909)
	
	return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}

const clientIP = '127.0.0.1', // replace to user's IP
	validityInterval = Math.round(new Date() / 1000 / 3600 / 24 / 4),
	clientIDSource = `${clientIP};${window.location.host};${navigator.userAgent};${navigator.language};${validityInterval}`,
	clientIDHashed = cyrb53(clientIDSource).toString(16)

//initialize plugin with default options
// const myCookieBar = new FeverCookieBar()

//initialize plugin with user options
const myCookieBarWithOptions = new FeverCookieBar({
	layout: {
		overlay: true, // true or false
		color: {
			primary: '#f60',
			secondary: '#000'
		},
		borderRadius: 10,
		bar: {
			position: 'bottom', //bottom or top
			text: 'By continuing to browse or by clicking "Accept All Cookies", you agree to the storing of first and third-party cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts',
			textColor: 'white', // white or black only
			link: {
				text: 'Cookie Privacy',
				target: '_blank',
				url: 'https://gdpr-info.eu/'
			},
			labels: {
				acceptAll: 'Accept all cookies',
				rejectAll: 'I reject',
				settings: 'Cookie Settings'
			}
		}
	},
	modal: {
		title: 'Privacy Preference Center',
		logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNTAgODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1MCA4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNEQ0E5OEI7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDI2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojRENBOThCO30KCS5zdDJ7ZmlsbDojQjU3OTU3O30KPC9zdHlsZT4KPGc+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI2Ni45IiBjeT0iNDAiIHI9IjEwIi8+Cgk8Zz4KCQk8cGF0aCBkPSJNMjcsNTBjLTIuOSwwLTUuNC0xLTcuMy0yLjljLTEuOS0xLjktMi45LTQuNC0yLjktNy4zYzAtMi45LDEtNS4zLDIuOS03LjNjMS45LTEuOSw0LjMtMi45LDcuMy0yLjkKCQkJYzEuOCwwLDMuNCwwLjQsNC45LDEuM2MxLjUsMC44LDIuNywyLDMuNSwzLjRsLTQuMywyLjVjLTAuNC0wLjctMC45LTEuMi0xLjctMS42Yy0wLjctMC40LTEuNi0wLjYtMi41LTAuNgoJCQljLTEuNiwwLTIuOCwwLjUtMy44LDEuNXMtMS40LDIuMy0xLjQsMy44czAuNSwyLjksMS40LDMuOGMxLDEsMi4yLDEuNSwzLjgsMS41YzAuOSwwLDEuNy0wLjIsMi41LTAuNmMwLjctMC40LDEuMy0xLDEuNy0xLjcKCQkJbDQuMywyLjVjLTAuOSwxLjQtMiwyLjYtMy41LDMuNFMyOC44LDUwLDI3LDUweiIvPgoJCTxwYXRoIGQ9Ik05NC41LDQ5LjZoLTUuNmwtNS42LTguN3Y4LjdoLTVWMzAuMWg1djguMmw1LjMtOC4yaDUuNkw4OCwzOS42TDk0LjUsNDkuNnoiLz4KCQk8cGF0aCBkPSJNOTUuOSwzMC4xaDV2MTkuNWgtNVYzMC4xeiIvPgoJCTxwYXRoIGQ9Ik0xMDguOSw0NC45aDcuNXY0LjdoLTEyLjVWMzAuMWgxMi40djQuNmgtNy40djIuN2g2LjdWNDJoLTYuN1Y0NC45eiIvPgoJCTxwYXRoIGQ9Ik0xMjUuOCw1MGMtMi4xLDAtMy44LTAuNC01LjEtMS4zYy0xLjQtMC45LTIuMy0yLjEtMi44LTMuNWw0LjMtMi41YzAuNywxLjcsMiwyLjYsMy44LDIuNmMxLjUsMCwyLjMtMC40LDIuMy0xLjMKCQkJYzAtMC42LTAuNC0xLTEuMy0xLjRjLTAuNC0wLjItMS4yLTAuNC0yLjQtMC44Yy0xLjgtMC41LTMuMi0xLjItNC4yLTIuMmMtMS0wLjktMS42LTIuMi0xLjYtMy45YzAtMS44LDAuNi0zLjMsMS45LTQuNAoJCQljMS4zLTEuMSwyLjktMS43LDQuOC0xLjdjMS42LDAsMy4xLDAuNCw0LjMsMS4xYzEuMywwLjgsMi4yLDEuOSwyLjksMy4zbC00LjIsMi40Yy0wLjYtMS40LTEuNi0yLjItMy0yLjJjLTAuNiwwLTEsMC4xLTEuMywwLjQKCQkJYy0wLjMsMC4yLTAuNSwwLjYtMC41LDAuOWMwLDAuNCwwLjIsMC44LDAuNywxLjFjMC41LDAuMywxLjMsMC42LDIuNywxYzAuOSwwLjMsMS43LDAuNiwyLjMsMC44YzAuNiwwLjIsMS4yLDAuNSwxLjksMQoJCQljMC43LDAuNSwxLjIsMSwxLjUsMS43YzAuMywwLjcsMC41LDEuNiwwLjUsMi41YzAsMS45LTAuNywzLjQtMiw0LjVDMTI5LjgsNDkuNSwxMjgsNTAsMTI1LjgsNTB6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTUuNiw0MS4xYy0wLjUsNS4xLTQuOCw5LTEwLDljLTUuNiwwLTEwLjEtNC41LTEwLjEtMTAuMWMwLTUuNiw0LjUtMTAuMSwxMC4xLTEwLjFjMC44LDAsMS42LDAuMSwyLjQsMC4zCgkJCWMwLDAuMSwwLDAuMSwwLDAuMmMwLDAuNywwLjMsMS4zLDAuNywxLjdjLTAuNCwwLjQtMC43LDEtMC43LDEuN2MwLDEuMywxLDIuNCwyLjMsMi40YzAsMC4xLDAsMC4zLDAsMC40YzAsMS4zLDEuMSwyLjQsMi40LDIuNAoJCQljMC4zLDAsMC41LDAsMC43LTAuMUM1My42LDQwLjEsNTQuNSw0MC45LDU1LjYsNDEuMXoiLz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTQzLjUsNDEuNmMwLDEuMS0wLjksMi4xLTIuMSwyLjFjLTEuMSwwLTIuMS0wLjktMi4xLTIuMWMwLTEuMSwwLjktMi4xLDIuMS0yLjEKCQkJCUM0Mi42LDM5LjUsNDMuNSw0MC40LDQzLjUsNDEuNnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTQ5LjYsNDQuMWMwLDAuOC0wLjYsMS40LTEuNCwxLjRjLTAuOCwwLTEuNC0wLjYtMS40LTEuNGMwLTAuOCwwLjYtMS40LDEuNC0xLjQKCQkJCUM0OSw0Mi43LDQ5LjYsNDMuMyw0OS42LDQ0LjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00NiwzNi4yYy0wLjMtMC4zLTAuOC0wLjMtMS4xLDBjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWMwLjMsMC4zLDAuOCwwLjMsMS4xLDBDNDYuMywzNyw0Ni4zLDM2LjUsNDYsMzYuMnoiCgkJCQkvPgoJCTwvZz4KCQk8cGF0aCBkPSJNNTUuOSw0MC44Yy0wLjEtMC4xLTAuMi0wLjEtMC4zLTAuMWMtMC45LTAuMS0xLjctMC44LTEuOC0xLjdjMC0wLjEtMC4xLTAuMi0wLjItMC4zYy0wLjEtMC4xLTAuMi0wLjEtMC4zLDAKCQkJYy0wLjIsMC4xLTAuNCwwLjEtMC42LDAuMWMtMS4xLDAtMi0wLjktMi0yYzAtMC4xLDAtMC4yLDAtMC4zYzAtMC4xLDAtMC4yLTAuMS0wLjNjLTAuMS0wLjEtMC4yLTAuMS0wLjMtMC4yCgkJCWMtMS4xLTAuMS0xLjktMC45LTEuOS0yYzAtMC41LDAuMi0xLDAuNi0xLjRjMC4yLTAuMiwwLjItMC40LDAtMC42Yy0wLjQtMC40LTAuNi0wLjktMC42LTEuNGMwLDAsMC0wLjEsMC0wLjEKCQkJYzAtMC4yLTAuMS0wLjQtMC4zLTAuNGMtMC44LTAuMi0xLjctMC4zLTIuNS0wLjNjLTIuOCwwLTUuNCwxLjEtNy40LDMuMWMtMiwyLTMuMSw0LjYtMy4xLDcuNGMwLDIuOCwxLjEsNS40LDMuMSw3LjQKCQkJYzIsMiw0LjYsMy4xLDcuNCwzLjFjMS40LDAsMi44LTAuMyw0LjEtMC45YzAuMi0wLjEsMC4zLTAuMywwLjItMC41Yy0wLjEtMC4yLTAuMy0wLjMtMC41LTAuMmMtMS4yLDAuNS0yLjUsMC44LTMuOCwwLjgKCQkJYy0yLjYsMC01LTEtNi44LTIuOEMzNyw0NSwzNiw0Mi42LDM2LDQwYzAtMi42LDEtNSwyLjgtNi44YzEuOC0xLjgsNC4yLTIuOCw2LjgtMi44YzAuNywwLDEuMywwLjEsMiwwLjJjMCwwLjYsMC4yLDEuMSwwLjYsMS41CgkJCWMtMC40LDAuNS0wLjYsMS4xLTAuNiwxLjdjMCwxLjQsMSwyLjUsMi4zLDIuOGMwLDAsMCwwLDAsMGMwLDEuNiwxLjMsMi44LDIuOCwyLjhjMC4xLDAsMC4zLDAsMC40LDBjMC4zLDEsMSwxLjcsMiwxLjkKCQkJYy0wLjMsMi4yLTEuNCw0LjItMyw1LjdjLTAuMiwwLjItMC4yLDAuNCwwLDAuNmMwLjIsMC4yLDAuNCwwLjIsMC42LDBjMS45LTEuNywzLTQuMSwzLjMtNi42QzU2LDQxLDU2LDQwLjksNTUuOSw0MC44eiIvPgoJCTxwYXRoIGQ9Ik0zOSw0MS42YzAsMS40LDEuMSwyLjUsMi41LDIuNWMxLjQsMCwyLjUtMS4xLDIuNS0yLjVjMC0xLjQtMS4xLTIuNS0yLjUtMi41QzQwLjEsMzkuMSwzOSw0MC4yLDM5LDQxLjZ6IE00MS41LDM5LjkKCQkJYzAuOSwwLDEuNywwLjcsMS43LDEuN2MwLDAuOS0wLjcsMS43LTEuNywxLjdjLTAuOSwwLTEuNy0wLjctMS43LTEuN0MzOS44LDQwLjcsNDAuNiwzOS45LDQxLjUsMzkuOXoiLz4KCQk8cGF0aCBkPSJNNDguMiw0NS45YzEsMCwxLjgtMC44LDEuOC0xLjhjMC0xLTAuOC0xLjgtMS44LTEuOGMtMSwwLTEuOCwwLjgtMS44LDEuOEM0Ni4zLDQ1LjEsNDcuMiw0NS45LDQ4LjIsNDUuOXogTTQ4LjIsNDMuMQoJCQljMC42LDAsMSwwLjUsMSwxcy0wLjUsMS0xLDFjLTAuNiwwLTEtMC41LTEtMVM0Ny42LDQzLjEsNDguMiw0My4xeiIvPgoJCTxwYXRoIGQ9Ik00Ni4zLDM3LjZjMC41LTAuNSwwLjUtMS4yLDAtMS43cy0xLjItMC41LTEuNywwcy0wLjUsMS4yLDAsMS43YzAuMiwwLjIsMC41LDAuNCwwLjksMC40QzQ1LjcsMzgsNDYuMSwzNy45LDQ2LjMsMzcuNnoKCQkJIE00NS4xLDM2LjVjMC4yLTAuMiwwLjQtMC4yLDAuNiwwczAuMiwwLjQsMCwwLjZjLTAuMiwwLjItMC40LDAuMi0wLjYsMEM0NSwzNi45LDQ1LDM2LjYsNDUuMSwzNi41eiIvPgoJCTxwYXRoIGQ9Ik00MC44LDM1LjVjMC0wLjUsMC40LTAuOSwwLjktMC45YzAuMiwwLDAuNC0wLjIsMC40LTAuNGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTEsMC0xLjgsMC44LTEuOCwxLjgKCQkJYzAsMC4yLDAuMiwwLjQsMC40LDAuNEM0MC42LDM1LjksNDAuOCwzNS43LDQwLjgsMzUuNXoiLz4KCQk8cGF0aCBkPSJNNTIuNCw0My4yYzAuMy0wLjMsMC40LTAuNiwwLjQtMWMwLTAuNC0wLjEtMC43LTAuNC0xYy0wLjItMC4yLTAuNC0wLjItMC42LDBjLTAuMiwwLjItMC4yLDAuNCwwLDAuNgoJCQljMC4xLDAuMSwwLjIsMC4zLDAuMiwwLjRzLTAuMSwwLjMtMC4yLDAuNGMtMC4yLDAuMi0wLjIsMC40LDAsMC42YzAuMSwwLjEsMC4yLDAuMSwwLjMsMC4xUzUyLjMsNDMuMyw1Mi40LDQzLjJ6Ii8+CgkJPHBhdGggZD0iTTQzLjQsNDcuMmMwLjgsMCwxLjQtMC42LDEuNC0xLjRjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjRjMCwwLjMtMC4zLDAuNi0wLjYsMC42CgkJCWMtMC4yLDAtMC40LDAuMi0wLjQsMC40QzQzLDQ3LDQzLjIsNDcuMiw0My40LDQ3LjJ6Ii8+CgkJPHBhdGggZD0iTTUxLjUsNDguM2MtMC4xLTAuMi0wLjItMC4zLTAuNC0wLjNjLTAuMiwwLTAuMywwLjEtMC40LDAuM2MwLDAuMiwwLDAuMywwLjIsMC40YzAuMSwwLjEsMC4zLDAuMSwwLjUsMAoJCQlDNTEuNSw0OC42LDUxLjUsNDguNCw1MS41LDQ4LjN6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc0LjEsMzYuNGMwLDEuMS0wLjksMi4xLTIuMSwyLjFjLTEuMSwwLTIuMS0wLjktMi4xLTIuMWMwLTEuMSwwLjktMi4xLDIuMS0yLjEKCQkJCUM3My4yLDM0LjMsNzQuMSwzNS4yLDc0LjEsMzYuNHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjgsNDAuN2MwLDAuOC0wLjYsMS40LTEuNCwxLjRjLTAuOCwwLTEuNC0wLjYtMS40LTEuNGMwLTAuOCwwLjYtMS40LDEuNC0xLjQKCQkJCUM2OC4yLDM5LjIsNjguOCwzOS45LDY4LjgsNDAuN3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTYxLDQxLjdjLTAuMy0wLjMtMC44LTAuMy0xLjEsMGMtMC4zLDAuMy0wLjMsMC44LDAsMS4xYzAuMywwLjMsMC44LDAuMywxLjEsMEM2MS4zLDQyLjUsNjEuMyw0Miw2MSw0MS43eiIKCQkJCS8+CgkJPC9nPgoJCTxwYXRoIGQ9Ik02OS42LDM2LjRjMCwxLjQsMS4xLDIuNSwyLjUsMi41YzEuNCwwLDIuNS0xLjEsMi41LTIuNWMwLTEuNC0xLjEtMi41LTIuNS0yLjVDNzAuNywzMy45LDY5LjYsMzUsNjkuNiwzNi40eiBNNzIsMzQuNwoJCQljMC45LDAsMS43LDAuNywxLjcsMS43YzAsMC45LTAuNywxLjctMS43LDEuN2MtMC45LDAtMS43LTAuNy0xLjctMS43QzcwLjQsMzUuNSw3MS4xLDM0LjcsNzIsMzQuN3oiLz4KCQk8cGF0aCBkPSJNNjcuNCw0Mi41YzEsMCwxLjgtMC44LDEuOC0xLjhjMC0xLTAuOC0xLjgtMS44LTEuOGMtMSwwLTEuOCwwLjgtMS44LDEuOEM2NS41LDQxLjcsNjYuNCw0Mi41LDY3LjQsNDIuNXogTTY3LjQsMzkuNwoJCQljMC42LDAsMSwwLjUsMSwxcy0wLjUsMS0xLDFjLTAuNiwwLTEtMC41LTEtMVM2Ni44LDM5LjcsNjcuNCwzOS43eiIvPgoJCTxwYXRoIGQ9Ik02MS4zLDQzLjJjMC41LTAuNSwwLjUtMS4yLDAtMS43cy0xLjItMC41LTEuNywwcy0wLjUsMS4yLDAsMS43YzAuMiwwLjIsMC41LDAuNCwwLjksMC40QzYwLjcsNDMuNSw2MSw0My40LDYxLjMsNDMuMnoKCQkJIE02MC4xLDQyYzAuMi0wLjIsMC40LTAuMiwwLjYsMHMwLjIsMC40LDAsMC42Yy0wLjIsMC4yLTAuNCwwLjItMC42LDBDNjAsNDIuNCw2MCw0Mi4yLDYwLjEsNDJ6Ii8+CgkJPHBhdGggZD0iTTYyLjEsMzUuNWMwLTAuNSwwLjQtMC45LDAuOS0wLjljMC4yLDAsMC40LTAuMiwwLjQtMC40YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMSwwLTEuOCwwLjgtMS44LDEuOAoJCQljMCwwLjIsMC4yLDAuNCwwLjQsMC40QzYxLjksMzUuOSw2Mi4xLDM1LjcsNjIuMSwzNS41eiIvPgoJCTxwYXRoIGQ9Ik03My43LDQzLjJjMC4zLTAuMywwLjQtMC42LDAuNC0xYzAtMC40LTAuMS0wLjctMC40LTFjLTAuMi0wLjItMC40LTAuMi0wLjYsMGMtMC4yLDAuMi0wLjIsMC40LDAsMC42CgkJCWMwLjEsMC4xLDAuMiwwLjMsMC4yLDAuNHMtMC4xLDAuMy0wLjIsMC40Yy0wLjIsMC4yLTAuMiwwLjQsMCwwLjZjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFTNzMuNiw0My4zLDczLjcsNDMuMnoiLz4KCQk8cGF0aCBkPSJNNjQuOCw0Ny4yYzAuOCwwLDEuNC0wLjYsMS40LTEuNGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNGMwLDAuMy0wLjMsMC42LTAuNiwwLjYKCQkJYy0wLjIsMC0wLjQsMC4yLTAuNCwwLjRDNjQuNCw0Nyw2NC42LDQ3LjIsNjQuOCw0Ny4yeiIvPgoJCTxwYXRoIGQ9Ik03MC44LDQ2LjFjLTAuMS0wLjItMC4yLTAuMy0wLjQtMC4zYy0wLjIsMC0wLjMsMC4xLTAuNCwwLjNjMCwwLjIsMCwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjEsMC41LDAKCQkJQzcwLjgsNDYuNSw3MC44LDQ2LjMsNzAuOCw0Ni4xeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=',
		labels: {
			acceptAll: 'Accept all',
			save: 'Save preferences'
		},
		required: {
			tabs: [{
				id: 'your-privacy',
				title: 'Your Privacy',
				text: 'When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences, your device or used to make the site work as you expect it to. The information does not usually identify you directly, but it can give you a more personalized web experience. You can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, you should know that blocking some types of cookies may impact your experience on the site and the services we are able to offer.',
				label: ''
			},
			{
				id: 'strictly-necessary-cookies',
				title: 'Strictly Necessary Cookies',
				text: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site may not work then.',
				label: 'Always enabled'
			}]
		},
		optional: {
			labels: {
				enabled: 'Enabled',
				disabled: 'Disabled'
			},
			tabs: [{
				id: 'analytics-cookies',
				title: 'analytics cookies',
				text: 'These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site.',
				events: {
					on() {
						console.log('analytics on')
					},

					off() {
						console.log('analytics off')
						myCookieBarWithOptions.expireCookie('_ga')
						myCookieBarWithOptions.expireCookie('_gid')
						myCookieBarWithOptions.expireCookie('_gat')
					},

					pageLoadOn() {
						(function (i, s, o, g, r, a, m) {
							i['GoogleAnalyticsObject'] = r
							i[r] = i[r] || function () {
								(i[r].q = i[r].q || []).push(arguments)
							}, i[r].l = 1 * new Date()
							a = s.createElement(o)
							m = s.getElementsByTagName(o)[0]
							a.async = 1
							a.src = g
							m.parentNode.insertBefore(a, m)
						})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

						ga('create', 'UA-12345', { 'clientId': clientIDHashed })
						ga('set', 'anonymizeIp', true)
						ga('set', 'forceSSL', true)
						ga('send', 'pageview')

						console.log('analytics pageLoadOn')
					},

					pageLoadOff() {						
						(function (i, s, o, g, r, a, m) {
							i['GoogleAnalyticsObject'] = r
							i[r] = i[r] || function () {
								(i[r].q = i[r].q || []).push(arguments)
							}, i[r].l = 1 * new Date()
							a = s.createElement(o)
							m = s.getElementsByTagName(o)[0]
							a.async = 1
							a.src = g
							m.parentNode.insertBefore(a, m)
						})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

						ga('create', 'UA-12345', { 'storage': 'none',  'clientId': clientIDHashed })
						ga('set', 'anonymizeIp', true)
						ga('set', 'forceSSL', true)
						ga('send', 'pageview')
						
						console.log('analytics pageLoadOff')
					}
				}
			},
			{
				id: 'functional-cookies',
				title: 'functional cookies',
				text: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.',
				events: {
					on() {
						console.log('functional on')
					},

					off() {
						console.log('functional off')
					},

					pageLoadOn() {
						console.log('functional pageLoadOn')
					},

					pageLoadOff() {
						console.log('functional pageLoadOff')
					}
				}
			},
			{
				id: 'targetting-cookies',
				title: 'targetting cookies',
				text: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.',
				events: {
					on() {
						console.log('targetting on')
					},

					off() {
						console.log('targetting off')
					},
					
					pageLoadOn() {
						console.log('targetting pageLoadOn')
					},
					
					pageLoadOff() {
						console.log('targetting pageLoadOff')
					}
				}
			}]
		}
	}
})