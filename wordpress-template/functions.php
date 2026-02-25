<?php
/**
 * OTO 2027 Functions - Asiwaju Dr. Adetunji Oredipe (APC)
 */

function oto2027_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'oto2027'),
    ));
}
add_action('after_setup_theme', 'oto2027_setup');

function oto2027_scripts() {
    // Load Google Fonts
    wp_enqueue_style('oto2027-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap', array(), null);
    
    // Load Tailwind CSS via CDN for quick setup (Use a build process for production)
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Custom Styles
    wp_enqueue_style('oto2027-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'oto2027_scripts');

// Add custom tailwind config to head
function oto2027_tailwind_config() {
    ?>
    <script>
        tailwind.config = {
            important: true, // This helps Tailwind classes override Elementor defaults when needed
            theme: {
                extend: {
                    colors: {
                        'ogun-green': '#006837',
                        'ogun-gold': '#D4AF37',
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        /* Fix for Elementor + Tailwind conflicts */
        .elementor-widget-container {
            font-family: inherit;
        }
        /* Ensure Tailwind's base styles don't break Elementor's UI in the editor */
        .elementor-editor-active .tailwind-base {
            display: none;
        }
    </style>
    <?php
}
add_action('wp_head', 'oto2027_tailwind_config');

/**
 * Elementor Compatibility
 */
function oto2027_add_elementor_support() {
    add_theme_support( 'elementor-full-width' );
}
add_action( 'after_setup_theme', 'oto2027_add_elementor_support' );
?>
