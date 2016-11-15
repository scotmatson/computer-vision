var React = require('react');
var ReactDOM = require('react-dom');

require('../process/sass/style.scss');

class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this._onSubmit = this._onSubmit.bind(this)
        this._changeUsername = this._changeUsername.bind(this)
        this._changePassword = this._changePassword.bind(this)
    }


    _changeUsername (event) { this.setState({username:  event.target.value}); }
    _changePassword (event) { this.setState({password:  event.target.value}); }

    _onSubmit (event) {
        alert("OMFG TRUMP IS GONNA BE PRESIDENT LOL");
        event.preventDefault();
    }

    render () {
        return (
            <form className='form' onSubmit={this._onSubmit}>
                <div className='form__field-wrapper'>
                    <label className='form__field-label' htmlFor='username'>Username</label>
                    <input className='form__field-input'
                           type='text'
                           id='username'
                           placeholder='Donald.Trump'
                           autoCorrect='off'
                           autoCapitalize='off'
                           spellCheck='false' />
                </div>
                <div className='form__field-wrapper'>
                    <label className='form__field-label' htmlFor='password'>Password</label>
                    <input className='form__field-input'
                           id='password'
                           type='password'
                           //value={this.props.data.password}
                           placeholder='••••••••••'
                           onChange={this._changePassword} />
                </div>
                <div className='form__submit-btn-wrapper'>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}
ReactDOM.render(<Login/>, document.getElementById('react-login-container'))
