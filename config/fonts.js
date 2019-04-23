module.exports = {
	formats: 'local woff2',
	display: "swap",
	custom: {
		"Montserrat": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/montserrat-light.woff2",
						}
					},
					400: {
						url: {
							woff: "../fonts/montserrat-regular.woff2",
						}
					},
					500: {
						url: {
							woff: "../fonts/montserrat-medium.woff2",
						}
					},
					900: {
						url: {
							woff: "../fonts/montserrat-bold.woff2",
						}
					},
				}
			}
		},

	}
}