/*! For license information please see main.465fdea8872cdfac550f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdate("main",{"./app/components/Preloader/Preloader.js":(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o("./app/classes/Component.js"),r=o("./node_modules/gsap/index.js");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(r=n.key,u=void 0,u=function(e,t){if("object"!==i(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===i(u)?u:String(u)),n)}var r,u}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=l(e);if(t){var r=l(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,o)}}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(l,e);var t,o,n,i=c(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this,{element:".preloader",elements:{number:".preloader__number__text",welcome:".prelaoder__brands",video:document.querySelector(".video__preloader"),button:document.querySelector(".preloader__video__close"),cover:document.querySelector(".preloader__brands")}})).createLoader(),e.skipPreloader(),e}return t=l,(o=[{key:"createLoader",value:function(){var e=this;r.gsap.to(document.querySelector("body"),{overflow:"hidden"});var t=new XMLHttpRequest;t.open("GET","/video-intro-flashback.mp4",!0),t.responseType="blob",t.onprogress=function(t){if(t.lengthComputable){var o=t.loaded/t.total*100;e.elements.number.innerHTML="".concat(Math.round(o),"%")}},t.onload=function(){if(200===t.status){var o=t.response,n=URL.createObjectURL(o);e.elements.video.src=n}e.elements.video.onloadedmetadata=function(){e.elements.video.ontimeupdate=function(){e.elements.video.currentTime>=e.elements.video.duration&&r.gsap.to(e.elements.cover,{autoAlpha:0,duration:.6,ease:"Power4.out",onComplete:function(){e.hide()}})}}},t.onloadend=function(){setTimeout((function(){e.onLoaded()}),2500)},t.send()}},{key:"onLoaded",value:function(){var e=this;r.gsap.to(this.elements.cover,{autoAlpha:0,duration:.6,ease:"Power4.out",onComplete:function(){e.elements.video.play()}})}},{key:"skipPreloader",value:function(){var e=this;this.elements.button.addEventListener("click",(function(){e.hide(),e.elements.video.pause()}))}},{key:"hide",value:function(){var e=this,t=new r.gsap.timeline({onComplete:function(){e.destroy()}});t.to(this.elements.video,{autoAlpha:0,duration:.5}),t.to(this.elements.button,{autoAlpha:0,duration:.5},0)}},{key:"destroy",value:function(){this.element.parentNode.removeChild(this.element),this.emit("completed")}}])&&u(t.prototype,o),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default)}},(function(e){e.h=()=>"6863b03f034189151bdf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUNaLG9GQUFDdEUsQ0FBQSxDQXJHMkIsQ0FBU3VFLEVBQUFBLHdCQ0h2Q0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6ICcucHJlbG9hZGVyJyxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcl9fdGV4dCcsXG4gICAgICAgIHdlbGNvbWU6ICcucHJlbGFvZGVyX19icmFuZHMnLFxuICAgICAgICB2aWRlbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvX19wcmVsb2FkZXInKSxcbiAgICAgICAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyX192aWRlb19fY2xvc2UnKSxcbiAgICAgICAgY292ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX2JyYW5kcycpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gICAgdGhpcy5za2lwUHJlbG9hZGVyKClcbiAgfVxuXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICBnc2FwLnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSlcblxuICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXEub3BlbignR0VUJywgJy92aWRlby1pbnRyby1mbGFzaGJhY2subXA0JywgdHJ1ZSk7XG4gICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICByZXEub25wcm9ncmVzcyA9IChvRXZlbnQpPT4ge1xuICAgICAgaWYgKG9FdmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IChvRXZlbnQubG9hZGVkL29FdmVudC50b3RhbCkqMTAwO1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudENvbXBsZXRlKX0lYFxuICAgICAgfVxuICB9XG4gIHJlcS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgdmFyIHZpZGVvQmxvYiA9IHJlcS5yZXNwb25zZTtcbiAgICAgIHZhciB2aWQgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHZpZGVvQmxvYik7IC8vIElFMTArXG4gICAgICB0aGlzLmVsZW1lbnRzLnZpZGVvLnNyYyA9IHZpZDtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50cy52aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50cy52aWRlby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIHZhciB0aW1lV2F0Y2hlZCA9IHRoaXMuZWxlbWVudHMudmlkZW8uY3VycmVudFRpbWVcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5lbGVtZW50cy52aWRlby5kdXJhdGlvblxuXG4gICAgICAgIGlmICh0aW1lV2F0Y2hlZCA+PSBkdXJhdGlvbikge1xuICAgICAgICAgIGdzYXAudG8odGhpcy5lbGVtZW50cy5jb3Zlciwge1xuICAgICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6IFwiUG93ZXI0Lm91dFwiLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICByZXEub25sb2FkZW5kID0gKCk9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uTG9hZGVkKClcbiAgICB9LCAyNTAwKVxuICB9XG4gICAgXG4gICAgcmVxLnNlbmQoKTtcbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIC8vIHRoaXMuZW1pdCgnY29tcGxldGVkJylcbiAgICBnc2FwLnRvKHRoaXMuZWxlbWVudHMuY292ZXIsIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICBlYXNlOiBcIlBvd2VyNC5vdXRcIixcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy52aWRlby5wbGF5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2tpcFByZWxvYWRlcigpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICAgIHRoaXMuZWxlbWVudHMudmlkZW8ucGF1c2UoKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGNvbnN0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgb25Db21wbGV0ZTogKCk9PiB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgdGwudG8odGhpcy5lbGVtZW50cy52aWRlbywge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjVcbiAgICAgIH0pXG4gICAgICB0bC50byh0aGlzLmVsZW1lbnRzLmJ1dHRvbiwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjVcbiAgICAgIH0sMClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIHRoaXMuZW1pdCgnY29tcGxldGVkJylcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY4NjNiMDNmMDM0MTg5MTUxYmRmXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJudW1iZXIiLCJ3ZWxjb21lIiwidmlkZW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJjb3ZlciIsImNyZWF0ZUxvYWRlciIsInNraXBQcmVsb2FkZXIiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsImdzYXAiLCJvdmVyZmxvdyIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsIm9ucHJvZ3Jlc3MiLCJvRXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudENvbXBsZXRlIiwibG9hZGVkIiwidG90YWwiLCJpbm5lckhUTUwiLCJjb25jYXQiLCJNYXRoIiwicm91bmQiLCJvbmxvYWQiLCJzdGF0dXMiLCJ2aWRlb0Jsb2IiLCJyZXNwb25zZSIsInZpZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInNyYyIsIm9ubG9hZGVkbWV0YWRhdGEiLCJvbnRpbWV1cGRhdGUiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwiYXV0b0FscGhhIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJoaWRlIiwib25sb2FkZW5kIiwic2V0VGltZW91dCIsIm9uTG9hZGVkIiwic2VuZCIsIl90aGlzMyIsInRoaXMiLCJwbGF5IiwiX3RoaXM0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdXNlIiwiX3RoaXM1IiwidGwiLCJkZXN0cm95IiwidG8iLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJlbWl0IiwiQ29tcG9uZW50IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9