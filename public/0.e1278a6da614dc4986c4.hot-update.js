webpackHotUpdate(0,{

/***/ 634:
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
	  _component: {},
	  _component2: {},
	  _component3: {}
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
	  getInitialState: function getInitialState() {
	    return {
	      menu: this.props.menu,
	      smShow: false,
	      editMenu: {
	        name: "",
	        type: "",
	        price: 0,
	        id: "",
	        picUrl: "",
	        resId: ""
	      }
	    };
	  },
	  showModal: function showModal(item) {
	    this.setState({ editMenu: item });
	    this.setState({ smShow: true });

	    console.log('edit function ', item);
	  },
	  render: function render() {
	    var _this2 = this;

	    var smClose = function smClose() {
	      return _this2.setState({ smShow: false });
	    };
	    var menuItems = this.props.menu.map(function (item) {
	      return _react3.default.createElement(
	        'tr',
	        { key: item.id },
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          item.name
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          item.type
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          item.price
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          _react3.default.createElement(_reactBootstrap.Image, { src: item.picUrl, rounded: true, responsive: true })
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react3.default.createElement('button', { onClick: _this2.showModal.bind(null, item), className: 'btn btn-info fa fa-pencil-square-o' })
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react3.default.createElement('button', { onClick: _this2.deleteMenu, className: 'btn btn-danger fa fa-trash' })
	        )
	      );
	    });
	    return _react3.default.createElement(
	      _reactBootstrap.Table,
	      { className: 'container', hover: true },
	      _react3.default.createElement(
	        'thead',
	        null,
	        _react3.default.createElement(
	          'tr',
	          null,
	          _react3.default.createElement(
	            'th',
	            { className: 'col-xs-2' },
	            'Name'
	          ),
	          _react3.default.createElement(
	            'th',
	            { className: 'col-xs-2' },
	            'Type'
	          ),
	          _react3.default.createElement(
	            'th',
	            { className: 'col-xs-1' },
	            'Price $'
	          ),
	          _react3.default.createElement(
	            'th',
	            { className: 'col-xs-2' },
	            'Picture'
	          ),
	          _react3.default.createElement(
	            'th',
	            { className: 'col-xs-1' },
	            'Edit'
	          ),
	          _react3.default.createElement(
	            'th',
	            { className: 'col-xs-1' },
	            'Delete'
	          )
	        )
	      ),
	      _react3.default.createElement(
	        'tbody',
	        null,
	        menuItems
	      ),
	      _react3.default.createElement(MySmallModal, { show: this.state.smShow, onHide: smClose, menu: this.state.editMenu })
	    );
	  }
	}));

	var MySmallModal = _wrapComponent('_component3')(_react3.default.createClass({
	  displayName: 'MySmallModal',
	  getInitialState: function getInitialState() {
	    // let {name, picUrl, price, type} = this.props.menu
	    return {
	      name: '',
	      price: 0,
	      type: '',
	      picUrl: '',
	      id: ''
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _props$menu = this.props.menu;
	    var id = _props$menu.id;
	    var name = _props$menu.name;
	    var picUrl = _props$menu.picUrl;
	    var price = _props$menu.price;
	    var type = _props$menu.type;

	    console.log(this.props.menu);
	    // this.setState({id: id})
	    // this.setState({name: name})
	    // this.setState({price: price})
	    // this.setState({type: type})
	    // this.setState({picUrl: picUrl})
	  },
	  changeName: function changeName(e) {
	    this.setState({ name: e.target.value });
	  },
	  changePrice: function changePrice(e) {
	    this.setState({ price: e.target.value });
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
	        _reactBootstrap.Modal.Body,
	        null,
	        _react3.default.createElement('input', { type: 'text', placeholder: 'Name', value: this.state.name, onChange: this.changeName }),
	        _react3.default.createElement('input', { type: 'number', value: this.state.price, onChange: this.changePrice })
	      ),
	      _react3.default.createElement(
	        _reactBootstrap.Modal.Footer,
	        null,
	        _react3.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.props.onHide },
	          'Save Changes'
	        ),
	        _react3.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.props.onHide },
	          'Close'
	        )
	      )
	    );
	  }
	}));

	exports.default = MenuFetch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(176)(module)))

/***/ }

})