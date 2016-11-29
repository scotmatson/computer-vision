webpackJsonp([3],[
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

	    handleSubmit(event) {/* Validation checking*/}

	    render() {
	        return React.createElement(
	            'form',
	            { action: 'confirmation', method: 'POST', id: 'registration-form', onSubmit: this.handleSubmit },
	            React.createElement(
	                'label',
	                { htmlFor: 'username' },
	                'Username:'
	            ),
	            React.createElement('input', { type: 'text',
	                value: this.state.username,
	                name: 'username',
	                id: 'username',
	                onChange: this.handleUsernameChange }),
	            React.createElement(
	                'label',
	                { htmlFor: 'first-name' },
	                'First Name'
	            ),
	            React.createElement('input', { type: 'text',
	                value: this.state.firstName,
	                name: 'first-name',
	                id: 'first-name',
	                onChange: this.handleFirstNameChange }),
	            React.createElement(
	                'label',
	                { htmlFor: 'last-name' },
	                'Last Name'
	            ),
	            React.createElement('input', { type: 'text',
	                value: this.state.lastName,
	                name: 'last-name',
	                id: 'last-name',
	                onChange: this.handleLastNameChange }),
	            React.createElement(
	                'label',
	                { htmlFor: 'password' },
	                'Password'
	            ),
	            React.createElement('input', { type: 'text',
	                value: this.state.password,
	                name: 'password',
	                id: 'password',
	                onChange: this.handlePasswordChange }),
	            React.createElement('input', { type: 'submit', value: 'Submit' })
	        );
	    }
	}
	ReactDOM.render(React.createElement(Register, null), document.getElementById('react-register-container'));

/***/ }
]);