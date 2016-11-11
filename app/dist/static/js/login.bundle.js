webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	//import Header from 'components/ui-Header';
	//import Footer from 'components/ui-Footer';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	__webpack_require__(172);

	class Login extends React.Component {
	    render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h1',
	                null,
	                this.props.title
	            ),
	            React.createElement('iframe', { width: '560', height: '315', src: this.props.video, allowFullScreen: true })
	        );
	    }
	}
	ReactDOM.render(React.createElement(Login, { title: 'Facial Detection', video: 'https://www.youtube.com/embed/VnwyT6AAk0w' }), document.getElementById("react-login-container"));

/***/ }
]);