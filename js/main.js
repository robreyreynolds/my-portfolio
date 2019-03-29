import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import SocialItems from './social';

const myWork = [
	{
		'title': "Work Example",
		'href': "https://example.com",
		'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		'image': {
			'descr': "example screenshot of a project involving code",
			'src': "images/example1.png",
			'comment': ""
		}
	},
	{
		'title': "Work Example",
		'href': "https://example.com",
		'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		'image': {
			'descr': "example screenshot of a project involving chemistry",
			'src': "images/example2.png",
			'comment': `"Chemistry" by Surian Soosay is licensed under CC BY 2.0
									https://www.flickr.com/photos/ssoosay/4097410999`
		}
	},
	{
		'title': "Work Example",
		'href': "https://example.com",
		'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		'image': {
			'descr': "example screenshot of a project involving cats",
			'src': "images/example3.png",
			'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
									https://www.flickr.com/photos/37287295@N00/2540855181`
		}
	}
];

const mySocial = [
	{
		'title': 'LinkedIn Profile',
		'target': '_blank',
		'href': 'https://www.linkedin.com/in/robertreyreynolds',
	 	'icon': 'fa fa-linkedin',
		'downloadText': '""'
	},
	{
		'title': 'GitHub Profile',
		'target': '_blank',
		'href': 'https://github.com/robreyreynolds',
	 	'icon': 'fa fa-github',
		'downloadText': '""'
	},
	{
		'title': 'Twitter Profile',
		'target': '_blank',
		'href': 'https://twitter.com/robreyreynolds',
		'icon': 'fa fa-twitter',
		'downloadText': '""'
	},
	{
		'title': 'Résumé',
		'target': '_blank',
		'href': 'RobertReynoldsBrief.pdf',
	 	'icon': 'fa fa-file-text',
		'downloadText': 'RobertReynoldsBrief.pdf'
	}
];

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'))
ReactDOM.render(<SocialItems social={mySocial} />, document.getElementById('section-social'))
