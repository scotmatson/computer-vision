var React = require('react');
var ReactDOM = require('react-dom');
require('../stylesheets/main.scss');

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
        this.setState({fileUpload: event.target.value});
        var form = document.getElementById("video-uploader");
        form.submit()
    
        // TODO check file type, this is dependent upon the files we are able to parse
        // TODO save file to server
        // TODO store to DB, vid, path, name.ext... meta?
        // TODO need to ensure uniqueness so files are not overridden
        // TODO ideally we'd like to check to ensure the file is safe! i.e., not malicious
    }

    render() {
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
                    <source src="http://dcdq4z03ve68v.cloudfront.net/testmovie.mp4"
                            type="video/mp4" /> 
                </video>
            </div>
        );
    }
}
ReactDOM.render(<App></App>, document.getElementById("react-app-container"));
