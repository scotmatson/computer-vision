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
                <p>Curated by {this.props.videoauthor}</p>
                <p>{this.props.description}</p>
		<div className ="form__submit-btn-wrapper">
                    <form action="delete" method="POST">
                        <input type="hidden" value={this.props.filehash} name="delete" />
		   
                    <button className="index-btn" type="submit">Delete</button>
                    </form>
		    <div className="divider" />
                    <form action={"http://dcdq4z03ve68v.cloudfront.net/" + this.props.filehash}
                      method="GET">
                    <button className="index-btn" type="submit">Download</button>
		    
                    </form>
		</div>
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
                        videoauthor={video.videoauthor}
                        description={video.description}
                        created={video.created}
                        onClick={this.handleActiveVideoChange} />);}, this);

        return (
            <div>
                <section id ="banner">
		    <div className="form-page__wrapper-upload">

			<video autoplay loop id="video-background" muted>
			  <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
			</video>

			<script> 
    				document.getElementById('vid').play(); 
			</script> 

			<div className='form-page__form-wrapper'> 
			    <div className='form-page__form-header'>
				<h2 className='form-page__form-heading'>Upload</h2>
			    </div>
                    <form action="upload" 
                           method="POST" 
                           id="video-uploader" 
                           encType="multipart/form-data"
			   className="form">
		    <div className="form__field-wrapper">
                    <label htmlFor="video">Video File</label>
                    <input type="file"
                           value={this.state.fileUpload}
                           name="video"
                           id="video" 
                           onChange={this.handleFileChange} />
		    </div>
		    <div className="form__field-wrapper">
                    <label className="form__field-label" htmlFor="videoname"></label>
                    <input type="input" 
			   className="form__field-input"
                           value={this.state.videoName}
                           name="videoname"
                           id="videoname"
			   placeholder="Video Name"
                           onChange={this.handleVideoNameChange} />
		    </div>
		    <div className="form__field-wrapper">
                    <label className="form__field-label" htmlFor="description"></label>
                    <input type="input" 
			   className="form__field-input"
                           value={this.state.fileDescription}
                           name="description"
                           id="description"
			   placeholder="Description"
                           onChange={this.handleFileDescriptionChange} />
		    </div>
		    <div className="form__submit-btn-wrapper">
                    <button className="form__submit-btn" input type="submit" value="Upload">
			   Upload
		    </button>
		    </div>
                    </form>
		    </div>
		</div>
	   	</section>
                <p><a href="log_out">Log Out</a></p>
                <div id="video-grid">{userVideos}</div>     
                <div id="modal-window" onClick={this.handleModalClick}>
                    <video id="video-player" autoPlay loop>
                        <source src={this.state.activeVideo} type="video/mp4" /> 
                    </video>
                </div>
		
		<footer id="footer">
		    <div id="inner">
		    <h2> Created by Team UHH</h2>
		    <p> I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I’m fucking retarded but I don’t care, I’m beautiful. I’m having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me “Apache” and respect my right to kill from above and kill needlessly. If you can’t accept me you’re a heliphobe and need to check your vehicle privilege. Thank you for being so understanding. </p>
		    </div>
		</footer>
            </div>
        );
    }
}
ReactDOM.render(<App videos={videos}></App>, document.getElementById("react-app-container"));
