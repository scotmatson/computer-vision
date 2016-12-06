var React = require("react");
var ReactDOM = require("react-dom");

require("../stylesheets/main.scss");

class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            authenticated : authenticated
        };

        this._changeUsername = this._changeUsername.bind(this)
        this._changePassword = this._changePassword.bind(this)
        this._onSubmit = this._onSubmit.bind(this)
    }

    _changeUsername(event) { this.setState({username: event.target.value}); }
    _changePassword(event) { this.setState({password: event.target.value}); }

    _onSubmit(event) {
        var recaptcha = document.getElementById("g-recaptcha-response").value;
        if (recaptcha == "") { event.preventDefault(); }
    }

    render () {
        return (
          <div className='form-page__wrapper'>
              <div className='form-page__form-wrapper'>
                  <div className='form-page__form-header'>
                      <h2 className='form-page__form-heading'>Login</h2>
                  </div>
                  <form action="authenticate" method="POST" className="form" onSubmit={this._onSubmit}>
                  <div className="form__field-wrapper">
                  <label className="form__field-label" htmlFor="username">Username</label>
                  <input className="form__field-input"
                         type="text"
                         value={this.state.username}
                         id="username"
                         name="username"
                         placeholder="Donald.Trump"
                         autoCorrect="off"
                         autoCapitalize="off"
                         spellCheck="false"
                         onChange={this._changeUsername} />
                  </div>
                  <div className="form__field-wrapper">
                  <label className="form__field-label" htmlFor="password">Password</label>
                  <input className="form__field-input"
                         id="password"
                         type="password"
                         name="password"
                         value={this.state.password}
                         placeholder="••••••••••"
                         onChange={this._changePassword} />
                  </div>
                  <div className="form__submit-btn-wrapper">
                  <button className="form__submit-btn" type="submit" value="Submit">
                         Submit
                  </button>
                  </div>
                  <div className="g-recaptcha"
                         data-sitekey="6Ldh_QsUAAAAAIHD4gYCB3gK5UgsZRqiebcV7E9Z">
                  </div>
                  </form>
                  <div className="form__register-wrapper">
                         <p><a href="register">Register New User</a></p>
                  </div>
              </div>
          </div>
        )
    }
}
ReactDOM.render(<Login authenticated={authenticated}></Login>, document.getElementById("react-login-container"))

