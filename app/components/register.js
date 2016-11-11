var React = require('react');
var ReactDOM = require('react-dom');
require('../process/sass/style.scss');

class Register extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            username:  '',
            firstName: '',
            lastName:  '',
            password:  ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event)  { this.setState({username:  event.target.value}); }
    handleFirstNameChange(event) { this.setState({firstName: event.target.value}); }
    handleLastNameChange(event)  { this.setState({lastName:  event.target.value}); }
    handlePasswordChange(event)  { this.setState({password:  event.target.value}); }
    
    handleSubmit(event) {
        alert("A user was registered: " + 
            this.state.username + '' +
            this.state.firstName + '' +
            this.state.lastName + '' +
            this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username}
                    onChange={this.handleUsernameChange}/>
                <input type="text" value={this.state.firstName}
                    onChange={this.handleFirstNameChange}/>
                <input type="text" value={this.state.lastName}
                    onChange={this.handleLastNameChange}/>
                <input type="text" value={this.state.password}
                    onChange={this.handlePasswordChange}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

ReactDOM.render(<Register></Register>, document.getElementById('react-register-container'));
