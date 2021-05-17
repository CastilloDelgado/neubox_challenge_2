const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins light', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: theme => ({
                'main-image': "url('https://i.ibb.co/MGHMgy2/main-image.jpg')"
            }),

            colors: {
                red: {
                    'emprend': "#FE6261",
                    'emprend-dark': "#E35656"
                },

                gray: {
                    'emprend': '#efefef',
                    'emprend-dark': '#333333'
                },

                'black-emprend': '#333333'
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
