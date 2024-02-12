/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/advanceSlide.js":
/*!*****************************!*\
  !*** ./src/advanceSlide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ advanceSlide)
/* harmony export */ });
/* harmony import */ var _replaceImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceImg */ "./src/replaceImg.js");


function advanceSlide(
    index,
    imgCarousel,
    navDotContainer,
    window
) {
    const oldIndex = index;
    let newIndex = index;
    if (index === imgCarousel.length - 1) {
        newIndex = 0;
    } else {
        newIndex += 1;
    }
    (0,_replaceImg__WEBPACK_IMPORTED_MODULE_0__["default"])(oldIndex, newIndex, navDotContainer, window);
    return newIndex;
}


/***/ }),

/***/ "./src/clearNavDots.js":
/*!*****************************!*\
  !*** ./src/clearNavDots.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearNavDots)
/* harmony export */ });
function clearNavDots() {
    const navDotContainer = document.querySelector('.navdots');
    navDotContainer.innerText = '';
}


/***/ }),

/***/ "./src/dotArray.js":
/*!*************************!*\
  !*** ./src/dotArray.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dotArray = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dotArray);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
    const footerDiv = document.createElement('footer');
    footerDiv.innerHTML += `<a href="https://www.flaticon.com/">Icons created by Kiranshastry - Flaticon</a>`;
    return footerDiv;
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
    const headerDiv = document.createElement('header');
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerText = 'Image Slider App';
    headerDiv.appendChild(logo);
    return headerDiv;
}


/***/ }),

/***/ "./src/imgCarousel.js":
/*!****************************!*\
  !*** ./src/imgCarousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_Crono2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Crono2.png */ "./src/img/Crono2.png");
/* harmony import */ var _img_Frog_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Frog.png */ "./src/img/Frog.png");
/* harmony import */ var _img_Lucca2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/Lucca2.png */ "./src/img/Lucca2.png");
/* harmony import */ var _img_Marle2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Marle2.png */ "./src/img/Marle2.png");
/* harmony import */ var _img_Robo2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/Robo2.png */ "./src/img/Robo2.png");
/* harmony import */ var _img_Ayla_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/Ayla.png */ "./src/img/Ayla.png");
/* harmony import */ var _img_Magus2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/Magus2.png */ "./src/img/Magus2.png");








const imgCarousel = [_img_Crono2_png__WEBPACK_IMPORTED_MODULE_0__, _img_Frog_png__WEBPACK_IMPORTED_MODULE_1__, _img_Lucca2_png__WEBPACK_IMPORTED_MODULE_2__, _img_Marle2_png__WEBPACK_IMPORTED_MODULE_3__, _img_Robo2_png__WEBPACK_IMPORTED_MODULE_4__, _img_Ayla_png__WEBPACK_IMPORTED_MODULE_5__, _img_Magus2_png__WEBPACK_IMPORTED_MODULE_6__];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgCarousel);


/***/ }),

/***/ "./src/navDots.js":
/*!************************!*\
  !*** ./src/navDots.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navDots)
/* harmony export */ });
/* harmony import */ var _img_full_stop_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/full-stop.png */ "./src/img/full-stop.png");
/* harmony import */ var _img_period_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/period.png */ "./src/img/period.png");
/* harmony import */ var _dotArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dotArray */ "./src/dotArray.js");




function navDots(imgCarousel) {
    const navDotContainer = document.createElement('div');
    navDotContainer.classList.add('navdots');
    const initialDot = new Image();
    initialDot.src = _img_full_stop_png__WEBPACK_IMPORTED_MODULE_0__;
    initialDot.id = 0;
    initialDot.classList.add('active');
    _dotArray__WEBPACK_IMPORTED_MODULE_2__["default"].push(initialDot);
    for (let i = 0; i < imgCarousel.length - 1; i += 1) {
        const dot = new Image();
        dot.src = _img_period_png__WEBPACK_IMPORTED_MODULE_1__;
        dot.id = i + 1;
        _dotArray__WEBPACK_IMPORTED_MODULE_2__["default"].push(dot);
    }
    _dotArray__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((dot) => navDotContainer.appendChild(dot));

    return navDotContainer;
}


/***/ }),

