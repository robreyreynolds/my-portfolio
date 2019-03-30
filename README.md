# Robert Reynolds' portfolio

This is my professional portfolio. It uses AWS and ReactJS.

## Technologies used

### Install
Pip - command line tool installer
Brew - command line tool installer
Git and github - Code repository and command line tool
SSH - secure shell for sharing credentials

### Editor, languages, fonts, icons and libraries
Atom - code editor

HTML
CSS
Javascript (as JSX)

Font Awesome - For social media icons
Google Fonts - For web site fonts

iPython - for prototyping python scripts
Python 2.7 - for Lambda script to deploy portfolio builds
	Boto3 - for AWS commands within Python
	StringIO - for in-memory file upload
	Mimetypes - to add uploading mimetype guess from file extension
	Zipfile - for uncompressing build artifact

Node - for portfolio  build
React - Javascript framework
	"react": "^16.2.0",
	"react-dom": "^16.2.0"
	"react-test-renderer": "^16.2.0",

### JSX Compiler and Test tools
Babel - for Javascript feature support across browsers
	"babel-core": "^6.26.0",
	"babel-loader": "^7.1.4",
	"babel-preset-react": "^6.24.1",
	"babel-preset-env": "^1.6.1",
	"babel-jest": "^22.4.3",
Webpack - for Javascript component & library packaging
	"webpack": "^4.2.0",
	"webpack-cli": "^3.3.0"
Chai - for test assertions
Mocha - for test scaffolding and reporting
Jest - Testing framework primarily for React
	"jest": "^22.4.3",
Enzyme - a JavaScript testing utility for managing outputs
	"enzyme": "^3.3.0",
	"enzyme-adapter-react-16": "^1.1.1",

### AWS Tools & Cloud Services
	S3 - store build images and store origin of portfolio web site
	Lambda - serverless compute service. Used for custom deployment function
	CodeBuild - serverless build service
	CodePipeline - serverless automatic CI/CD process
	CloudFront - Content Distribution Network
	IAM - Cloud identity and access management

## Functionality added by Robert Reynolds
./index.HTML				- Replaced social icon HTML with ul tag for social component;
										- Added meta viewport statement to header for mobile
											friendly use. See https://search.google.com/test/mobile-friendly
./styles/main.css		- Added .fa style to size icons consistent with mobile
												friendly use. See https://search.google.com/test/mobile-friendly
./js/main.js				- Added import of social components;
										- Added second ReactDOM.render command for social components;
										-	Added social data
										- Moved work data and social data to separate data folder
										- Removed Example-Work prop and SocialItems prop from component
												ReactDOM.render calls
./js/example-work.js
										- Removed props from ExampleWork component and  added import
												of work data from data file.
./js/social.js			- Converted social icons from index.html into JSX for data
												driven display of social icons/links
										- Removed props and added import of social data from data file
./data/work.json	-Created initial state data from original main.js data element
./data/social.json
									-Created initial state data from original main.js data element
	./__tests__/test-expale-work,
	./__tests__/test-expale-work-modal
											- Added @jest-environment node comment at top as needed by
												Enzyme version
	./__tests__/test-social.js
											- Added test file for SocialItems, SocialIcon components

## TODO
	- Add Provider to js module to load data from AWS DynamoDB via AWS API Gateway
			(serverless data). Consider component state and constructor with local/static.
			Two step - data from import, data from async API (non-block with callback to
			update state).
	- Add Service Worker to cache data on browsers
	- Move icons and fonts into local files
	- Covert stateless JSX classes to functions
	- Covert person-specific HTML in index.html to components and Provider(s)
	- Add "Team" page to enable switching between data profiles
	- Create CloudFormation YAML to deploy solution in a stack. Note: manual AWS
			steps in current process need to be automated.
	- Add integration/QA tests. Consider how regression, load testing is automated,
			capped
	- Update CodePipeline to add steps to create a QA stack,
			= hydrate with data, App admin user info
			 = SNS message for manual QA Approval,  
				 = link to authorize deployment to production and clear QA stack
				 			(API Gateway, Lambda)
				 = link to message DevOps of rejection and reason (API Gateway, Lambda)
	- Add files needed to pass Lighthouse tests
	- Add app user registration (AWS Cognito), admin page for creating data sets
	- Add Demo/Sandbox page with button tied to CloudFormation build/delete for
			App admin user (Note: not AWS user)
	- Add AWS tags and billing page
	- Update development environment from Babel 6 to Babel 7. See:
			https://babeljs.io/docs/en/v7-migration
	- Optimize static items by uglify, zip, webpack chunking
	- Add CloudFront Security Lambdas
	- Add Ops monitoring and Ops user page
	- Add cloud statistics, click tracing, Marketing/Product Mgr user page
	- Add Data Lake and admin reporting + report page
	- Add Automated Business Controls and exception alerts
