const path = require('path');

module.exports = {
	'@': path.resolve(__dirname, '../src'),
	'@scripts': path.resolve(__dirname, '../src/scripts/blocks'),
	'@helpers': path.resolve(__dirname, '../src/scripts/helpers'),
	'@api': path.resolve(__dirname, '../src/scripts/api'),
	'@reducers': path.resolve(__dirname, '../src/redux/reducers'),
	'@components': path.resolve(__dirname, '../src/app/components'),
	'@pages': path.resolve(__dirname, '../src/app/pages'),
	'@UI': path.resolve(__dirname, '../src/app/UI'),
	'@contexts': path.resolve(__dirname, '../src/app/contexts'),
	'@hooks': path.resolve(__dirname, '../src/app/hooks'),
	'@layouts': path.resolve(__dirname, '../src/app/layouts'),
	'@assets': path.resolve(__dirname, '../src/assets'),
	'@images': path.resolve(__dirname, '../src/assets/images'),
	'@icons': path.resolve(__dirname, '../src/assets/icons'),
	'@resources': path.resolve(__dirname, '../src/assets/resources'),
	'@styles': path.resolve(__dirname, '../src/styles'),
}
