(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-projects-vue"],{

/***/ "1vNK":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-2!./node_modules/sass-loader/lib/loader.js!./src/scss/components/projects.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"projects.scss"}]);



/***/ }),

/***/ "B6UV":
/*!********************************************************************!*\
  !*** ./src/components/projects.vue?vue&type=template&id=5711178a& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=template&id=5711178a& */ "nb7K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "Kwcd":
/*!**************************************************************!*\
  !*** ./src/components/projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=script&lang=js& */ "yyu4");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "UF+s":
/*!*******************************************!*\
  !*** ./src/scss/components/projects.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-2!../../../node_modules/sass-loader/lib/loader.js!./projects.scss */ "WLCL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "SZ7m").default
var update = add("37bcf580", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-2!../../../node_modules/sass-loader/lib/loader.js!./projects.scss */ "WLCL", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-2!../../../node_modules/sass-loader/lib/loader.js!./projects.scss */ "WLCL");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "WLCL":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-2!./node_modules/sass-loader/lib/loader.js!./src/scss/components/projects.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-2!../../../node_modules/sass-loader/lib/loader.js!./projects.scss */ "1vNK");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-2!../../../node_modules/sass-loader/lib/loader.js!./projects.scss */ "1vNK", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-2!../../../node_modules/sass-loader/lib/loader.js!./projects.scss */ "1vNK");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "Ysbd":
/*!*************************************!*\
  !*** ./src/components/projects.vue ***!
  \*************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.vue?vue&type=template&id=5711178a& */ "B6UV");
/* harmony import */ var _projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.vue?vue&type=script&lang=js& */ "Kwcd");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "ZDXL")
  api.install(__webpack_require__(/*! vue */ "oCYn"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('5711178a', component.options)
    } else {
      api.reload('5711178a', component.options)
    }
    module.hot.accept(/*! ./projects.vue?vue&type=template&id=5711178a& */ "B6UV", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.vue?vue&type=template&id=5711178a& */ "B6UV");
(function () {
      api.rerender('5711178a', {
        render: _projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _projects_vue_vue_type_template_id_5711178a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "nb7K":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/projects.vue?vue&type=template&id=5711178a& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "projects" }, [
      _c("div", [
        _vm._v("IT's "),
        _c("h1", [_vm._v("PROJECTS")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "headline" }, [
        _vm._v("IT's "),
        _c("h1", [_vm._v("HOME")]),
        _vm._v(" PAGE")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "yyu4":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/projects.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _scss_components_projects_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/components/projects.scss */ "UF+s");
/* harmony import */ var _scss_components_projects_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_projects_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'projects',
  data: function data() {
    return {
      title: 'projects'
    };
  },
  beforeCreate: function beforeCreate() {
    document.body.className = 'projects';
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL3Byb2plY3RzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMudnVlP2QzNzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMudnVlP2JmYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY29tcG9uZW50cy9wcm9qZWN0cy5zY3NzPzYxMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY29tcG9uZW50cy9wcm9qZWN0cy5zY3NzPzljZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzLnZ1ZT8zNDQyIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLGtFQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLHlFQUF5RTs7Ozs7Ozs7Ozs7Ozs7O0FDRjFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUF3SyxDQUFnQiw4T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTVMOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHdLQUFzSztBQUM1TCw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDJFQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLElBQVU7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLHdLQUFzSztBQUMzTCxzQkFBc0IsbUJBQU8sQ0FBQyx3S0FBc0s7QUFDcE0sdURBQXVELFFBQVM7QUFDaEU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7OztBQ3BCQSxjQUFjLG1CQUFPLENBQUMscUlBQTBIOztBQUVoSiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsaUVBQXNEOztBQUUzRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIscUlBQTBIO0FBQzdJLG1CQUFtQixtQkFBTyxDQUFDLHFJQUEwSDs7QUFFckosb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQzBGO0FBQzFGLGdCQUFnQixtSEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsNkRBQTRFO0FBQ2hHLGNBQWMsbUJBQU8sQ0FBQyxpQkFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDJEQUErQyxFQUFFO0FBQUE7QUFDdkU7QUFDQSxnQkFBZ0IsbUZBQU07QUFDdEIseUJBQXlCLDRGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFFQTtBQUNBLGtCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7QUFPQSxjQVBBLDBCQU9BO0FBQ0E7QUFDQTtBQVRBLEciLCJmaWxlIjoidmlldy1wcm9qZWN0cy12dWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInByb2plY3RzLnNjc3NcIn1dKTtcblxuIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzExMTc4YSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wcm9qZWN0cy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM3YmNmNTgwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Byb2plY3RzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wcm9qZWN0cy5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcHJvamVjdHMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcHJvamVjdHMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Byb2plY3RzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzExMTc4YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2plY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd29ya3NwYWNlXFxcXHBvcnRmb2xpb1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTcxMTE3OGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTcxMTE3OGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzExMTc4YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NzExMTc4YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcHJvamVjdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvamVjdHNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJQUk9KRUNUU1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiSVQncyBcIiksXG4gICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkhPTUVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFBBR0VcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIklUJ3MgXCIpLFxuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJIT01FXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBQQUdFXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJJVCdzIFwiKSxcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiSE9NRVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgUEFHRVwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgIDxkaXY+SVQncyA8aDE+UFJPSkVDVFM8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+SVQncyA8aDE+SE9NRTwvaDE+IFBBR0U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5JVCdzIDxoMT5IT01FPC9oMT4gUEFHRTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPklUJ3MgPGgxPkhPTUU8L2gxPiBQQUdFPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY3NzX3Byb2plY3RzIGZyb20gJ0Avc2Nzcy9jb21wb25lbnRzL3Byb2plY3RzLnNjc3MnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAncHJvamVjdHMnLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3Byb2plY3RzJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdwcm9qZWN0cydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iXSwic291cmNlUm9vdCI6IiJ9