/***/ "./src/replaceImg.js":
/*!***************************!*\
  !*** ./src/replaceImg.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ replaceImg)
/* harmony export */ });
/* harmony import */ var _img_full_stop_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/full-stop.png */ "./src/img/full-stop.png");
/* harmony import */ var _img_period_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/period.png */ "./src/img/period.png");
/* harmony import */ var _imgCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgCarousel */ "./src/imgCarousel.js");
/* harmony import */ var _dotArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dotArray */ "./src/dotArray.js");
/* harmony import */ var _clearNavDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearNavDots */ "./src/clearNavDots.js");






function replaceImg(oldIndex, index, navDotContainer, window) {
    const currImg = new Image();
    currImg.src = _imgCarousel__WEBPACK_IMPORTED_MODULE_2__["default"][index];
    window.firstChild.remove();
    window.appendChild(currImg);
    const inactiveDot = new Image();
    inactiveDot.src = _img_period_png__WEBPACK_IMPORTED_MODULE_1__;
    inactiveDot.id = oldIndex;
    _dotArray__WEBPACK_IMPORTED_MODULE_3__["default"].splice(oldIndex, 1, inactiveDot);
    const activeDot = new Image();
    activeDot.src = _img_full_stop_png__WEBPACK_IMPORTED_MODULE_0__;
    activeDot.id = index;
    activeDot.classList.add('active');
    _dotArray__WEBPACK_IMPORTED_MODULE_3__["default"].splice(index, 1, activeDot);
    (0,_clearNavDots__WEBPACK_IMPORTED_MODULE_4__["default"])();
    _dotArray__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((dot) => navDotContainer.appendChild(dot));
    return navDotContainer;
}


/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _navDots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navDots */ "./src/navDots.js");
/* harmony import */ var _imgCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgCarousel */ "./src/imgCarousel.js");
/* harmony import */ var _replaceImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replaceImg */ "./src/replaceImg.js");
/* harmony import */ var _img_prev_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/prev.png */ "./src/img/prev.png");
/* harmony import */ var _img_next_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/next.png */ "./src/img/next.png");
/* harmony import */ var _advanceSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanceSlide */ "./src/advanceSlide.js");







function slider() {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    const windowWrapper = document.createElement('div');
    windowWrapper.classList.add('window-wrapper');
    const window = document.createElement('div');
    window.className = 'window';
    const nextButton = new Image();
    nextButton.src = _img_next_png__WEBPACK_IMPORTED_MODULE_4__;
    nextButton.classList.add('nav-button');
    const prevButton = new Image();
    prevButton.src = _img_prev_png__WEBPACK_IMPORTED_MODULE_3__;
    prevButton.classList.add('nav-button');
    const initialImg = new Image();
    [initialImg.src] = _imgCarousel__WEBPACK_IMPORTED_MODULE_1__["default"];
    window.appendChild(initialImg);
    let index = 0;

    const navDotContainer = (0,_navDots__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgCarousel__WEBPACK_IMPORTED_MODULE_1__["default"]);

    nextButton.addEventListener('click', () => {
        const oldIndex = index;
        if (index === _imgCarousel__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1) {
            index = 0;
        } else {
            index += 1;
        }
        (0,_replaceImg__WEBPACK_IMPORTED_MODULE_2__["default"])(oldIndex, index, navDotContainer, window);
    });

    prevButton.addEventListener('click', () => {
        const oldIndex = index;
        if (index === 0) {
            index = _imgCarousel__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1;
        } else {
            index -= 1;
        }
        (0,_replaceImg__WEBPACK_IMPORTED_MODULE_2__["default"])(oldIndex, index, navDotContainer, window);
    });

    navDotContainer.addEventListener('click', (e) => {
        const activeImg = document.querySelector('.active');
        const oldIndex = Number(activeImg.id);
        navDotContainer.innerText = '';
        index = Number(e.target.id);
        (0,_replaceImg__WEBPACK_IMPORTED_MODULE_2__["default"])(oldIndex, index, navDotContainer, window);
    });

    const play = document.createElement('div');
    play.innerText = 'Play';
    play.addEventListener('click', () => {
        const newIndex = (0,_advanceSlide__WEBPACK_IMPORTED_MODULE_5__["default"])(
            index,
            _imgCarousel__WEBPACK_IMPORTED_MODULE_1__["default"],
            navDotContainer,
            window
        );
        index = newIndex;
    });

    windowWrapper.appendChild(prevButton);
    windowWrapper.appendChild(window);
    windowWrapper.appendChild(nextButton);
    sliderContainer.appendChild(windowWrapper);
    sliderContainer.appendChild(navDotContainer);
    sliderContainer.appendChild(play);
    return sliderContainer;
}


/***/ }),

