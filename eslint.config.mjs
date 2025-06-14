import antfu from '@antfu/eslint-config'
import reactFunc from 'eslint-plugin-react-func'

export default antfu(
  {
    typescript: true,
    jsx: true,
    formatters: true,
    react: true,
    ignores: [
      'next.config.*',
      'tailwind.config.*',
      'postcss.config.*',
      '.prettierrc',
      '.eslintrc.*',
      'prettier.config.*',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
      'dist',
      '.next',
      'node_modules',
      'public',
      'coverage',
      '*.min.*',
      '*.d.ts',
      '*.md',
      '**/*.md',
      'README.md',
      'docs/**/*.md',
    ],
    rules: {
      'react/prop-types': 'off',
      'max-lines': ['error', { max: 500 }],
      'style/max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      // Disable problematic rules temporarily (optional)
      'style/quotes': 'off',
      'style/indent': 'off',
      'style/eol-last': 'off',
      'style/no-trailing-spaces': 'off',
      'style/no-multiple-empty-lines': 'off',
      'style/semi': 'off',
      'style/arrow-parens': 'off',
      'style/jsx-closing-tag-location': 'off',
      'perfectionist/sort-imports': 'off',
      'unused-imports/no-unused-imports': 'off',
    },
    tailwindcss: {
      config: 'tailwind.config.ts',
      callees: ['tv'],
      classRegex: '^(?:tw|class|className)$',
    },
  },
  {
    plugins: {
      'react-func': reactFunc,
      '@next/next': require('@next/eslint-plugin-next'),
    },
    rules: {
      'react-func/max-lines-per-function': [
        'error',
        {
          max: 80,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
    },
  }
)