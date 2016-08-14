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

	var _AddModal = __webpack_require__(635);

	var _AddModal2 = _interopRequireDefault(_AddModal);

	var _EditModal = __webpack_require__(636);

	var _EditModal2 = _interopRequireDefault(_EditModal);

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
	      menu: [],
	      restaurant: {},
	      addShow: false
	    };
	  },
	  updateMenu: function updateMenu(newItem) {
	    var newMenu = this.state.menu.map(function (item) {
	      if (item.id === newItem.id) {
	        return newItem;
	      } else {
	        return item;
	      }
	    });
	    this.setState({ menu: newMenu });
	  },
	  deleteMenu: function deleteMenu(id) {
	    var _this = this;

	    fetch('/api/menu/' + id, {
	      method: 'DELETE'
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      var newMenu = data.filter(function (val) {
	        return val.resId === _this.state.restId;
	      });
	      _this.setState({ menu: newMenu });
	    }).catch(function (err) {
	      console.log("Could not delete menu ", err);
	    });
	  },
	  onSubmit: function onSubmit(item) {
	    var _this2 = this;

	    this.setState({ addShow: false });
	    item.resId = this.state.restId;
	    var url = '/api/menu/';

	    fetch(url, {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(item)
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      var newMenu = data.filter(function (val) {
	        return val.resId === _this2.state.restId;
	      });
	      _this2.setState({ menu: newMenu });
	    }).catch(function (err) {
	      console.log('err:', err);
	    });
	  },
	  close: function close() {
	    this.setState({ addShow: false });
	  },
	  openAddModal: function openAddModal(item) {
	    this.setState({ addShow: true });
	  },
	  componentWillMount: function componentWillMount() {
	    var _this3 = this;

	    var url = '/api/menu';
	    fetch(url).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {

	      var newMenu = data.filter(function (data) {
	        return _this3.props.params.id === data.resId;
	      });
	      _this3.setState({ menu: newMenu });

	      return fetch('/api/restaurant/' + _this3.props.params.id);
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this3.setState({ restaurant: data });
	    }).catch(function (err) {
	      console.log(err);
	    });
	  },
	  render: function render() {
	    var _this4 = this;

	    var smClose = function smClose() {
	      return _this4.setState({ addShow: false });
	    };
	    if (this.state.restaurant.id) {
	      var resName = this.state.restaurant.name.toUpperCase();
	      return _react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement(
	          'div',
	          { className: 'row' },
	          _react3.default.createElement(
	            'div',
	            { className: 'col-xs-8' },
	            _react3.default.createElement(
	              'h2',
	              null,
	              resName,
	              ' || ',
	              this.state.restaurant.location,
	              ' || ',
	              this.state.restaurant.cuisine
	            )
	          ),
	          _react3.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(_reactBootstrap.Button, { onClick: this.openAddModal, className: 'btn-success fa fa-plus-square fa-sm' })
	          )
	        ),
	        _react3.default.createElement(Home, { menu: this.state.menu, update: this.updateMenu, 'delete': this.deleteMenu }),
	        _react3.default.createElement(_AddModal2.default, { show: this.state.addShow, submit: this.onSubmit, onHide: this.close, add: this.state.addNew })
	      );
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
	      editMenu: {}
	    };
	  },
	  deleteMenu: function deleteMenu(item) {
	    this.props.delete(item.id);
	  },
	  showModal: function showModal(item) {
	    this.setState({ editMenu: item });
	    this.showEditModal();
	  },
	  showEditModal: function showEditModal(item) {
	    this.setState({ smShow: true });
	  },
	  close: function close() {
	    this.setState({ smShow: false });
	  },
	  submit: function submit(newItem) {
	    var _this5 = this;

	    this.setState({ smShow: false });
	    var url = '/api/menu/' + newItem.id;

	    fetch(url, {
	      method: 'PUT',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(newItem)
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this5.props.update(data);
	    }).catch(function (err) {
	      console.log('err:', err);
	    });
	  },
	  render: function render() {
	    var _this6 = this;

	    console.log('this edit', this.state.editMenu);
	    console.log('showModal', this.state.smShow);
	    var smClose = function smClose() {
	      return _this6.setState({ smShow: false });
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
	          _react3.default.createElement(_reactBootstrap.Button, { onClick: _this6.showModal.bind(null, item), className: 'btn btn-info fa fa-pencil-square-o' })
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react3.default.createElement(_reactBootstrap.Button, { onClick: _this6.deleteMenu.bind(null, item), className: 'btn btn-danger fa fa-trash' })
	        )
	      );
	    });

	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
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
	        )
	      )
	    );
	  }
	  // <EditModal show={this.state.smShow} onSubmit={this.submit} onHide={this.close} menu={this.state.editMenu}/>

	}));

	exports.default = MenuFetch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(176)(module)))

/***/ }

})