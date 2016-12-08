webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	__webpack_require__(172);

	class UserVideo extends React.Component {
	    render() {
	        return React.createElement(
	            'div',
	            { className: 'video-tile' },
	            React.createElement('img', { src: "https://frames160.s3.amazonaws.com/" + this.props.filehash,
	                onClick: this.props.onClick,
	                className: "http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash,
	                alt: 'Video thumbnail' }),
	            React.createElement(
	                'h2',
	                null,
	                this.props.videoname
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Curated by ',
	                this.props.videoauthor
	            ),
	            React.createElement(
	                'p',
	                null,
	                this.props.description
	            ),
	            React.createElement(
	                'div',
	                { className: 'form__submit-btn-wrapper' },
	                React.createElement(
	                    'form',
	                    { action: 'delete', method: 'POST' },
	                    React.createElement('input', { type: 'hidden', value: this.props.filehash, name: 'delete' }),
	                    React.createElement(
	                        'button',
	                        { className: 'index-btn', type: 'submit' },
	                        'Delete'
	                    )
	                ),
	                React.createElement('div', { className: 'divider' }),
	                React.createElement(
	                    'form',
	                    { action: "http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash,
	                        method: 'GET' },
	                    React.createElement(
	                        'button',
	                        { className: 'index-btn', type: 'submit' },
	                        'Download'
	                    )
	                )
	            )
	        );
	    }
	}

	class App extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            fileUpload: "",
	            videoName: "",
	            fileDescription: "",
	            activeVideo: "",
	            videoPaused: true
	        };

	        this.handleFileChange = this.handleFileChange.bind(this);
	        this.handleVideoNameChange = this.handleVideoNameChange.bind(this);
	        this.handleFileDescriptionChange = this.handleFileDescriptionChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleActiveVideoChange = this.handleActiveVideoChange.bind(this);
	        this.handleModalClick = this.handleModalClick.bind(this);
	    }

	    handleFileChange(event) {
	        this.setState({ fileUpload: event.target.value });
	    }
	    handleVideoNameChange(event) {
	        this.setState({ videoName: event.target.value });
	    }
	    handleFileDescriptionChange(event) {
	        this.setState({ fileDescription: event.target.value });
	    }
	    handleSubmit(event) {/* Validation */}

	    handleActiveVideoChange(event) {
	        this.setState({ activeVideo: event.target.className });
	        document.getElementById("video-player").load();
	        document.getElementById("modal-window").style.display = "block";
	    }

	    handleModalClick(event) {
	        var modalWindow = document.getElementById("modal-window");
	        var videoPlayer = document.getElementById("video-player");
	        if (event.target == modalWindow) {
	            this.setState({ activeVideo: "" });
	            this.setState({ videoPaused: true });
	            videoPlayer.pause();
	            document.getElementById("modal-window").style.display = "none";
	        } else if (event.target == videoPlayer) {
	            if (this.state.videoPaused) {
	                this.setState({ videoPaused: false });
	                videoPlayer.play();
	            } else {
	                this.setState({ videoPaused: true });
	                videoPlayer.pause();
	            }
	        }
	    }

	    render() {
	        var userVideos = this.props.videos.map(function (video) {
	            return React.createElement(UserVideo, {
	                key: video.vid,
	                vid: video.vid,
	                uid: video.uid,
	                filename: video.filename,
	                filehash: video.filehash,
	                videoname: video.videoname,
	                videoauthor: video.videoauthor,
	                description: video.description,
	                created: video.created,
	                onClick: this.handleActiveVideoChange });
	        }, this);

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'section',
	                { id: 'banner' },
	                React.createElement(
	                    'div',
	                    { className: 'form-page__wrapper-upload' },
	                    React.createElement(
	                        'div',
	                        { className: 'form-page__form-wrapper' },
	                        React.createElement(
	                            'div',
	                            { className: 'form-page__form-header' },
	                            React.createElement(
	                                'h2',
	                                { className: 'form-page__form-heading' },
	                                'Upload'
	                            )
	                        ),
	                        React.createElement(
	                            'form',
	                            { action: 'upload',
	                                method: 'POST',
	                                id: 'video-uploader',
	                                encType: 'multipart/form-data',
	                                className: 'form' },
	                            React.createElement(
	                                'div',
	                                { className: 'form__field-wrapper' },
	                                React.createElement(
	                                    'label',
	                                    { htmlFor: 'video' },
	                                    'Video File'
	                                ),
	                                React.createElement('input', { type: 'file',
	                                    value: this.state.fileUpload,
	                                    name: 'video',
	                                    id: 'video',
	                                    onChange: this.handleFileChange })
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'form__field-wrapper' },
	                                React.createElement('label', { className: 'form__field-label', htmlFor: 'videoname' }),
	                                React.createElement('input', { type: 'input',
	                                    className: 'form__field-input',
	                                    value: this.state.videoName,
	                                    name: 'videoname',
	                                    id: 'videoname',
	                                    placeholder: 'Video Name',
	                                    onChange: this.handleVideoNameChange })
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'form__field-wrapper' },
	                                React.createElement('label', { className: 'form__field-label', htmlFor: 'description' }),
	                                React.createElement('input', { type: 'input',
	                                    className: 'form__field-input',
	                                    value: this.state.fileDescription,
	                                    name: 'description',
	                                    id: 'description',
	                                    placeholder: 'Description',
	                                    onChange: this.handleFileDescriptionChange })
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'form__submit-btn-wrapper' },
	                                React.createElement(
	                                    'button',
	                                    { className: 'form__submit-btn', input: true, type: 'submit', value: 'Upload' },
	                                    'Upload'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: 'log_out' },
	                            'Log Out'
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { id: 'video-grid' },
	                userVideos
	            ),
	            React.createElement(
	                'div',
	                { id: 'modal-window', onClick: this.handleModalClick },
	                React.createElement(
	                    'video',
	                    { id: 'video-player', autoPlay: true, loop: true },
	                    React.createElement('source', { src: this.state.activeVideo, type: 'video/mp4' })
	                )
	            ),
	            React.createElement(
	                'footer',
	                { id: 'footer' },
	                React.createElement(
	                    'div',
	                    { id: 'inner' },
	                    React.createElement(
	                        'h2',
	                        null,
	                        ' Created by Team UHH'
	                    )
	                )
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(App, { videos: videos }), document.getElementById("react-app-container"));

/***/ }
]);