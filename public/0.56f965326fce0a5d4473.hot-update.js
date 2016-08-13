webpackHotUpdate(0,{

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

	var _Menulist = __webpack_require__(638);

	var _Menulist2 = _interopRequireDefault(_Menulist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {},
	  _component2: {}
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
	var MenuFetch = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'MenuFetch',
	  getInitialState: function getInitialState() {
	    return {
	      restId: this.props.params.id,
	      menu: []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var url = '/api/menu';
	    fetch(url).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {

	      var newMenu = data.filter(function (data) {
	        return _this.props.params.id === data.resId;
	      });
	      _this.setState({ menu: newMenu });
	    }).catch(function (err) {
	      console.log(err);
	    });
	  },
	  render: function render() {
	    if (this.state.menu.length) {
	      return _react3.default.createElement(Home, { menu: this.state.menu });
	    } else return _react3.default.createElement(
	      'h1',
	      null,
	      'Loading...'
	    );
	  }
	}));

	var Home = _wrapComponent('_component2')(_react3.default.createClass({
	  displayName: 'Home',

	  // getInitialState(){
	  //   return {
	  //     menu: this.props.menu
	  //   }
	  // },
	  render: function render() {
	    return _react3.default.createElement(
	      'table',
	      null,
	      _react3.default.createElement(_Menulist2.default, { menu: this.props.menu })
	    );
	  }
	}));

	exports.default = MenuFetch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})