<?php
/**
 * The main template file
 */

get_header(); ?>

<main id="primary" class="site-main">

    <?php
    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post();
            the_content();
        endwhile;
    else :
        // If no content, show the default campaign hero as a fallback
        echo do_shortcode('[oto_hero]');
    endif;
    ?>

</main><!-- #main -->

<?php
get_footer();
