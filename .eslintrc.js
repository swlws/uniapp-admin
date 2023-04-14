// 详细配置教程请参考：http://eslint.cn/docs/user-guide/configuring
module.exports = {
	'plugins': [
		'html'
	],
	// 'extends': [
	//     'eslint:recommended',
	// ],
	'parserOptions': {
		'ecmaVersion': 2020,
		'sourceType': 'module',
		'ecmaFeatures': { 'jsx': true },
		'allowImportExportEverywhere': false
	},
	'rules': {
		'no-alert': 0,
		'eqeqeq': ['error', 'always'], // 用强等于做判断
		'semi': ['error', 'never'], // 结尾不分号
		'no-multi-spaces': 'error',
		'quotes': ['error', 'single'], // 使用单引号
		'arrow-parens': ['error', 'as-needed'], // 简略箭头函数
		'object-curly-newline': ['error', { 'multiline': true }], // 在属性内部或属性之间有换行符，就要求有换行符
		'object-curly-spacing': ['error', 'always'] // 要求花括号内有空格 (除了 {})
	}
}

