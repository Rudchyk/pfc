export default {
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  endOfLine: 'lf',
  overrides: [
    {
      files: '**/*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
