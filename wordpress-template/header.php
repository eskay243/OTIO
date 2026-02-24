<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-slate-900'); ?>>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-[#006837] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">O</div>
            <span class="font-serif font-bold text-xl text-[#006837]">OTO <span class="text-[#D4AF37]">2027</span> <span class="text-[10px] bg-blue-600 text-white px-1 rounded">APC</span></span>
        </div>
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => 'hidden md:flex items-center gap-8 text-sm font-semibold',
        ));
        ?>
        <a href="#movement" class="bg-[#006837] text-white px-6 py-2.5 rounded-full text-sm font-bold">Join Now</a>
    </div>
</nav>
