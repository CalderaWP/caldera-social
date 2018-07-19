
import {settingsShape,settingsDefaults} from "./propTypes";

export const SocialShare = (props) => {
	const {settings}  = props;
 	const shareLink = () => {
 		const {shareTitle,shareUrl} = settings;
 		console.log(shareTitle,shareUrl);
		return `https://twitter.com/intent/tweet?text=${encodeURI(`${shareTitle} ${shareUrl}` )}`;
	};

	return(
		<div>
			<h2 className={'caldera-social-header'}>{props.settings.shareHeader}</h2>
			{settings.showTwitter &&
				<a href={shareLink()}>
					Share On Twitter
				</a>
			}
		</div>
	)
};

SocialShare.propTypes = {
	settings: settingsShape
};

SocialShare.defaultProps = {
	settings: settingsDefaults
};