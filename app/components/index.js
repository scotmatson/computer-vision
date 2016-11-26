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
