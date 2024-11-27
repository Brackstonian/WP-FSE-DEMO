<?php
/**
 * Plugin Name: Custom Blocks Demo
 * Description: We ❤️ custom blocks!
 * Version: 1.0
 * Author: Ethan Brackstone
 */


function wp_fse_demo_plugin_enqueue_assets() {
    wp_enqueue_script(
        'wp-fse-demo-plugin-editor-script',
        plugins_url('build/editor.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n'],
        filemtime(plugin_dir_path(__FILE__) . 'build/editor.js')
    );

    wp_enqueue_style(
        'wp-fse-demo-plugin-editor-style',
        plugins_url('build/style-editor.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/style-editor.css')
    );
}
add_action('enqueue_block_editor_assets', 'wp_fse_demo_plugin_enqueue_assets');

function wp_fse_demo_plugin_enqueue_frontend_assets() {
    wp_enqueue_script(
        'wp-fse-demo-plugin-frontend-script',
        plugins_url('build/frontend.js', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/frontend.js'),
        true
    );

    wp_localize_script('wp-fse-demo-plugin-frontend-scrip', 'fse_pl_v1_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));

    // wp_enqueue_style(
    //     'wp-fse-demo-plugin-frontend-style',
    //     plugins_url('build/frontend.css', __FILE__),
    //     [],
    //     filemtime(plugin_dir_path(__FILE__) . 'build/frontend.css')
    // );
}
add_action('wp_enqueue_scripts', 'wp_fse_demo_plugin_enqueue_frontend_assets');
