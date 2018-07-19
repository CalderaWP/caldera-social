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
import {SocialShare} from "../components/SocialShare";
import {SocialShareSettings} from "../components/SocialShareSettings";
const InspectorControls = wp.editor.InspectorControls;

function settings(attributes) {
	const settings = {
		...attributes,
		shareTitle: '',
		shareUrl: ''
	};
	return settings;
}

registerBlockType( 'caldera/social-share', {
	title: __( 'Caldera Social' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'Social' ),
	],
	attributes: {
		showTwitter: {
			type: 'boolean',
			source: 'meta',
			meta:   'caldera_social_showFacebook'
		},
		shareHeader: {
			type: 'string',
			source: 'meta',
			meta:   'caldera_social_shareHeader'
		},


	},

	edit( {attributes,setAttributes,className} ) {
		const settings = settings(attributes);
		const onChange =(newValue) => {
			setAttributes(newValue);
		};
		return (
			<div className={ className }>
				<InspectorControls>
					<SocialShareSettings
						settings={settings}
						onChangeSettings={onChange}
					/>
				</InspectorControls>
				<div>

					<SocialShare
						settings={settings}
					/>

				</div>
			</div>
		);
	},

	save({attributes}) {
		const settings = settings(attributes);
		return (
			<div>
				<SocialShare
					settings={settings}
				/>
			</div>
		);
	},
} );
