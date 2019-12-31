let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const tailwindcss = require('tailwindcss');

mix.js('resources/assets/js/app.js', 'public/js');

mix.sass('resources/assets/sass/app.scss', 'public/css')
.options({
   processCssUrls: false,
   postCss: [ tailwindcss('tailwind.config.js') ],
})

 mix.options({
   hmrOptions: {
       host: 'dev-tool.com',
       port: '8000'
   }
})

Mix.listen('configReady', (webpackConfig) => {
   if (Mix.isUsing('hmr')) {
     // Remove leading '/' from entry keys
     webpackConfig.entry = Object.keys(webpackConfig.entry).reduce((entries, entry) => {
       entries[entry.replace(/^\//, '')] = webpackConfig.entry[entry];
       return entries;
     }, {});
 
     // Remove leading '/' from ExtractTextPlugin instances
     webpackConfig.plugins.forEach((plugin) => {
       if (plugin.constructor.name === 'ExtractTextPlugin') {
         plugin.filename = plugin.filename.replace(/^\//, '');
       }
     });
   }
 });