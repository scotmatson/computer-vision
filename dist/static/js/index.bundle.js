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
	                id: "http://dcdq4z03ve68v.cloudfront.net/" + this.props.filename },
	            this.props.filename
	        );
	    }
	}

	class App extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            fileUpload: "",
	            activeVideo: "http://dcdq4z03ve68v.cloudfront.net/testmovie.mp4"
	        };

	        this.handleFileChange = this.handleFileChange.bind(this);
	        this.handleActiveVideoChange = this.handleActiveVideoChange.bind(this);
	    }

	    handleFileChange(event) {
	        document.getElementById("video-uploader").submit();
	    }
	    handleActiveVideoChange(event) {
	        this.setState({ activeVideo: event.target.id });
	        document.getElementById("video-player").load();
	    }

	    componentDidMount(nextProps) {}

	    render() {
	        var userVideos = this.props.videos.map(function (video) {
	            return React.createElement(UserVideo, {
	                key: video.vid,
	                vid: video.vid,
	                uid: video.uid,
	                filename: video.filename,
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
	                    'Upload'
	                ),
	                React.createElement('input', { type: 'file',
	                    id: 'video',
	                    name: 'video',
	                    onChange: this.handleFileChange })
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