import React from 'react';
import social from '../data/social.json';

class SocialItems extends React.Component {
	render() {
		return (
			<span>
				{ social.map( (SocialIcontem, idx) => {
						return (<SocialIcon socialItem={SocialIcontem} key={idx}  />)
					})
				}
			</span>
		);
	}
};

class SocialIcon extends React.Component {
	render() {
		let socialItem = this.props.socialItem;

		return (
			<li class="socialWrapper">
				<a class="color--skyBlue social"
					 title={ socialItem.title }
					 target={ socialItem.target }
					 href={ socialItem.href }
					 download={ socialItem.downloadText } >
					<i class={ socialItem.icon } ></i>
				</a>
			</li>
		);
	}
};

export default SocialItems;
export { SocialIcon };
