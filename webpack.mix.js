const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
mix.scripts(
    [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/datatables.net/js/jquery.dataTables.min.js",
        "node_modules/datatables-fixedcolumns/js/dataTables.fixedColumns.js",
        "node_modules/datatables.net-buttons/js/dataTables.buttons.min.js",
        "node_modules/datatables.net-buttons/js/buttons.html5.min.js",
        "resources/js/jquery.slimscroll.js",
        "resources/js/metismenu.min.js",
        "resources/js/waves.min.js",
        "node_modules/moment/min/moment.min.js",
        "node_modules/bootstrap-datetimepicker-npm/build/js/bootstrap-datetimepicker.min.js",
        "node_modules/select2/dist/js/select2.min.js",
        "node_modules/daterangepicker/daterangepicker.js",
    ],
    "public/assets/scripts/admin.js"
);
mix.styles(
    [
        "resources/css/metismenu.min.css",
        "resources/css/icons.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/select2/dist/css/select2.min.css",
        "node_modules/datatables/media/css/jquery.dataTables.min.css",
        "node_modules/daterangepicker/daterangepicker.css",
        "node_modules/datatables-fixedcolumns/css/fixedColumns.dataTables.scss",
    ],
    "public/assets/styles/dashboard.css"
);

mix.copy(["resources/fonts/*"], "public/assets/fonts/");
mix.copy(["node_modules/datatables/media/images/*"], "public/assets/images/");
mix.copy(["resources/images/*"], "public/images/");
