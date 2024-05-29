import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  ignorePatterns: ["webpack.config.js"],
  overrides: [
    {
      files: ["**/*.js"],
      languageOptions: { globals: globals.browser },
      extends: ["plugin:js/recommended"],
    },
  ],
};