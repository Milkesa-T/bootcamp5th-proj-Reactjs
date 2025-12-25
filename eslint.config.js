// .eslintrc.cjs
module.exports = {
  // ... other config
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // ... other rules
  },
}
