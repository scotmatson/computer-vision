webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);

	__webpack_require__(172);

	class App extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            fileUpload: ''
	        };

	        this.handleFileChange = this.handleFileChange.bind(this);
	    }

	    handleFileChange(event) {
	        // For Testing, we really aren't intersted in retaining this.
	        this.setState({ fileUpload: event.target.value });
	        var form = document.getElementById("video-uploader");
	        form.submit();

	        // TODO check file type, this is dependent upon the files we are able to parse
	        // TODO save file to server
	        // TODO store to DB, vid, path, name.ext... meta?
	        // TODO need to ensure uniqueness so files are not overridden
	        // TODO ideally we'd like to check to ensure the file is safe! i.e., not malicious
	    }

	    render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'form',
	                { action: 'upload', method: 'POST', id: 'video-uploader' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'video' },
	                    'Upload'
	                ),
	                React.createElement('input', { type: 'file',
	                    id: 'video',
	                    name: 'video',
	                    onChange: this.handleFileChange })
	            ),
	            React.createElement(
	                'h1',
	                null,
	                this.props.title
	            ),
	            React.createElement('iframe', { width: '560', height: '315', src: this.props.video, allowFullScreen: true })
	        );
	    }
	}
	ReactDOM.render(React.createElement(App, { title: 'Facial Detection', video: 'https://www.youtube.com/embed/lKKxYwV6GV4' }), document.getElementById("react-app-container"));

/***/ }
]);