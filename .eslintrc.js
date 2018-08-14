'use strict'

const version = require('./package.json').version

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    mocha: true
  },
  extends: ["plugin:vue/recommended"],
  plugins: [
    'html'
  ],
  rules: {
  },

  overrides: [{
    files: ['lib/rules/*.js'],
    rules: {
      "consistent-docs-description": "error",
      "no-invalid-meta": "error",
      "require-meta-docs-url": ["error", {
        "pattern": `https://github.com/vuejs/eslint-plugin-vue/blob/v${version}/docs/rules/{{name}}.md`
      }]
    }
  }]
}