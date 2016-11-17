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
    
    handleSubmit(event) { /* Validation checking*/ }

    render() {
        return (
            <form action="confirmation" method="POST" id="registration-form" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                       value={this.state.username} 
                       name="username"
                       id="username" 
                       onChange={this.handleUsernameChange} />
                <label htmlFor="first-name">First Name</label>
                <input type="text" 
                       value={this.state.firstName} 
                       name="first-name"
                       id="first-name" 
                       onChange={this.handleFirstNameChange} />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" 
                       value={this.state.lastName} 
                       name="last-name"
                       id="last-name" 
                       onChange={this.handleLastNameChange} />
                <label htmlFor="password">Password</label>
                <input type="text" 
                       value={this.state.password} 
                       name="password"
                       id="password" 
                       onChange={this.handlePasswordChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<Register></Register>, document.getElementById('react-register-container'));
