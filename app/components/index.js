
//import Header from 'components/ui-Header';
//import Footer from 'components/ui-Footer';

var React = require('react');
var ReactDOM = require('react-dom');
require('../styles/style.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <iframe width="560" height="315" src={this.props.video}  allowFullScreen></iframe>
            </div>
        );
    }
}

ReactDOM.render(<App title="Facial Detection" video="https://www.youtube.com/embed/lKKxYwV6GV4"/>, document.getElementById("react-app-container"));
