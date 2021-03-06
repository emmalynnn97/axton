<?php
/**
 * Template Name: Interior
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since 1.0
 */


get_header();
?>

<?php get_template_part('template-parts/interior', 'hero'); ?>
<?php get_template_part('template-parts/interior', 'content'); ?>

<?php get_template_part('template-parts/interior', 'selection'); ?>
<?php get_template_part('template-parts/interior', 'options'); ?>
<script type="text/javascript" src="/wp-content/themes/axtontruck/js/interior.js"></script>
<?php get_footer(); ?>