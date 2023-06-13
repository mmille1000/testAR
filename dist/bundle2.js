/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index2.js":
/*!*******************!*\
  !*** ./index2.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js */ \"./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js\");\n/* harmony import */ var _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nfunction main() {\r\n    const canvas = document.getElementById('canvas1');\r\n\r\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\r\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(60, 1.33, 0.1, 10000);\r\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({canvas: canvas});\r\n\r\n    const arjs = new _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__.LocationBased(scene, camera);\r\n    const cam = new _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__.WebcamRenderer(renderer);\r\n\r\n    const geom = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(20, 20, 20);\r\n    const mtl = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({color: 0xff0000});\r\n\r\n    const deviceOrientationControls = new _node_modules_ar_js_org_ar_js_three_js_build_ar_threex_location_only_js__WEBPACK_IMPORTED_MODULE_0__.DeviceOrientationControls(camera);\r\n\r\n    let fetched = false;\r\n\r\n    // Handle the \"gpsupdate\" event on the LocationBased object\r\n    // This triggers when a GPS update (from the Geolocation API) occurs\r\n    // 'pos' is the position object from the Geolocation API.\r\n\r\n    arjs.on(\"gpsupdate\", async(pos) => {\r\n        if(!fetched) {\r\n\t\t\talert(\"lat:\" + pos.coords.latitude);\r\n\t\t\tconst response = await fetch(`https://hikar.org/webapp/map?bbox=${pos.coords.longitude-0.01},${pos.coords.latitude-0.01},${pos.coords.longitude+0.01},${pos.coords.latitude+0.01}&layers=poi&outProj=4326`);\r\n\r\n            const geojson = await response.json();\r\n\r\n            geojson.features.forEach ( feature => {\r\n                const box = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geom, mtl);\r\n                arjs.add(box, feature.geometry.coordinates[0], feature.geometry.coordinates[1]);            \r\n            });\r\n\r\n            fetched = true;\r\n        }\r\n    });\r\n\r\n    arjs.startGps();\r\n\r\n    requestAnimationFrame(render);\r\n\r\n    function render() {\r\n        if(canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {\r\n            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);\r\n            const aspect = canvas.clientWidth/canvas.clientHeight;\r\n            camera.aspect = aspect;\r\n            camera.updateProjectionMatrix();\r\n        }\r\n\r\n        // Update the scene using the latest sensor readings\r\n        deviceOrientationControls.update();\r\n\r\n        cam.update();\r\n        renderer.render(scene, camera);\r\n        requestAnimationFrame(render);\r\n    }\r\n}\r\n\r\nmain();\n\n//# sourceURL=webpack:///./index2.js?");

/***/ }),

