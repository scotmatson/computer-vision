var React = require('react');
var ReactDOM = require('react-dom');
require('../stylesheets/main.scss');

class UserVideo extends React.Component {
    render() {
        return (
            <div className="video-tile">
                <img src="http://lorempixel.com/250/250/" alt="Video thumbnail"></img>
                <h2>{this.props.filename}</h2>
                <p>{this.props.description}</p>
                <button onClick={this.props.onClick}
                    id={"http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash}>
                    Watch
                </button>
            </div>
        )
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

    handleFileChange(event) { this.setState({fileUpload: event.target.value}); }
    handleFileDescriptionChange(event) { this.setState({fileDescription: event.target.value}); }
    handleSubmit(event) { /* Validation */ }

    handleActiveVideoChange(event) {
        this.setState({activeVideo: event.target.id });
        document.getElementById("video-player").load(); 
    }

    render() {
        var userVideos = this.props.videos.map(function(video) {
            return (<UserVideo
                        key={video.vid}
                        vid={video.vid}
                        uid={video.uid}
                        filename={video.filename}
                        filehash={video.filehash}
                        description={video.description}
                        created={video.created}
                        onClick={this.handleActiveVideoChange} />);}, this);

        return (
            <div>
                <header>
                    <button>Upload</button>
                </header>
                <form action="upload" 
                      method="POST" 
                      id="video-uploader" 
                      encType="multipart/form-data">
                    <label htmlFor="video">Video</label>
                    <input type="file"
                           value={this.state.fileUpload}
                           name="video"
                           id="video" 
                           onChange={this.handleFileChange} />
                    <label htmlFor="description">Description</label>
                    <input type="input" 
                           value={this.state.fileDescription}
                           name="description"
                           id="description"
                           onChange={this.handleFileDescriptionChange} />
                    <input type="submit" value="Upload"/>
                </form>
                <video id="video-player" controls>
                    <source src={this.state.activeVideo} type="video/mp4" /> 
                </video>
                <div id="video-grid">{userVideos}</div>     
            </div>
        );
    }
}
ReactDOM.render(<App videos={videos}></App>, document.getElementById("react-app-container"));
