<?php
/**
 * The main template file
 */

get_header(); ?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <?php include 'elementor-hero.html'; ?>

    <!-- Meet the Candidate Section -->
    <?php include 'elementor-about.html'; ?>

    <!-- 7-Point Agenda Section -->
    <section id="agenda" class="py-24 bg-slate-50 font-sans">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4" style="font-family: 'Playfair Display', serif;">The 7-Point Transformation Agenda</h2>
                <div class="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    A strategic roadmap designed to unlock Ogun State's full potential as Nigeria's industrial and economic powerhouse.
                </p>
            </div>
            <?php include 'elementor-agenda-widget.html'; ?>
        </div>
    </section>

    <!-- Gallery Section -->
    <?php include 'elementor-gallery.html'; ?>

    <!-- Movement Section -->
    <?php include 'elementor-movement.html'; ?>

    <!-- Contact Section -->
    <?php include 'elementor-contact.html'; ?>

</main><!-- #main -->

<?php
get_footer();
