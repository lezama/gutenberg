<?php
/**
 * PHP and WordPress configuration compatibility functions for the Gutenberg
 * editor plugin changes related to REST API.
 *
 * @package gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

if ( ! function_exists( 'gutenberg_register_wp_rest_post_types_meta_fields' ) ) {
	/**
	 * Adds `template` and `template_lock` fields to WP_REST_Post_Types_Controller class.
	 */
	function gutenberg_register_wp_rest_post_types_meta_fields() {
		register_rest_field(
			'type',
			'meta',
			array(
				'get_callback' => function ( $item ) {
					$public_fields = array();
					$global_fields = get_registered_meta_keys( 'post' );
					$post_type_fields = get_registered_meta_keys( 'post', $item['slug'] );
					foreach ( array_merge( $global_fields, $post_type_fields ) as $key => $properties ) {
						// Only expose fields with `show_in_rest` set to true.
						if ( $properties['show_in_rest'] ) {
							$public_fields[ $key ] = array(
								'default'     => $properties['default'] ?? '',
								'description' => $properties['description'],
							);
						}
					}
					return $public_fields;
				},
				'schema'       => array(
					'type'        => 'array',
					'description' => __( 'Meta Keys', 'gutenberg' ),
					'readonly'    => true,
					'context'     => array( 'view', 'edit', 'embed' ),
				),
			)
		);
	}
}
add_action( 'rest_api_init', 'gutenberg_register_wp_rest_post_types_meta_fields' );
