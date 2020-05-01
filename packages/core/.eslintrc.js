module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "import/prefer-default-export": 0,
    semi: "error",
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    Headers: true,
    Request: true,
    fetch: true,
  },
  parser: "babel-eslint",
};

/*
module.exports = {
  extends: ["eslint:recommended", "prettier"], // extending recommended config and config derived from eslint-config-prettier
  plugins: ["prettier"], // activating esling-plugin-prettier (--fix stuff)
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": [
      // customizing prettier rules (unfortunately not many of them are customizable)
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],
    eqeqeq: ["error", "always"] // adding some custom ESLint rules
  }
};
*/

/*
modules.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    env: {
      node: true,
      es6: true
    },
    experimentalDecorators: true,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "global-require": "off",
    "consistent-return": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": 1,
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: false }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 100
      }
    ]
  },
  plugins: ["prettier"],
  parser: "babel-eslint"
};
*/
