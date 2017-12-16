module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'browser': true,
        'jest': true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
	'space-in-parens': [
            'error',
            'always'
	],
        'object-curly-spacing': [
            'error',
            'always'
        ]
    }
};