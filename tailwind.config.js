/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,css}'],
  theme: {
    extend: {
      colors: {
        skin: {
          base: 'var(--color-text-base)',
          white: 'var(--color-fill)',
          'black-soft': 'var(--color-black-soft)',
          'black-mute': 'var(--color-black-mute)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-background-base)',
          soft: 'var(--color-background-soft)',
          // 'bg-skin-btn-primary': 'var()',
          'btn-secondary': 'var(--bg-btn-secondary)',
          'btn-secondary-hover': 'var(--bg-btn-secondary-hover)',
          // 'btn-secondary-active': 'var()',
          // 'btn-secondary-disabled': 'var()',
        },
      },
      borderColor: {
        'btn-secondary-focus': 'var(--bd-color-btn-secondary-focus)',
      },
      backgroundImage: {
        'back-arrow': 'url(\'../assets/images/left-arrow.svg\')',
      },
    },
  },
  plugins: [require('daisyui')],
}