/***/ "./src/img/Ayla.png":
/*!**************************!*\
  !*** ./src/img/Ayla.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ef40c57488d3f57b199.png";

/***/ }),

/***/ "./src/img/Crono2.png":
/*!****************************!*\
  !*** ./src/img/Crono2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a2abcbc0be6823cc135.png";

/***/ }),

/***/ "./src/img/Frog.png":
/*!**************************!*\
  !*** ./src/img/Frog.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b96db07f773393f8adf.png";

/***/ }),

/***/ "./src/img/Lucca2.png":
/*!****************************!*\
  !*** ./src/img/Lucca2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91a4ab43ed3a9b9d1eeb.png";

/***/ }),

/***/ "./src/img/Magus2.png":
/*!****************************!*\
  !*** ./src/img/Magus2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ec34ed2ab7039f24bad.png";

/***/ }),

/***/ "./src/img/Marle2.png":
/*!****************************!*\
  !*** ./src/img/Marle2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e746086dac18364b8e69.png";

/***/ }),

/***/ "./src/img/Robo2.png":
/*!***************************!*\
  !*** ./src/img/Robo2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b28fe1d67df7785ae3dc.png";

/***/ }),

/***/ "./src/img/full-stop.png":
/*!*******************************!*\
  !*** ./src/img/full-stop.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "994a6c722e466c0558dd.png";

/***/ }),

/***/ "./src/img/next.png":
/*!**************************!*\
  !*** ./src/img/next.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8548a4d9204866ca46a3.png";

/***/ }),

/***/ "./src/img/period.png":
/*!****************************!*\
  !*** ./src/img/period.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03a495692b825d4c4c5b.png";

/***/ }),

