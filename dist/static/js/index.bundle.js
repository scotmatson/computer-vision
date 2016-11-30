webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	__webpack_require__(172);

	class UserVideo extends React.Component {
	    render() {
	        return React.createElement(
	            'li',
	            { onClick: this.props.onClick,
	                id: "http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash },
	            this.props.filename
	        );
	    }
	}

	class App extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            fileUpload: "",
	            fileDescription: "",
	            activeVideo: ""
	        };

	        this.handleFileChange = this.handleFileChange.bind(this);
	        this.handleFileDescriptionChange = this.handleFileDescriptionChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleActiveVideoChange = this.handleActiveVideoChange.bind(this);
	    }

	    handleFileChange(event) {
	        this.setState({ fileUpload: event.target.value });
	    }
	    handleFileDescriptionChange(event) {
	        this.setState({ fileDescription: event.target.value });
	    }
	    handleSubmit(event) {/* Validation */}

	    handleActiveVideoChange(event) {
	        this.setState({ activeVideo: event.target.id });
	        document.getElementById("video-player").load();
	    }

	    render() {
	        var userVideos = this.props.videos.map(function (video) {
	            return React.createElement(UserVideo, {
	                key: video.vid,
	                vid: video.vid,
	                uid: video.uid,
	                filename: video.filename,
	                filehash: video.filehash,
	                description: video.description,
	                created: video.created,
	                onClick: this.handleActiveVideoChange });
	        }, this);

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'form',
	                { action: 'upload',
	                    method: 'POST',
	                    id: 'video-uploader',
	                    encType: 'multipart/form-data' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'video' },
	                    'Video'
	                ),
	                React.createElement('input', { type: 'file',
	                    value: this.state.fileUpload,
	                    name: 'video',
	                    id: 'video',
	                    onChange: this.handleFileChange }),
	                React.createElement(
	                    'label',
	                    { htmlFor: 'description' },
	                    'Description'
	                ),
	                React.createElement('input', { type: 'input',
	                    value: this.state.fileDescription,
	                    name: 'description',
	                    id: 'description',
	                    onChange: this.handleFileDescriptionChange }),
	                React.createElement('input', { type: 'submit', value: 'Upload' })
	            ),
	            React.createElement(
	                'video',
	                { id: 'video-player', controls: true },
	                React.createElement('source', { src: this.state.activeVideo, type: 'video/mp4' })
	            ),
	            React.createElement(
	                'ul',
	                null,
	                userVideos
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(App, { videos: videos }), document.getElementById("react-app-container"));

/***/ }
]);