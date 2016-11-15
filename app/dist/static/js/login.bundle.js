webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);

	__webpack_require__(172);

	class Login extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            username: '',
	            password: ''
	        };

	        this._onSubmit = this._onSubmit.bind(this);
	        this._changeUsername = this._changeUsername.bind(this);
	        this._changePassword = this._changePassword.bind(this);
	    }

	    _changeUsername(event) {
	        this.setState({ username: event.target.value });
	    }
	    _changePassword(event) {
	        this.setState({ password: event.target.value });
	    }

	    _onSubmit(event) {
	        alert("OMFG TRUMP IS GONNA BE PRESIDENT LOL");
	        event.preventDefault();
	    }

	    render() {
	        return React.createElement(
	            'form',
	            { className: 'form', onSubmit: this._onSubmit },
	            React.createElement(
	                'div',
	                { className: 'form__field-wrapper' },
	                React.createElement(
	                    'label',
	                    { className: 'form__field-label', htmlFor: 'username' },
	                    'Username'
	                ),
	                React.createElement('input', { className: 'form__field-input',
	                    type: 'text',
	                    id: 'username',
	                    placeholder: 'Donald.Trump',
	                    autoCorrect: 'off',
	                    autoCapitalize: 'off',
	                    spellCheck: 'false' })
	            ),
	            React.createElement(
	                'div',
	                { className: 'form__field-wrapper' },
	                React.createElement(
	                    'label',
	                    { className: 'form__field-label', htmlFor: 'password' },
	                    'Password'
	                ),
	                React.createElement('input', { className: 'form__field-input',
	                    id: 'password',
	                    type: 'password'
	                    //value={this.props.data.password}
	                    , placeholder: '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022',
	                    onChange: this._changePassword })
	            ),
	            React.createElement(
	                'div',
	                { className: 'form__submit-btn-wrapper' },
	                React.createElement('input', { type: 'submit', value: 'Submit' })
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(Login, null), document.getElementById('react-login-container'));

/***/ }
]);