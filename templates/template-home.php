<?php
/**
 * Template Name: Home
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since 1.0
 */


get_header();
?>

<?php get_template_part('template-parts/home', 'hero'); ?>
<?php get_template_part('template-parts/home', 'welcome'); ?>
<?php get_template_part('template-parts/home', 'products'); ?>
<?php get_template_part('template-parts/home', 'dealers'); ?>
<?php get_template_part('template-parts/home', 'industries'); ?>
<?php get_footer(); ?>