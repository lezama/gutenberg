/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { store as editorStore } from '../../store';

/**
 * React custom hook to bind a source to a block.
 *
 * @param {Object} blockProps      - The block props.
 * @param {Object} sourceArgs      - The source args.
 * @param {string} sourceArgs.kind - Kind of the entity. Default is `postType`.
 * @param {string} sourceArgs.name - Name of the entity.
 * @param {string} sourceArgs.prop - The prop to bind.
 * @return {Object} The source value and setter.
 */
const useSource = ( blockProps, sourceArgs ) => {
	if ( typeof sourceArgs === 'undefined' ) {
		throw new Error( 'The "args" argument is required.' );
	}

	if ( ! sourceArgs?.prop ) {
		throw new Error( 'The "prop" argument is required.' );
	}

	const { context } = blockProps;
	const { prop, kind = 'postType', id } = sourceArgs;

	// Let's define `postType` as the default kind.
	const { postType: nameFromContext } = context;

	/*
	 * Since the `postType` is the default kind,
	 * Let's try to pick the name from the context
	 * and from the editor store (post, page, etc).
	 */
	const name = useSelect(
		( select ) => {
			return nameFromContext
				? nameFromContext
				: select( editorStore ).getCurrentPostType();
		},
		[ nameFromContext ]
	);

	const [ value, setValue ] = useEntityProp( kind, name, prop, id );

	return {
		placeholder: null,
		useValue: [
			value,
			( nextEntityPropValue ) => {
				if ( typeof nextEntityPropValue !== 'string' ) {
					return;
				}
				setValue( nextEntityPropValue );
			},
		],
	};
};

/*
 * Create the product-entity
 * block binding source handler.
 *
 * source ID: `core/entity`
 * args:
 * - prop: The prop of the entity to bind.
 *
 * example:
 * The following metadata will bind the title
 * to the `content` attribute of the block.
 *
 * ```
 * metadata: {
 *   bindings: {
 *     content: {
 *       source: 'core/entity',
 *       args: {
 *         prop: 'title',
 *       },
 *    },
 * },
 * ```
 */
export default {
	name: 'core/entity',
	label: __( 'Entity block-binding source handler' ),
	useSource,
	lockAttributesEditing: false,
};
