webpackHotUpdate(0,{

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(177);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(182);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(183);

	var _index6 = _interopRequireDefault(_index5);

	var _reactBootstrap = __webpack_require__(319);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/EditModal.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/EditModal.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var EditModal = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'EditModal',
	  getInitialState: function getInitialState() {
	    return {
	      name: "",
	      price: "",
	      type: "",
	      picUrl: "",
	      id: ""
	    };
	  },
	  componentWillRecieveProps: function componentWillRecieveProps() {
	    console.log(this.props.menu);
	    var _props$menu = this.props.menu;
	    var id = _props$menu.id;
	    var name = _props$menu.name;
	    var picUrl = _props$menu.picUrl;
	    var price = _props$menu.price;
	    var type = _props$menu.type;

	    this.replaceState({ name: name, price: price, type: type, picUrl: picUrl, id: id });
	  },
	  changeName: function changeName(e) {
	    this.setState({ name: e.target.value });
	  },
	  changePrice: function changePrice(e) {
	    this.setState({ price: e.target.value });
	  },
	  changeType: function changeType(e) {
	    this.setState({ type: e.target.value });
	  },
	  changePicUrl: function changePicUrl(e) {
	    this.setState({ picUrl: e.target.value });
	  },
	  onEdit: function onEdit() {
	    this.props.onSubmit(this.state);
	  },
	  render: function render() {
	    var _props$menu2 = this.props.menu;
	    var id = _props$menu2.id;
	    var name = _props$menu2.name;
	    var picUrl = _props$menu2.picUrl;
	    var price = _props$menu2.price;
	    var type = _props$menu2.type;


	    return _react3.default.createElement(
	      _reactBootstrap.Modal,
	      { show: this.props.show, onHide: this.props.onHide, bsSize: 'small', 'aria-labelledby': 'contained-modal-title-sm' },
	      _react3.default.createElement(
	        _reactBootstrap.Modal.Header,
	        { closeButton: true },
	        _react3.default.createElement(
	          _reactBootstrap.Modal.Title,
	          { id: 'contained-modal-title-sm' },
	          'Edit ',
	          name
	        )
	      ),
	      _react3.default.createElement(
	        'form',
	        null,
	        _react3.default.createElement(
	          _reactBootstrap.FormGroup,
	          null,
	          _react3.default.createElement(
	            _reactBootstrap.Modal.Body,
	            null,
	            _react3.default.createElement('input', { type: 'text', value: this.state.name, onChange: this.changeName }),
	            _react3.default.createElement('input', { type: 'text', value: this.state.price, onChange: this.changePrice }),
	            _react3.default.createElement('input', { type: 'text', value: this.state.type, onChange: this.changeType }),
	            _react3.default.createElement('input', { type: 'text', value: this.state.picUrl, onChange: this.changePicUrl }),
	            _react3.default.createElement(_reactBootstrap.Image, { src: this.state.picUrl, rounded: true, responsive: true })
	          ),
	          _react3.default.createElement(
	            _reactBootstrap.Modal.Footer,
	            null,
	            _react3.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.onEdit },
	              'Save Changes'
	            ),
	            _react3.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.props.onHide },
	              'Close'
	            )
	          )
	        )
	      )
	    );
	  }
	}));

	exports.default = EditModal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(176)(module)))

/***/ }

})