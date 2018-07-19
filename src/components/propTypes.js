import PropTypes from "prop-types";

export const settingsShape = PropTypes.shape({
	shareHeader: PropTypes.string,
	shareTitle: PropTypes.string,
	shareUrl: PropTypes.string,
	showTwitter: PropTypes.bool
});

export const settingsDefaults = {
	showTwitter: true,
	shareHeader: 'Share This Great Content On Social Media!'
};