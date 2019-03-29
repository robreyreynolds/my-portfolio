/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import SocialItems, {SocialIcon} from '../js/social';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const mySocial = [
	{
		'title': 'LinkedIn Profile',
		'target': '_blank',
		'href': "https://example.com",
	 	'icon': 'fa fa-linkedin',
		'downloadText': '""'
	},
	{
		'title': 'GitHub Profile',
		'target': '_blank',
		'href': "https://example.com",
	 	'icon': "fa fa-github",
		'downloadText': '""'
	}
];

describe("SocialItems Component", () => {
	let component = shallow(<SocialItems social={mySocial}/>);

	it ("Should be a span element", () => {
		expect(component.type()).toEqual('span');
	});

	it ("Should contain as many children as there are social examples", () => {
		expect(component.find('SocialIcon').length).toEqual(mySocial.length);
	});
});

describe("SocialItems Component", () => {

	let component = shallow(<SocialIcon socialItem={mySocial[1]} />);
	let anchors = component.find("a");

	it ("Should contain a single icon element", () => {
		expect(anchors.length).toEqual(1);
	});

	it("Should refernce the appropriate href", () => {
		expect(anchors.prop("href")).toEqual(mySocial[1].href);
	});
});
