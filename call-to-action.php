<?php
/**
 * Plugin Name: Gutenberg Block Call-To-Action
 * Description: Add a custom Gutenberg Block Call-To-Action to WordPress editor.
 * Version: 1.0.0
 * Author: Jan Lenartz
 * Author URI:  https://www.xlimity.de/services/
 * License:     GNU GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 */
 
function loadCallToActionBlock() {
  wp_enqueue_script(
    'call-to-action-block',
    plugin_dir_url(__FILE__) . '/scripts/call-to-action-block.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'loadCallToActionBlock');

function loadCSS() {
  wp_enqueue_style(
    'call-to-action-css',
    plugin_dir_url(__FILE__) .  '/styles/custom.css'
  );
 }

 add_action('wp_enqueue_scripts', 'loadCSS');