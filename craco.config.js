module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  babel: {
    presets: [
      [
        "@emotion/babel-preset-css-prop",
        {
          "autoLabel": "dev-only",
          "labelFormat": "[local]",
          "useBuiltIns": false,
          "throwIfNamespace": true
        }
      ]
    ]
  }
}
