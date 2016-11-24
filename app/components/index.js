var React = require('react');
var ReactDOM = require('react-dom');

require('../process/sass/style.scss');

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
                <h1>{this.props.title}</h1>
                <iframe width="560" height="315" src={this.props.video}  allowFullScreen></iframe>
            </div>
        );
    }
}
ReactDOM.render(<App title="Facial Detection" video="https://www.youtube.com/embed/lKKxYwV6GV4"/>, document.getElementById("react-app-container"));
