<?php


// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function caldera_social_cgb_block_assets()
{
    wp_enqueue_style(
        'caldera_social-cgb-style-css', // Handle.
        plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
        array('wp-blocks')
    );
}

add_action('enqueue_block_assets', 'caldera_social_cgb_block_assets');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function caldera_social_cgb_editor_assets()
{
    // Scripts.
    wp_enqueue_script(
        'caldera_social-cgb-block-js',
        plugins_url('/dist/blocks.build.js', dirname(__FILE__)),
        array('wp-blocks', 'wp-i18n', 'wp-element'),
        filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.build.js'),
        true
    );

    // Styles.
    wp_enqueue_style(
        'caldera_social-cgb-block-editor-css',
        // Handle.
        plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)),
        // Block editor CSS.
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.editor.build.css')
    );
}

add_action('enqueue_block_editor_assets', 'caldera_social_cgb_editor_assets');


add_action('init', function () {
    register_meta('post',
        'caldera_social_showFacebook', [
            'show_in_rest' => true,
            'single' => true,
            'type' => 'boolean',
        ]
    );
    register_meta('post',
        'caldera_social_shareHeader', [
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        ]
    );
});
