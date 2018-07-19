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
const InspectorControls = wp.editor.InspectorControls;

import {SocialShareSettings } from "../components/SocialShareSettings";
import {select} from '@wordpress/data';



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
	useOnce: true,

	edit( {attributes,setAttributes,className} ) {
		const onChange =(newValue) => {
			setAttributes(newValue);
		};

		const {getDocumentTitle,getPermalink} = wp.data.select( 'core/editor' );
		const settings = {
			...attributes,
			shareTitle: getDocumentTitle(),
			shareUrl: getPermalink()
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
		const settings = {
			...attributes,
			shareTitle: '',
			shareUrl: ''
		};
		return (
			<div>
				<SocialShare
					settings={settings}
				/>
			</div>
		);
	},
} );
