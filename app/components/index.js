var React = require('react');
var ReactDOM = require('react-dom');
require('../stylesheets/main.scss');


class UserVideo extends React.Component {
    render() {
        return (
            <li onClick={this.props.onClick}
                id={"http://dcdq4z03ve68v.cloudfront.net/" + this.props.filename}>
                {this.props.filename}
            </li>
        )
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

    handleFileChange(event) {document.getElementById("video-uploader").submit();}
    handleActiveVideoChange(event) {this.setState({activeVideo: event.target.id});}

    render() {
        var userVideos = this.props.videos.map(function(video) {
            return (<UserVideo
                        key={video.vid}
                        vid={video.vid}
                        uid={video.uid}
                        filename={video.filename}
                        created={video.created}
                        onClick={this.handleActiveVideoChange} />);}, this);

        return (
            <div>
                <form action="upload" 
                      method="POST" 
                      id="video-uploader" 
                      encType="multipart/form-data">
                    <label htmlFor="video">Upload</label>
                    <input type="file"
                           id="video" 
                           name="video"
                           onChange={this.handleFileChange} />
                </form>
                <video id="video-player" controls>
                    <source src={this.state.activeVideo} type="video/mp4" /> 
                </video>
                <ul>{userVideos}</ul>     
            </div>
        );
    }
}
ReactDOM.render(<App videos={videos}></App>, document.getElementById("react-app-container"));
