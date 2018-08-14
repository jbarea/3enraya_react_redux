module.exports = {
    extends: 'airbnb',
    plugins: ['react', 'jsx-a11y', 'import'],
    env: {
        browser: true,
        node: true,
    },
    globals: {
        require: true,
        document: true,
        window: true,
    },
    settings: {
        'import/no-unresolved': false,
        'import/resolver': {
            alias: {
                map: [
                    ['@styles', './src/styles']
                ],
            },
        },
        'react/destructuring-assignment': false,
    },
    "rules": {
        "import/prefer-default-export": "off",
        "import/no-useless-path-segments": "off",
        "react/prefer-stateless-function": "warn",
        "react/destructuring-assignment": "off",
        "react/jsx-wrap-multilines": "off",
        "react/jsx-indent": "off"
    }
};