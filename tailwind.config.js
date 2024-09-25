module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: false,
    themes: [{
      "light": {
        primary: "#FC7400",
        "primary-content": "#fff",
        "secondary": "#3434D3",
        "secondary-content": "#fff",
        "base-100": "#F4F9FA",
        "base-content": "#333",
      }
    }],
  },
}
