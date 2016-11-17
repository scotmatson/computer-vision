var React = require('react');
var ReactDOM = require('react-dom');

require('../process/sass/style.scss');

class Confirmation extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}
ReactDOM.render(<Confirmation></Confirmation>, document.getElementById('react-confirm-container'));
