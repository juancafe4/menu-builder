webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _Splash = __webpack_require__(573);

	var _Splash2 = _interopRequireDefault(_Splash);

	var _Home = __webpack_require__(635);

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRouter = __webpack_require__(574);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const App = React.createClass({
	//   render(){
	//     return(
	//       // splash page ask for the name or new name
	//       <div className="container">
	//         <Splash />
	//       </div>
	//       )
	//   }
	// })

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Splash2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/home/:id', component: _Home2.default })
	), document.getElementById('root'));

/***/ }
])