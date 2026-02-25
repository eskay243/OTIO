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

/**
 * Campaign Shortcodes
 * Usage: [oto_hero], [oto_about], [oto_agenda], [oto_gallery], [oto_movement], [oto_contact], [oto_bio]
 */
function oto_shortcode_wrapper($file) {
    ob_start();
    include get_template_directory() . '/' . $file;
    return ob_get_clean();
}

add_shortcode('oto_hero', function() { return oto_shortcode_wrapper('elementor-hero.html'); });
add_shortcode('oto_about', function() { return oto_shortcode_wrapper('elementor-about.html'); });
add_shortcode('oto_agenda', function() { return oto_shortcode_wrapper('elementor-agenda-widget.html'); });
add_shortcode('oto_gallery', function() { return oto_shortcode_wrapper('elementor-gallery.html'); });
add_shortcode('oto_movement', function() { return oto_shortcode_wrapper('elementor-movement.html'); });
add_shortcode('oto_contact', function() { return oto_shortcode_wrapper('elementor-contact.html'); });
add_shortcode('oto_bio', function() { 
    ob_start();
    ?>
    <section class="py-24 bg-white font-sans">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <!-- Left: Sticky Portrait -->
                <div class="lg:col-span-5">
                    <div class="lg:sticky lg:top-32">
                        <div class="relative">
                            <div class="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37] rounded-[2rem] z-0"></div>
                            <div class="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                                <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/99342738-96f3-4e89-9a2e-463806a54687.jpg" class="w-full h-full object-cover object-top" alt="Asiwaju Dr. Adetunji Oredipe" referrerPolicy="no-referrer">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Detailed Bio -->
                <div class="lg:col-span-7">
                    <div class="mb-12">
                        <span class="text-[#006837] font-bold uppercase tracking-widest text-sm mb-4 block">Biography</span>
                        <h1 class="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8" style="font-family: 'Playfair Display', serif;">Meet Asiwaju <br/><span class="text-[#006837]">Dr. Adetunji Oredipe</span></h1>
                        <p class="text-2xl text-slate-600 font-light leading-relaxed italic border-l-4 border-[#D4AF37] pl-6">
                            "Leadership is not a title; it is a responsibility to uplift the lives of every citizen in Ogun State."
                        </p>
                    </div>

                    <div class="prose prose-slate max-w-none space-y-12 text-lg text-slate-700 leading-relaxed">
                        <section>
                            <h2 class="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3" style="font-family: 'Playfair Display', serif;">
                                <span class="w-10 h-10 bg-[#006837]/10 rounded-full flex items-center justify-center text-[#006837] text-sm">01</span>
                                Education
                            </h2>
                            <p>Dr. Oredipe attended College of Agriculture Akure, University of Ife (now Obafemi Awolowo University), University of Bradford, United Kingdom and later to the University of Ibadan for his masters. He enrolled at Wye College, University of London, United Kingdom and later at the University of Ibadan for his Ph.D in agric economics. Also attended Maastricht School of Management, the Netherlands.</p>
                        </section>

                        <section>
                            <h2 class="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3" style="font-family: 'Playfair Display', serif;">
                                <span class="w-10 h-10 bg-[#006837]/10 rounded-full flex items-center justify-center text-[#006837] text-sm">02</span>
                                Career & Professional Excellence
                            </h2>
                            <p>Dr Oredipe served as consultant to many national and international organizations. He successfully completed his term as the National Coordinator of the famous Second National Fadama Development Project (FADAMA II), one of the biggest externally financed projects in Nigeria. In recognition of his outstanding achievement, the World Bank bestowed on him the <strong>"World Bank Africa Region's 2005 Excellence Award"</strong>.</p>
                            <p>He was also the Senior Technical Adviser to the Honorable Minister of Agriculture and Rural Development. He worked with the World Bank for over 15 years as a Senior Agriculture Economist, leading several multi-million dollar projects across Nigeria and West Africa.</p>
                        </section>

                        <section>
                            <h2 class="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3" style="font-family: 'Playfair Display', serif;">
                                <span class="w-10 h-10 bg-[#006837]/10 rounded-full flex items-center justify-center text-[#006837] text-sm">03</span>
                                Impact to Ijebuland Economy
                            </h2>
                            <p>Beyond his public service, Dr. Oredipe is a major driver of the local economy in Ijebuland. He has established several businesses that provide employment for hundreds of youths, including <strong>The Grand Inn & Suites</strong> and <strong>OTO Farms</strong>.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
});
?>
