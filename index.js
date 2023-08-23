module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "prettier"],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  plugins: [
    "prettier",
    "testing-library",
    "react-hooks",
    "import",
  ],
  rules: {
    "no-console": "warn",
    "prettier/prettier": "warn",
    "import/order": ["warn", { "newlines-between": "always" }],
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "(useUpdateBreadcrumbs)" },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      {
        props: "never",
        children: "never",
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-debugging-utils": "warn",
      },
    },
  ]
};
