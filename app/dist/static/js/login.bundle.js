webpackJsonp([2],[
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
	            password: '',
	            authenticated: authenticated
	        };

	        this._changeUsername = this._changeUsername.bind(this);
	        this._changePassword = this._changePassword.bind(this);
	        this._onSubmit = this._onSubmit.bind(this);
	    }

	    _changeUsername(event) {
	        this.setState({ username: event.target.value });
	    }
	    _changePassword(event) {
	        this.setState({ password: event.target.value });
	    }

	    _onSubmit(event) {
	        var recaptcha = document.getElementById("g-recaptcha-response").value;
	        if (recaptcha == "") {
	            event.preventDefault();
	        }
	    }

	    render() {
	        return React.createElement(
	            "div",
	            { className: "form-page__wrapper" },
	            React.createElement(
	                "div",
	                { className: "form-page__form-wrapper" },
	                React.createElement(
	                    "div",
	                    { className: "form-page__form-header" },
	                    React.createElement(
	                        "h2",
	                        { className: "form-page__form-heading" },
	                        "Login"
	                    )
	                ),
	                React.createElement(
	                    "form",
	                    { action: "authenticate", method: "POST", className: "form", onSubmit: this._onSubmit },
	                    React.createElement(
	                        "div",
	                        { className: "form__field-wrapper" },
	                        React.createElement(
	                            "label",
	                            { className: "form__field-label", htmlFor: "username" },
	                            "Username"
	                        ),
	                        React.createElement("input", { className: "form__field-input",
	                            type: "text",
	                            value: this.state.username,
	                            id: "username",
	                            name: "username",
	                            placeholder: "Donald.Trump",
	                            autoCorrect: "off",
	                            autoCapitalize: "off",
	                            spellCheck: "false",
	                            onChange: this._changeUsername })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "form__field-wrapper" },
	                        React.createElement(
	                            "label",
	                            { className: "form__field-label", htmlFor: "password" },
	                            "Password"
	                        ),
	                        React.createElement("input", { className: "form__field-input",
	                            id: "password",
	                            type: "password",
	                            name: "password",
	                            value: this.state.password,
	                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
	                            onChange: this._changePassword })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "form__submit-btn-wrapper" },
	                        React.createElement("input", { type: "submit", value: "Submit" })
	                    ),
	                    React.createElement("div", { className: "g-recaptcha",
	                        "data-sitekey": "6Ldh_QsUAAAAAIHD4gYCB3gK5UgsZRqiebcV7E9Z" })
	                ),
	                React.createElement(
	                    "p",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "register" },
	                        "Register New User"
	                    )
	                )
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(Login, { authenticated: authenticated }), document.getElementById("react-login-container"));

/***/ }
]);