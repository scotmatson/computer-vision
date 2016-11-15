webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);

	__webpack_require__(172);

	class Account extends React.Component {

	    render() {
	        return React.createElement(
	            'tr',
	            null,
	            React.createElement(
	                'td',
	                null,
	                this.props.uid
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.username
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.firstname
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.lastname
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.lastlogin
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.ip
	            )
	        );
	    }
	}

	class Admin extends React.Component {
	    render() {
	        var userAccounts = this.props.users.map(function (user) {
	            return React.createElement(Account, {
	                key: user.uid,
	                uid: user.uid,
	                username: user.username,
	                firstname: user.firstname,
	                lastname: user.lastname,
	                lastlogin: user.lastlogin,
	                ip: user.ip });
	        });

	        return React.createElement(
	            'table',
	            null,
	            React.createElement(
	                'thead',
	                null,
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'th',
	                        null,
	                        'uid'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'username'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'firstname'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'lastname'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'lastlogin'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'ip'
	                    )
	                )
	            ),
	            React.createElement(
	                'tbody',
	                null,
	                userAccounts
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(Admin, { users: users }), document.getElementById('react-admin-container'));

/***/ }
]);