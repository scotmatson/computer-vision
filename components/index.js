var React = require('react');
var ReactDOM = require('react-dom');
require('../stylesheets/main.scss');

class UserVideo extends React.Component {
    render() {
        return (
            <div className="video-tile">
                <img src={"https://frames160.s3.amazonaws.com/" + this.props.filehash}
                     onClick={this.props.onClick}
                     className={"http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash}
                     alt="Video thumbnail">
                </img>
                <h2>{this.props.videoname}</h2>
                <p>{this.props.description}</p>
                <form action="delete" method="POST">
                    <input type="hidden" value={this.props.filehash} name="delete" />
                    <button type="submit">Delete</button>
                </form>
                <button onClick={this.props.onClick}
                    className={"http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash}>
                    Watch
                </button>
                <form action={"http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash}
                      method="GET">
                    <button type="submit">Download</button>
                </form>
            </div>
        )
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

    handleFileChange(event) { this.setState({fileUpload: event.target.value}); }
    handleVideoNameChange(event) { this.setState({videoName: event.target.value}); }
    handleFileDescriptionChange(event) { this.setState({fileDescription: event.target.value}); }
    handleSubmit(event) { /* Validation */ }

    handleActiveVideoChange(event) {
        this.setState({activeVideo: event.target.className});
        document.getElementById("video-player").load(); 
        document.getElementById("modal-window").style.display = "block";
    }

    handleModalClick(event) {
        var modalWindow = document.getElementById("modal-window");
        var videoPlayer = document.getElementById("video-player");
        if (event.target == modalWindow) {
            this.setState({activeVideo: ""});
            this.setState({videoPaused: true});
            videoPlayer.pause();
            document.getElementById("modal-window").style.display = "none";
        }
        else if (event.target == videoPlayer) {
            if (this.state.videoPaused) {
		this.setState({videoPaused: false});
                videoPlayer.play();
            }
            else {
                this.setState({videoPaused: true});
                videoPlayer.pause();
            }
        }
    }

    render() {
        var userVideos = this.props.videos.map(function(video) {
            return (<UserVideo
                        key={video.vid}
                        vid={video.vid}
                        uid={video.uid}
                        filename={video.filename}
                        filehash={video.filehash}
                        videoname={video.videoname}
                        description={video.description}
                        created={video.created}
                        onClick={this.handleActiveVideoChange} />);}, this);

        return (
            <div>
                <header id="banner">
                    <button>Upload</button>
                    <a href="log_out">Log Out</a>
                </header>
                <form action="upload" 
                      method="POST" 
                      id="video-uploader" 
                      encType="multipart/form-data">
                    <label htmlFor="video">Video File</label>
                    <input type="file"
                           value={this.state.fileUpload}
                           name="video"
                           id="video" 
                           onChange={this.handleFileChange} />
                    <label htmlFor="videoname">Video Name</label>
                    <input type="input" 
                           value={this.state.videoName}
                           name="videoname"
                           id="videoname"
                           onChange={this.handleVideoNameChange} />
                    <label htmlFor="description">Description</label>
                    <input type="input" 
                           value={this.state.fileDescription}
                           name="description"
                           id="description"
                           onChange={this.handleFileDescriptionChange} />
                    <input type="submit" value="Upload"/>
                </form>
                <div id="video-grid">{userVideos}</div>     
                <div id="modal-window" onClick={this.handleModalClick}>
                    <video id="video-player" autoPlay loop>
                        <source src={this.state.activeVideo} type="video/mp4" /> 
                    </video>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App videos={videos}></App>, document.getElementById("react-app-container"));
