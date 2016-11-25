webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);

	__webpack_require__(172);

	class UserAccount extends React.Component {
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
	                this.props.created
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.ip
	            )
	        );
	    }
	}

	class UserVideo extends React.Component {
	    render() {
	        return React.createElement(
	            'tr',
	            null,
	            React.createElement(
	                'td',
	                null,
	                this.props.vid
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.uid
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.filename
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.created
	            )
	        );
	    }
	}

	class Admin extends React.Component {
	    render() {
	        var userAccounts = this.props.users.map(function (user) {
	            return React.createElement(UserAccount, {
	                key: user.uid,
	                uid: user.uid,
	                username: user.username,
	                firstname: user.firstname,
	                lastname: user.created,
	                created: user.created,
	                ip: user.ip });
	        });

	        var userVideos = this.props.videos.map(function (video) {
	            return React.createElement(UserVideo, {
	                key: video.vid,
	                vid: video.vid,
	                uid: video.uid,
	                filename: video.filename,
	                created: video.created });
	        });

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
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
	                            'created'
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
	            ),
	            React.createElement(
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
	                            'vid'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'uid'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'filename'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'created'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'tbody',
	                    null,
	                    userVideos
	                )
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(Admin, { users: users, videos: videos }), document.getElementById('react-admin-container'));

/***/ }
]);