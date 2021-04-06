<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>
<?php get_template_part('template-parts/site', 'sidebar'); ?>
<div class="footer-insert">
	<a><img class='nut' src="/wp-content/uploads/2021/03/NUt.png" alt="nut"/>About</a>
	<a><img class='nut' src="/wp-content/uploads/2021/03/NUt.png" alt="nut"/>Contact</a>
	<a><img class='nut' src="/wp-content/uploads/2021/03/NUt.png" alt="nut"/>Videos</a>
	<div>
		Social Icons
	</div>
</div>
<div class="footer-items">
		<a href="/"><img src="/wp-content/uploads/2021/03/Axton_logo.png" alt="axton logo"/></a>
		<div>
			<span><strong>South Texas</strong></span>
			<span>109 Cibolo Drive</span>
			<span>Cibolo, TX 78108</span>
			<span>P: 210.637.7400</span>
			<br class="hide-tablet"/>
			<span><strong>Map | Location</strong></span>
		</div>
			<div>
			<span><strong>West Texas</strong></span>
			<span>1911 E. Roby Highway</span>
			<span>Snyder, TX 79549</span>
			<span>P: 325.515.7500</span>
			<br class="hide-tablet"/>
			<span><strong>Map | Location</strong></span>
		</div>
		<div>
			Form
		</div>
				</div>
			<footer id="site-footer" role="contentinfo" class="header-footer-group">
	
				<div class="section-inner">

					<div class="footer-credits">

						<p class="footer-copyright">&copy;
							<?php
							echo date_i18n(
								/* translators: Copyright date format, see https://www.php.net/manual/datetime.format.php */
								_x( 'Y', 'copyright date format', 'twentytwenty' )
							);
							?>
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
						</p><!-- .footer-copyright -->

						<p class="powered-by-wordpress">
							<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'twentytwenty' ) ); ?>">
								<?php _e( 'Powered by WordPress', 'twentytwenty' ); ?>
							</a>
						</p><!-- .powered-by-wordpress -->

					</div><!-- .footer-credits -->

					<a class="to-the-top" href="#site-header">
						<span class="to-the-top-long">
							<?php
							/* translators: %s: HTML character for up arrow. */
							printf( __( 'To the top %s', 'twentytwenty' ), '<span class="arrow" aria-hidden="true">&uarr;</span>' );
							?>
						</span><!-- .to-the-top-long -->
						<span class="to-the-top-short">
							<?php
							/* translators: %s: HTML character for up arrow. */
							printf( __( 'Up %s', 'twentytwenty' ), '<span class="arrow" aria-hidden="true">&uarr;</span>' );
							?>
						</span><!-- .to-the-top-short -->
					</a><!-- .to-the-top -->

				</div><!-- .section-inner -->

			</footer><!-- #site-footer -->

		<?php wp_footer(); ?>

	</body>
</html>
