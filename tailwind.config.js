module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  content: [
		'./src/**/*.html'
	],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ]
}
