<div class="interior-hero">
    <?php get_template_part('template-parts/interior', 'hero-content') ?>	
</div>
<style>
	.interior-hero{
		background-image:url('<?php echo get_the_post_thumbnail_url(); ?>') !important;
	}
</style>