/***/ "./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t(__webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\")):0}(this,(e=>(()=>{\"use strict\";var t={381:t=>{t.exports=e}},i={};function n(e){var o=i[e];if(void 0!==o)return o.exports;var s=i[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{DeviceOrientationControls:()=>l,LocationBased:()=>t,WebcamRenderer:()=>s});class e{constructor(){this.EARTH=40075016.68,this.HALF_EARTH=20037508.34}project(e,t){return[this.lonToSphMerc(e),this.latToSphMerc(t)]}unproject(e){return[this.sphMercToLon(e[0]),this.sphMercToLat(e[1])]}lonToSphMerc(e){return e/180*this.HALF_EARTH}latToSphMerc(e){return Math.log(Math.tan((90+e)*Math.PI/360))/(Math.PI/180)*this.HALF_EARTH/180}sphMercToLon(e){return e/this.HALF_EARTH*180}sphMercToLat(e){var t=e/this.HALF_EARTH*180;return 180/Math.PI*(2*Math.atan(Math.exp(t*Math.PI/180))-Math.PI/2)}getID(){return\"epsg:3857\"}}class t{constructor(t,i,n={}){this._scene=t,this._camera=i,this._proj=new e,this._eventHandlers={},this._lastCoords=null,this._gpsMinDistance=0,this._gpsMinAccuracy=1e3,this._watchPositionId=null,this.setGpsOptions(n)}setProjection(e){this._proj=e}setGpsOptions(e={}){void 0!==e.gpsMinDistance&&(this._gpsMinDistance=e.gpsMinDistance),void 0!==e.gpsMinAccuracy&&(this._gpsMinAccuracy=e.gpsMinAccuracy)}startGps(e=0){return null===this._watchPositionId&&(this._watchPositionId=navigator.geolocation.watchPosition((e=>{this._gpsReceived(e)}),(e=>{this._eventHandlers.gpserror?this._eventHandlers.gpserror(e.code):alert(`GPS error: code ${e.code}`)}),{enableHighAccuracy:!0,maximumAge:e}),!0)}stopGps(){return null!==this._watchPositionId&&(navigator.geolocation.clearWatch(this._watchPositionId),this._watchPositionId=null,!0)}fakeGps(e,t,i=null,n=0){null!==i&&this.setElevation(i),this._gpsReceived({coords:{longitude:e,latitude:t,accuracy:n}})}lonLatToWorldCoords(e,t){const i=this._proj.project(e,t);return[i[0],-i[1]]}add(e,t,i,n){this.setWorldPosition(e,t,i,n),this._scene.add(e)}setWorldPosition(e,t,i,n){const o=this.lonLatToWorldCoords(t,i);[e.position.x,e.position.z]=o,void 0!==n&&(e.position.y=n)}setElevation(e){this._camera.position.y=e}on(e,t){this._eventHandlers[e]=t}_gpsReceived(e){let t=Number.MAX_VALUE;e.coords.accuracy<=this._gpsMinAccuracy&&(null===this._lastCoords?this._lastCoords={latitude:e.coords.latitude,longitude:e.coords.longitude}:t=this._haversineDist(this._lastCoords,e.coords),t>=this._gpsMinDistance&&(this._lastCoords.longitude=e.coords.longitude,this._lastCoords.latitude=e.coords.latitude,this.setWorldPosition(this._camera,e.coords.longitude,e.coords.latitude),this._eventHandlers.gpsupdate&&this._eventHandlers.gpsupdate(e,t)))}_haversineDist(e,t){const i=THREE.Math.degToRad(t.longitude-e.longitude),n=THREE.Math.degToRad(t.latitude-e.latitude),o=Math.sin(n/2)*Math.sin(n/2)+Math.cos(THREE.Math.degToRad(e.latitude))*Math.cos(THREE.Math.degToRad(t.latitude))*(Math.sin(i/2)*Math.sin(i/2));return 2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))*6371e3}}var i=n(381);class s{constructor(e,t){let n;this.renderer=e,this.renderer.autoClear=!1,this.sceneWebcam=new i.Scene,void 0===t?(n=document.createElement(\"video\"),n.setAttribute(\"autoplay\",!0),n.setAttribute(\"playsinline\",!0),n.style.display=\"none\",document.body.appendChild(n)):n=document.querySelector(t),this.geom=new i.PlaneBufferGeometry,this.texture=new i.VideoTexture(n),this.material=new i.MeshBasicMaterial({map:this.texture});const o=new i.Mesh(this.geom,this.material);if(this.sceneWebcam.add(o),this.cameraWebcam=new i.OrthographicCamera(-.5,.5,.5,-.5,0,10),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const e={video:{width:1280,height:720,facingMode:\"environment\"}};navigator.mediaDevices.getUserMedia(e).then((e=>{console.log(\"using the webcam successfully...\"),n.srcObject=e,n.play()})).catch((e=>{setTimeout((()=>{this.createErrorPopup(\"Webcam Error\\nName: \"+e.name+\"\\nMessage: \"+e.message)}),1e3)}))}else setTimeout((()=>{this.createErrorPopup(\"sorry - media devices API not supported\")}),1e3)}update(){this.renderer.clear(),this.renderer.render(this.sceneWebcam,this.cameraWebcam),this.renderer.clearDepth()}dispose(){this.material.dispose(),this.texture.dispose(),this.geom.dispose()}createErrorPopup(e){if(!document.getElementById(\"error-popup\")){var t=document.createElement(\"div\");t.innerHTML=e,t.setAttribute(\"id\",\"error-popup\"),document.body.appendChild(t)}}}const r=new i.Vector3(0,0,1),a=new i.Euler,c=new i.Quaternion,d=new i.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5)),h={type:\"change\"};class l extends i.EventDispatcher{constructor(e){super(),!1===window.isSecureContext&&console.error(\"THREE.DeviceOrientationControls: DeviceOrientationEvent is only available in secure contexts (https)\");const t=this,n=new i.Quaternion;this.object=e,this.object.rotation.reorder(\"YXZ\"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0,this.orientationChangeEventName=\"ondeviceorientationabsolute\"in window?\"deviceorientationabsolute\":\"deviceorientation\";const o=function(e){t.deviceOrientation=e},s=function(){t.screenOrientation=window.orientation||0};this.connect=function(){s(),void 0!==window.DeviceOrientationEvent&&\"function\"==typeof window.DeviceOrientationEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((e=>{\"granted\"===e&&(window.addEventListener(\"orientationchange\",s),window.addEventListener(t.orientationChangeEventName,o))})).catch((function(e){console.error(\"THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:\",e)})):(window.addEventListener(\"orientationchange\",s),window.addEventListener(t.orientationChangeEventName,o)),t.enabled=!0},this.disconnect=function(){window.removeEventListener(\"orientationchange\",s),window.removeEventListener(t.orientationChangeEventName,o),t.enabled=!1},this.update=function(){if(!1===t.enabled)return;const e=t.deviceOrientation;if(e){const o=e.alpha?i.Math.degToRad(e.alpha)+t.alphaOffset:0,s=e.beta?i.Math.degToRad(e.beta):0,l=e.gamma?i.Math.degToRad(e.gamma):0,u=t.screenOrientation?i.Math.degToRad(t.screenOrientation):0;!function(e,t,i,n,o){a.set(i,t,-n,\"YXZ\"),e.setFromEuler(a),e.multiply(d),e.multiply(c.setFromAxisAngle(r,-o))}(t.object.quaternion,o,s,l,u),8*(1-n.dot(t.object.quaternion))>1e-6&&(n.copy(t.object.quaternion),t.dispatchEvent(h))}},this.dispose=function(){t.disconnect()},this.connect()}}})(),o})()));\n\n//# sourceURL=webpack:///./node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index2.js");
/******/ 	
/******/ })()
;