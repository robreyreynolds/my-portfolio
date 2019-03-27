# Robert Reynolds' portfolio

This is my professional portfolio. It uses AWS and ReactJS.

## Technologies used
Pip - command line tool installer
Brew - command line tool installer
Git and github - Code repository and command line tool
SSH - command line tool installer

Atom - code editor

HTML
CSS
Javascript

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
	Babel - for Javascript feature support across browsers
		"babel-core": "^6.26.0",
		"babel-loader": "^7.1.4",
		"babel-preset-react": "^6.24.1",
Webpack - for portfolio packaging
	"webpack": "^4.2.0",
	"webpack-cli": "^3.3.0"
Chai - for test assertions
Mocha - for test scaffolding and reporting

AWS Tools & Services
	S3 - store build images and store origin of portfolio web site
	Lambda - serverless compute service. Used for custom deployment function
	CodeBuild - serverless build service
	CodePipeline - serverless automatic CI/CD process
	CloudFront - Content Distribution Network
	IAM - Cloud identity and access management