/***/ "./src/img/prev.png":
/*!**************************!*\
  !*** ./src/img/prev.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e4df07d6acd7584a604.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
// import _ from 'lodash';





const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
const main = document.createElement('main');

main.appendChild((0,_slider__WEBPACK_IMPORTED_MODULE_3__["default"])());
// main.appendChild(menu());

content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
content.appendChild(main);
content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQzhCO0FBQ1Q7QUFDUztBQUNBOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbURBQU07QUFDdkI7O0FBRUEsb0JBQW9CLG1EQUFNO0FBQzFCO0FBQ0Esb0JBQW9CLG1EQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG8vLi9zcmMvYWR2YW5jZVNsaWRlLmpzIiwid2VicGFjazovL2pzdG9kby8uL3NyYy9jbGVhck5hdkRvdHMuanMiLCJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL2RvdEFycmF5LmpzIiwid2VicGFjazovL2pzdG9kby8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9qc3RvZG8vLi9zcmMvaW1nQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL25hdkRvdHMuanMiLCJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL3JlcGxhY2VJbWcuanMiLCJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9qc3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanN0b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qc3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanN0b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCByZXBsYWNlSW1nIGZyb20gJy4vcmVwbGFjZUltZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkdmFuY2VTbGlkZShcbiAgICBpbmRleCxcbiAgICBpbWdDYXJvdXNlbCxcbiAgICBuYXZEb3RDb250YWluZXIsXG4gICAgd2luZG93XG4pIHtcbiAgICBjb25zdCBvbGRJbmRleCA9IGluZGV4O1xuICAgIGxldCBuZXdJbmRleCA9IGluZGV4O1xuICAgIGlmIChpbmRleCA9PT0gaW1nQ2Fyb3VzZWwubGVuZ3RoIC0gMSkge1xuICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SW5kZXggKz0gMTtcbiAgICB9XG4gICAgcmVwbGFjZUltZyhvbGRJbmRleCwgbmV3SW5kZXgsIG5hdkRvdENvbnRhaW5lciwgd2luZG93KTtcbiAgICByZXR1cm4gbmV3SW5kZXg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhck5hdkRvdHMoKSB7XG4gICAgY29uc3QgbmF2RG90Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmRvdHMnKTtcbiAgICBuYXZEb3RDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG59XG4iLCJjb25zdCBkb3RBcnJheSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBkb3RBcnJheTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXJEaXYuaW5uZXJIVE1MICs9IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiPkljb25zIGNyZWF0ZWQgYnkgS2lyYW5zaGFzdHJ5IC0gRmxhdGljb248L2E+YDtcbiAgICByZXR1cm4gZm9vdGVyRGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJztcbiAgICBsb2dvLmlubmVyVGV4dCA9ICdJbWFnZSBTbGlkZXIgQXBwJztcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgcmV0dXJuIGhlYWRlckRpdjtcbn1cbiIsImltcG9ydCBDcm9ubyBmcm9tICcuL2ltZy9Dcm9ubzIucG5nJztcbmltcG9ydCBGcm9nIGZyb20gJy4vaW1nL0Zyb2cucG5nJztcbmltcG9ydCBMdWNjYSBmcm9tICcuL2ltZy9MdWNjYTIucG5nJztcbmltcG9ydCBNYXJsZSBmcm9tICcuL2ltZy9NYXJsZTIucG5nJztcbmltcG9ydCBSb2JvIGZyb20gJy4vaW1nL1JvYm8yLnBuZyc7XG5pbXBvcnQgQXlsYSBmcm9tICcuL2ltZy9BeWxhLnBuZyc7XG5pbXBvcnQgTWFndXMgZnJvbSAnLi9pbWcvTWFndXMyLnBuZyc7XG5cbmNvbnN0IGltZ0Nhcm91c2VsID0gW0Nyb25vLCBGcm9nLCBMdWNjYSwgTWFybGUsIFJvYm8sIEF5bGEsIE1hZ3VzXTtcblxuZXhwb3J0IGRlZmF1bHQgaW1nQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgQWN0aXZlIGZyb20gJy4vaW1nL2Z1bGwtc3RvcC5wbmcnO1xuaW1wb3J0IEluYWN0aXZlIGZyb20gJy4vaW1nL3BlcmlvZC5wbmcnO1xuaW1wb3J0IGRvdEFycmF5IGZyb20gJy4vZG90QXJyYXknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZEb3RzKGltZ0Nhcm91c2VsKSB7XG4gICAgY29uc3QgbmF2RG90Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2RG90Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdmRvdHMnKTtcbiAgICBjb25zdCBpbml0aWFsRG90ID0gbmV3IEltYWdlKCk7XG4gICAgaW5pdGlhbERvdC5zcmMgPSBBY3RpdmU7XG4gICAgaW5pdGlhbERvdC5pZCA9IDA7XG4gICAgaW5pdGlhbERvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb3RBcnJheS5wdXNoKGluaXRpYWxEb3QpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nQ2Fyb3VzZWwubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGRvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkb3Quc3JjID0gSW5hY3RpdmU7XG4gICAgICAgIGRvdC5pZCA9IGkgKyAxO1xuICAgICAgICBkb3RBcnJheS5wdXNoKGRvdCk7XG4gICAgfVxuICAgIGRvdEFycmF5LmZvckVhY2goKGRvdCkgPT4gbmF2RG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvdCkpO1xuXG4gICAgcmV0dXJuIG5hdkRvdENvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBBY3RpdmUgZnJvbSAnLi9pbWcvZnVsbC1zdG9wLnBuZyc7XG5pbXBvcnQgSW5hY3RpdmUgZnJvbSAnLi9pbWcvcGVyaW9kLnBuZyc7XG5pbXBvcnQgaW1nQ2Fyb3VzZWwgZnJvbSAnLi9pbWdDYXJvdXNlbCc7XG5pbXBvcnQgZG90QXJyYXkgZnJvbSAnLi9kb3RBcnJheSc7XG5pbXBvcnQgY2xlYXJOYXZEb3RzIGZyb20gJy4vY2xlYXJOYXZEb3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVwbGFjZUltZyhvbGRJbmRleCwgaW5kZXgsIG5hdkRvdENvbnRhaW5lciwgd2luZG93KSB7XG4gICAgY29uc3QgY3VyckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGN1cnJJbWcuc3JjID0gaW1nQ2Fyb3VzZWxbaW5kZXhdO1xuICAgIHdpbmRvdy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIHdpbmRvdy5hcHBlbmRDaGlsZChjdXJySW1nKTtcbiAgICBjb25zdCBpbmFjdGl2ZURvdCA9IG5ldyBJbWFnZSgpO1xuICAgIGluYWN0aXZlRG90LnNyYyA9IEluYWN0aXZlO1xuICAgIGluYWN0aXZlRG90LmlkID0gb2xkSW5kZXg7XG4gICAgZG90QXJyYXkuc3BsaWNlKG9sZEluZGV4LCAxLCBpbmFjdGl2ZURvdCk7XG4gICAgY29uc3QgYWN0aXZlRG90ID0gbmV3IEltYWdlKCk7XG4gICAgYWN0aXZlRG90LnNyYyA9IEFjdGl2ZTtcbiAgICBhY3RpdmVEb3QuaWQgPSBpbmRleDtcbiAgICBhY3RpdmVEb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG90QXJyYXkuc3BsaWNlKGluZGV4LCAxLCBhY3RpdmVEb3QpO1xuICAgIGNsZWFyTmF2RG90cygpO1xuICAgIGRvdEFycmF5LmZvckVhY2goKGRvdCkgPT4gbmF2RG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvdCkpO1xuICAgIHJldHVybiBuYXZEb3RDb250YWluZXI7XG59XG4iLCJpbXBvcnQgbmF2RG90cyBmcm9tICcuL25hdkRvdHMnO1xuaW1wb3J0IGltZ0Nhcm91c2VsIGZyb20gJy4vaW1nQ2Fyb3VzZWwnO1xuaW1wb3J0IHJlcGxhY2VJbWcgZnJvbSAnLi9yZXBsYWNlSW1nJztcbmltcG9ydCBQcmV2IGZyb20gJy4vaW1nL3ByZXYucG5nJztcbmltcG9ydCBOZXh0IGZyb20gJy4vaW1nL25leHQucG5nJztcbmltcG9ydCBhZHZhbmNlU2xpZGUgZnJvbSAnLi9hZHZhbmNlU2xpZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1jb250YWluZXInKTtcbiAgICBjb25zdCB3aW5kb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZG93V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctd3JhcHBlcicpO1xuICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmRvdy5jbGFzc05hbWUgPSAnd2luZG93JztcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgbmV4dEJ1dHRvbi5zcmMgPSBOZXh0O1xuICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgIGNvbnN0IHByZXZCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwcmV2QnV0dG9uLnNyYyA9IFByZXY7XG4gICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgY29uc3QgaW5pdGlhbEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIFtpbml0aWFsSW1nLnNyY10gPSBpbWdDYXJvdXNlbDtcbiAgICB3aW5kb3cuYXBwZW5kQ2hpbGQoaW5pdGlhbEltZyk7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGNvbnN0IG5hdkRvdENvbnRhaW5lciA9IG5hdkRvdHMoaW1nQ2Fyb3VzZWwpO1xuXG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBpbmRleDtcbiAgICAgICAgaWYgKGluZGV4ID09PSBpbWdDYXJvdXNlbC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJlcGxhY2VJbWcob2xkSW5kZXgsIGluZGV4LCBuYXZEb3RDb250YWluZXIsIHdpbmRvdyk7XG4gICAgfSk7XG5cbiAgICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBvbGRJbmRleCA9IGluZGV4O1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gaW1nQ2Fyb3VzZWwubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmVwbGFjZUltZyhvbGRJbmRleCwgaW5kZXgsIG5hdkRvdENvbnRhaW5lciwgd2luZG93KTtcbiAgICB9KTtcblxuICAgIG5hdkRvdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBOdW1iZXIoYWN0aXZlSW1nLmlkKTtcbiAgICAgICAgbmF2RG90Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBpbmRleCA9IE51bWJlcihlLnRhcmdldC5pZCk7XG4gICAgICAgIHJlcGxhY2VJbWcob2xkSW5kZXgsIGluZGV4LCBuYXZEb3RDb250YWluZXIsIHdpbmRvdyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheS5pbm5lclRleHQgPSAnUGxheSc7XG4gICAgcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBhZHZhbmNlU2xpZGUoXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGltZ0Nhcm91c2VsLFxuICAgICAgICAgICAgbmF2RG90Q29udGFpbmVyLFxuICAgICAgICAgICAgd2luZG93XG4gICAgICAgICk7XG4gICAgICAgIGluZGV4ID0gbmV3SW5kZXg7XG4gICAgfSk7XG5cbiAgICB3aW5kb3dXcmFwcGVyLmFwcGVuZENoaWxkKHByZXZCdXR0b24pO1xuICAgIHdpbmRvd1dyYXBwZXIuYXBwZW5kQ2hpbGQod2luZG93KTtcbiAgICB3aW5kb3dXcmFwcGVyLmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kb3dXcmFwcGVyKTtcbiAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2RG90Q29udGFpbmVyKTtcbiAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheSk7XG4gICAgcmV0dXJuIHNsaWRlckNvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxubWFpbi5hcHBlbmRDaGlsZChzbGlkZXIoKSk7XG4vLyBtYWluLmFwcGVuZENoaWxkKG1lbnUoKSk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9