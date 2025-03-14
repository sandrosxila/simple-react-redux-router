import js from '@eslint/js'
import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      "indent": [
        "warn",
        2,
        {
          "SwitchCase": 1,
          "ignoredNodes": ["JSXElement"]
        }
      ],
      "quotes": ["warn", "single"],
      "semi": ["warn", "always"],
      "@stylistic/js/object-curly-spacing": ["warn", "always"],
      "@stylistic/js/brace-style": ["warn", "stroustrup"],
      "@stylistic/js/no-multi-spaces": "warn",
      "@stylistic/js/space-in-parens": ["warn", "never"],
      "@stylistic/js/arrow-spacing": [
        "warn",
        {
          "before": true,
          "after": true
        }
      ],
      "@stylistic/js/space-infix-ops": [
        "warn",
        {
          "int32Hint": false
        }
      ],
      "@stylistic/js/comma-spacing": [
        "warn",
        {
          "before": false,
          "after": true
        }
      ],
      "@stylistic/ts/type-annotation-spacing": [
        "warn",
        {
          "before": false,
          "after": true,
          "overrides": {
            "arrow": {
              "before": true,
              "after": true
            }
          }
        }
      ],
      "@stylistic/ts/object-curly-spacing": ["warn", "always"],
      "@stylistic/ts/indent": [
        "warn",
        2,
        {
          "SwitchCase": 1,
          "ignoredNodes": ["JSXElement"]
        }
      ],
      "@stylistic/ts/no-non-null-assertion": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@stylistic/jsx/jsx-curly-newline": [
        "warn",
        {
          "multiline": "require",
          "singleline": "consistent"
        }
      ],
      "@stylistic/jsx/jsx-curly-spacing": [
        "warn",
        {
          "when": "always",
          "allowMultiline": true,
          "multilineText": true,
          "children": { "when": "always" }
        }
      ],
      "@stylistic/jsx/jsx-indent": [
        "warn",
        2,
        {
          "indentLogicalExpressions": true,
          "checkAttributes": false
        }
      ],
      "@stylistic/jsx/jsx-indent-props": ["warn", 2],
      "@stylistic/jsx/jsx-wrap-multilines": [
        "warn",
        {
          "declaration": "ignore",
          "assignment": "parens-new-line",
          "return": "parens-new-line",
          "arrow": "parens-new-line",
          "condition": "parens-new-line",
          "logical": "parens-new-line",
          "prop": "ignore"
        }
      ],
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)