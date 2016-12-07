var React = require('react');
var ReactDOM = require('react-dom');
require('../stylesheets/main.scss');

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

    handleSubmit(event) { /* Validation */ }

    render() {
        return (
          <div className='form-page__wrapper'>
              <div className='form-page__form-wrapper'>
                  <div className='form-page__form-header'>
                      <h2 className='form-page__form-heading'>Register</h2>
                  </div>
                  <form action="confirmation" method="POST" id="registration-form" onSubmit={this.handleSubmit}>
                      <div className="form__field-wrapper">
                      <label className="form__field-label" htmlFor="username"></label>
                      <input className="form__field-input"
                             type="text"
                             value={this.state.username}
                             name="username"
                             id="username"
			     placeholder="Username"
                             autoCorrect="off"
                             autoCapitalize="off"
                             spellCheck="false"
                             onChange={this.handleUsernameChange} />
                      </div>
                      <div className="form__field-wrapper">
                      <label className="form__field-label" htmlFor="first-name"></label>
                      <input className="form__field-input"
                             type="text"
                             value={this.state.firstName}
                             name="first-name"
                             id="first-name"
			     placeholder="First Name"
                             autoCorrect="off"
                             autoCapitalize="off"
                             spellCheck="false"
                             onChange={this.handleFirstNameChange} />
                      </div>
                      <div className="form__field-wrapper">
                      <label className="form__field-label" htmlFor="username"></label>
                      <input className="form__field-input"
                             type="text"
                             value={this.state.lastName}
                             name="last-name"
                             id="last-name"
			     placeholder="Last Name"
                             autoCorrect="off"
                             autoCapitalize="off"
                             spellCheck="false"
                             onChange={this.handleLastNameChange} />
                      </div>
                      <div className="form__field-wrapper">
                      <label className="form__field-label" htmlFor="password"></label>
                      <input className="form__field-input"
                             value={this.state.password}
			     type="password"
                             name="password"
                             id="password"
			     placeholder="Password"
                             onChange={this.handlePasswordChange} />
                      </div>
                      <div className="form__submit-btn-wrapper">
                      <button className="form__submit-btn" type="submit" value="Submit">
			     Submit
		      </button>
                      </div>
                  </form>
		  <div className="form__register-wrapper">
                      <p><a href="login">Already have an account?</a></p>
 		  </div>
              </div>
          </div>
        );
    }
}
ReactDOM.render(<Register></Register>, document.getElementById('react-register-container'));
