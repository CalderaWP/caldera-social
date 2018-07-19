/**
 * BLOCK: caldera-social
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'caldera/social-share', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Caldera Social' ), // Block title.
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'Social' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( {attributes,setAttributes,className} ) {
		// Creates a <p class='wp-block-cgb-block-caldera-social'></p>.
		return (
			<div className={ className }>
				<div>
					<p>Hi Roy</p>
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save({attributes}) {
		return (
			<div>
				<p>Hi Roy</p>
			</div>
		);
	},
} );
