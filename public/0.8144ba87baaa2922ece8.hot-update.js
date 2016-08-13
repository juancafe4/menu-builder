webpackHotUpdate(0,{

/***/ 573:
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

	var _reactBootstrap = __webpack_require__(319);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {},
	  _component2: {}
	};

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/Splash.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/Splash.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var NewForm = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'NewForm',
	  getInitialState: function getInitialState() {
	    return {
	      name: '',
	      location: '',
	      cuisine: ''
	    };
	  },
	  newName: function newName(e) {
	    this.setState({ name: e.target.value });
	  },
	  newLocation: function newLocation(e) {
	    this.setState({ location: e.target.value });
	  },
	  newCuisine: function newCuisine(e) {
	    this.setState({ cuisine: e.target.value });
	  },
	  newRestaurantInfo: function newRestaurantInfo() {
	    //make an object with the information from the user input
	    //send it back to the parent

	    var _state = this.state;
	    var name = _state.name;
	    var location = _state.location;
	    var cuisine = _state.cuisine;


	    if (name && location && cuisine) {
	      // let data = new FormData();
	      var newRest = { name: name, location: location, cuisine: cuisine };
	      // data.append('json', JSON.stringify(newRest))

	      fetch("/api/restaurant/", {
	        method: "POST",
	        headers: {
	          "Content-type": "application/json"
	        },
	        body: JSON.stringify({ name: name, location: location, cuisine: cuisine })
	      }).then(function () {
	        return console.log('done');
	      }).catch(function (err) {
	        console.log('err:', err);
	      });
	    }
	    // let newRstObj;

	    // this.props.makeNew(newRstObj)
	  },
	  render: function render() {
	    return _react3.default.createElement(
	      'form',
	      null,
	      _react3.default.createElement(
	        _reactBootstrap.FormGroup,
	        { controlId: 'formBasicText' },
	        _react3.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.name, placeholder: 'Enter Name', onChange: this.newName }),
	        _react3.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.location, placeholder: 'Enter Location', onChange: this.newLocation }),
	        _react3.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.cuisine, placeholder: 'Cuisine Type', onChange: this.newCuisine })
	      ),
	      _react3.default.createElement(
	        _reactBootstrap.Button,
	        { bsStyle: 'primary', onClick: this.newRestaurantInfo },
	        'New Restaurant'
	      )
	    );
	  }
	}));

	var Splash = _wrapComponent('_component2')(_react3.default.createClass({
	  displayName: 'Splash',
	  getInitialState: function getInitialState() {
	    return {
	      name: '',
	      menu: [],
	      restaurantId: ""
	    };
	  },
	  resName: function resName(e) {
	    this.setState({ name: e.target.value });
	  },
	  newRestaurant: function newRestaurant(newRestObj) {
	    //send a new restaurant to the backend
	    //make an fetch request to /api/restaurant
	  },
	  restaurantValidation: function restaurantValidation(e) {
	    var _this = this;

	    //validate a restaurant from the backend and then pull up their menu items

	    //Fetching Getting the api restaurant

	    var url = "/api/restaurant";
	    var newRestaurant = void 0;
	    fetch(url).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      newRestaurant = data.filter(function (val) {
	        return val.name === _this.state.name;
	      });

	      if (newRestaurant.length !== 0) {
	        return fetch('/api/menu');
	      } else {
	        alert('Restaurant not found');
	        return new Promise(function (resolve, reject) {
	          reject('Restaurant not found');
	        });
	      }
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      var restMenu = data.filter(function (val) {
	        return val.resId === newRestaurant[0].id;
	      });
	      _this.setState({ menu: restMenu, restaurantId: newRestaurant[0].id });
	    }).catch(function (err) {
	      console.log('err ', err);
	    });
	  },
	  render: function render() {
	    return _react3.default.createElement(
	      _reactBootstrap.Jumbotron,
	      null,
	      _react3.default.createElement(
	        'h1',
	        null,
	        'Menu Builder'
	      ),
	      _react3.default.createElement(
	        'p',
	        null,
	        'Join the future, build dynamic menus for your restaurant today!'
	      ),
	      _react3.default.createElement(
	        'div',
	        { className: 'row' },
	        _react3.default.createElement(
	          'div',
	          { className: 'col-xs-4' },
	          _react3.default.createElement(
	            'h3',
	            null,
	            'Enter Restaurant Name'
	          ),
	          _react3.default.createElement(
	            _reactBootstrap.FormGroup,
	            null,
	            _react3.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.name, placeholder: 'Enter Name', onChange: this.resName })
	          ),
	          _react3.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.restaurantValidation },
	            'Go to Menu'
	          )
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'col-xs-1' },
	          _react3.default.createElement(
	            'h3',
	            null,
	            'or'
	          )
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'col-xs-6' },
	          _react3.default.createElement(
	            'h3',
	            null,
	            'Enter a New Restaurant'
	          ),
	          _react3.default.createElement(NewForm, { makeNew: this.newRestaurant })
	        )
	      )
	    );
	  }
	}));

	exports.default = Splash;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})