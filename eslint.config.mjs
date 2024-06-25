import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "off",
  },
  overrides: [
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { languageOptions: { globals: globals.browser } },
    // Assuming pluginJs.configs.recommended is an object, it should be spread into the configuration
    // If it's meant to be part of the base config or overrides, adjust accordingly
  ],
};
