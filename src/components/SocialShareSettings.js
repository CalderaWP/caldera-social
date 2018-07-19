import {Component} from "@wordpress/element";
import {CheckboxControl,TextControl} from "@wordpress/components";
import PropTypes from 'prop-types';
import {settingsShape,settingsDefaults} from "./propTypes";

export class SocialShareSettings extends Component {

	constructor(props) {
		super(props);
		this.onSettingChange = this.onSettingChange.bind(this);
	}

	onSettingChange(update){
		this.props.onChangeSettings({
			...this.props.settings,
			...update
		});
	}
	render() {
		return (
			<div>
				<TextControl
					heading="Share Header"
					label="Displayed Above Links"
					help="Some help text"
					checked={this.props.settings.shareHeader}
					onChange={(newValue) => {
						this.onSettingChange({
							shareHeader: newValue
						})
					}}
				/>
				<CheckboxControl
					heading="Twitter"
					label="Show Twitter Option For Social Sharing"
					help="Some help text"
					checked={this.props.settings.showTwitter}
					onChange={() => {
						this.onSettingChange({
							showTwitter: !this.props.settings.showTwitter
						})
					}}
				/>
			</div>
		)
	}
}

SocialShareSettings.propTypes = {
	settings: settingsShape.isRequired,
	onChangeSettings: PropTypes.func.isRequired
};

SocialShareSettings.defaultProps = {
	settings: settingsDefaults
};