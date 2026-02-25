<?php
/**
 * The template for displaying all pages
 * 
 * This is the template that displays all pages by default.
 * It is also the primary template used by Elementor.
 */

get_header(); ?>

<main id="primary" class="site-main">

    <?php
    while ( have_posts() ) :
        the_post();

        // This is the critical part for Elementor
        the_content();

    endwhile; // End of the loop.
    ?>

</main><!-- #main -->

<?php
get_footer();
