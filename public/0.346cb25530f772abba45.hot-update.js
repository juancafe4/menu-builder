webpackHotUpdate(0,{

/***/ 0:
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
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', compoment: _Home2.default })
	), document.getElementById('root'));

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(181);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(182);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/Home.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/Home.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	//destructuring in the home
	// const MenuFetch = Rect.createClass({
	//   getInitialState(){
	//     return{
	//       restId: '886470d3-fe61-4f95-9883-15e12c39430c',
	//       //this.props.restId
	//     }
	//   },
	//   render(){
	//     return (
	//       <div>
	//         <h1>I am the home</h1>
	//       </div>
	//     )
	//   }
	// })

	var Home = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Home',
	  getInitialState: function getInitialState() {
	    menuItems: '';
	  },
	  render: function render() {
	    return _react3.default.createElement(
	      'h1',
	      null,
	      'I am the home'
	    );
	  }
	}));

	exports.default = Home;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})