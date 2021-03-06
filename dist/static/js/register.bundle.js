webpackJsonp([4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	__webpack_require__(172);

	class Register extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            username: '',
	            firstName: '',
	            lastName: '',
	            password: ''
	        };

	        this.handleUsernameChange = this.handleUsernameChange.bind(this);
	        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	        this.handleLastNameChange = this.handleLastNameChange.bind(this);
	        this.handlePasswordChange = this.handlePasswordChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	    }

	    handleUsernameChange(event) {
	        this.setState({ username: event.target.value });
	    }
	    handleFirstNameChange(event) {
	        this.setState({ firstName: event.target.value });
	    }
	    handleLastNameChange(event) {
	        this.setState({ lastName: event.target.value });
	    }
	    handlePasswordChange(event) {
	        this.setState({ password: event.target.value });
	    }

	    handleSubmit(event) {/* Validation */}

	    render() {
	        return React.createElement(
	            'div',
	            { className: 'form-page__wrapper' },
	            React.createElement(
	                'div',
	                { className: 'form-page__form-wrapper' },
	                React.createElement(
	                    'div',
	                    { className: 'form-page__form-header' },
	                    React.createElement(
	                        'h2',
	                        { className: 'form-page__form-heading' },
	                        'Register'
	                    )
	                ),
	                React.createElement(
	                    'form',
	                    { action: 'confirmation', method: 'POST', id: 'registration-form', onSubmit: this.handleSubmit },
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement('label', { className: 'form__field-label', htmlFor: 'username' }),
	                        React.createElement('input', { className: 'form__field-input',
	                            type: 'text',
	                            value: this.state.username,
	                            name: 'username',
	                            id: 'username',
	                            placeholder: 'Username',
	                            autoCorrect: 'off',
	                            autoCapitalize: 'off',
	                            spellCheck: 'false',
	                            onChange: this.handleUsernameChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement('label', { className: 'form__field-label', htmlFor: 'first-name' }),
	                        React.createElement('input', { className: 'form__field-input',
	                            type: 'text',
	                            value: this.state.firstName,
	                            name: 'first-name',
	                            id: 'first-name',
	                            placeholder: 'First Name',
	                            autoCorrect: 'off',
	                            autoCapitalize: 'off',
	                            spellCheck: 'false',
	                            onChange: this.handleFirstNameChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement('label', { className: 'form__field-label', htmlFor: 'username' }),
	                        React.createElement('input', { className: 'form__field-input',
	                            type: 'text',
	                            value: this.state.lastName,
	                            name: 'last-name',
	                            id: 'last-name',
	                            placeholder: 'Last Name',
	                            autoCorrect: 'off',
	                            autoCapitalize: 'off',
	                            spellCheck: 'false',
	                            onChange: this.handleLastNameChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement('label', { className: 'form__field-label', htmlFor: 'password' }),
	                        React.createElement('input', { className: 'form__field-input',
	                            value: this.state.password,
	                            type: 'password',
	                            name: 'password',
	                            id: 'password',
	                            placeholder: 'Password',
	                            onChange: this.handlePasswordChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__submit-btn-wrapper' },
	                        React.createElement(
	                            'button',
	                            { className: 'form__submit-btn', type: 'submit', value: 'Submit' },
	                            'Submit'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'form__register-wrapper' },
	                    React.createElement(
	                        'p',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: 'login' },
	                            'Already have an account?'
	                        )
	                    )
	                )
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(Register, null), document.getElementById('react-register-container'));

/***/ }
]);