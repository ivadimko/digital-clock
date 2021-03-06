module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
    ],
  "rules": {
    "no-param-reassign": 0,
    "no-new": 0,
    "import/no-unresolved": "off",
    "import/extensions": [ 0, "always" ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  }
};