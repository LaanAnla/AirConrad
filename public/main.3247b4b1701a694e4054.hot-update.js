/*! For license information please see main.3247b4b1701a694e4054.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdate("main",{"./app/utils/Youtube.js":(e,t,o)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===n(a)?a:String(a)),r)}var i,a}function i(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}o.r(t),o.d(t,{default:()=>a});var a=i((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hidden=t;var o=this,n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";var r,i=document.getElementsByTagName("script")[0];function a(e){e.target.seekTo(4),e.target.playVideo();var t=r.getDuration();console.log("La durée de la vidéo est de "+t+" secondes");var n=setInterval((function(){var e=r.getCurrentTime();console.log("Le temps écoulé est de "+e+" secondes"),t-e<=13&&(console.log("La vidéo est terminée !"),clearInterval(n),o.hidden())}),1e3)}i.parentNode.insertBefore(n,i),console.log("youtube loaded"),window.onYouTubeIframeAPIReady=function(){r=new YT.Player("player",{height:"100vh",width:"100vw",videoId:"TgZpIVkZetA",playerVars:{autoplay:1,mute:1,controls:1},events:{onReady:a,onStateChange:u}}),console.log("script chargé")};function u(e){}}))}},(function(e){e.h=()=>"be4245a0cf2442510573"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMjQ3YjRiMTcwMWE2OTRlNDA1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eTZCQUFxQkEsRUFBT0MsR0FFMUIsU0FBQUQsRUFBWUUsZ0dBQVFDLENBQUEsS0FBQUgsR0FFcEJJLEtBQUtGLE9BQVNBLEVBQ2QsSUFBSUcsRUFBT0QsS0FDUEUsRUFBTUMsU0FBU0MsY0FBYyxVQUNqQ0YsRUFBSUcsSUFBTSxxQ0FDVixJQUtJQyxFQUxBQyxFQUFpQkosU0FBU0sscUJBQXFCLFVBQVUsR0F3QjdELFNBQVNDLEVBQWNDLEdBQ3JCQSxFQUFNQyxPQUFPQyxPQUFPLEdBQ3BCRixFQUFNQyxPQUFPRSxZQUNiLElBQUlDLEVBQVdSLEVBQU9TLGNBQ3RCQyxRQUFRQyxJQUFJLCtCQUFpQ0gsRUFBVyxhQUV4RCxJQUFJSSxFQUFXQyxhQUFZLFdBQ3pCLElBQUlDLEVBQWNkLEVBQU9lLGlCQUN6QkwsUUFBUUMsSUFBSSwwQkFBNEJHLEVBQWMsYUFJbEROLEVBQVdNLEdBQWUsS0FDNUJKLFFBQVFDLElBQUksMkJBQ1pLLGNBQWNKLEdBQ2RqQixFQUFLSCxTQUVULEdBQUcsSUFDTCxDQXpDQVMsRUFBZWdCLFdBQVdDLGFBQWF0QixFQUFLSyxHQUU1Q1MsUUFBUUMsSUFBSSxrQkFHWlEsT0FBT0Msd0JBQTBCLFdBQy9CcEIsRUFBUyxJQUFJcUIsR0FBR0MsT0FBTyxTQUFVLENBQy9CQyxPQUFRLFFBQ1JDLE1BQU8sUUFDUEMsUUFBUyxjQUNUQyxXQUFZLENBQ1YsU0FBWSxFQUNaLEtBQVEsRUFDUixTQUFZLEdBRWRDLE9BQVEsQ0FDTixRQUFXeEIsRUFDWCxjQUFpQnlCLEtBR3JCbEIsUUFBUUMsSUFBSSxnQkFDZCxFQXdCQSxTQUFTaUIsRUFBb0J4QixHQUszQixDQUtKLG1CQ2hFQXlCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvWW91dHViZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvdXR1YmUge1xuXG4gIGNvbnN0cnVjdG9yKGhpZGRlbikge1xuXG4gIHRoaXMuaGlkZGVuID0gaGlkZGVuXG4gIGxldCB0aGF0ID0gdGhpc1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICB2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG4gIGNvbnNvbGUubG9nKCd5b3V0dWJlIGxvYWRlZCcpXG5cbiAgdmFyIHBsYXllcjtcbiAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcGxheWVyID0gbmV3IFlULlBsYXllcigncGxheWVyJywge1xuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICB2aWRlb0lkOiAnVGdacElWa1pldEEnLFxuICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAnYXV0b3BsYXknOiAxLFxuICAgICAgICAnbXV0ZSc6IDEsIC8vIHN0YXJ0IG11dGVkIHRvIGFsbG93IGF1dG9wbGF5XG4gICAgICAgICdjb250cm9scyc6IDEsXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeSxcbiAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiBvblBsYXllclN0YXRlQ2hhbmdlXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3NjcmlwdCBjaGFyZ8OpJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuc2Vla1RvKDQpO1xuICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcbiAgICB2YXIgZHVyYXRpb24gPSBwbGF5ZXIuZ2V0RHVyYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZyhcIkxhIGR1csOpZSBkZSBsYSB2aWTDqW8gZXN0IGRlIFwiICsgZHVyYXRpb24gKyBcIiBzZWNvbmRlc1wiKTtcbiAgXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGxheWVyLmdldEN1cnJlbnRUaW1lKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkxlIHRlbXBzIMOpY291bMOpIGVzdCBkZSBcIiArIGN1cnJlbnRUaW1lICsgXCIgc2Vjb25kZXNcIik7XG4gIFxuICAgICAgLy8gU2kgbGEgdmlkw6lvIGVzdCB0ZXJtaW7DqWVcbiAgICAgIC8vaWYgKHBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpID09PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICAgaWYgKGR1cmF0aW9uIC0gY3VycmVudFRpbWUgPD0gMTMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYSB2aWTDqW8gZXN0IHRlcm1pbsOpZSAhXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gQXJyw6p0ZSBkZSB2w6lyaWZpZXIgdW5lIGZvaXMgcXVlIGxhIHZpZMOpbyBlc3QgdGVybWluw6llXG4gICAgICAgIHRoYXQuaGlkZGVuKClcbiAgICAgIH1cbiAgICB9LCAxMDAwKTsgLy8gVsOpcmlmaWUgbGUgdGVtcHMgw6ljb3Vsw6kgdG91dGVzIGxlcyBzZWNvbmRlc1xuICB9XG4gIFxuXG4gIHZhciBkb25lID0gZmFsc2U7XG4gIGZ1bmN0aW9uIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmICFkb25lKSB7XG4gICAgLy8gICAvLyBwbGF5ZXIudW5NdXRlKCk7IC8vIHVubXV0ZSB3aGVuIHN0YXJ0IHBsYXlpbmdcbiAgICAvLyAgIHNldFRpbWVvdXQoc3RvcFZpZGVvLCA2MDAwKTtcbiAgICAvLyAgIGRvbmUgPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuICBmdW5jdGlvbiBzdG9wVmlkZW8oKSB7XG4gICAgcGxheWVyLnN0b3BWaWRlbygpO1xuICB9XG59XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZTQyNDVhMGNmMjQ0MjUxMDU3M1wiKSJdLCJuYW1lcyI6WyJZb3V0dWJlIiwiX2NyZWF0ZUNsYXNzIiwiaGlkZGVuIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInRoYXQiLCJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5ZXIiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwib25QbGF5ZXJSZWFkeSIsImV2ZW50IiwidGFyZ2V0Iiwic2Vla1RvIiwicGxheVZpZGVvIiwiZHVyYXRpb24iLCJnZXREdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudFRpbWUiLCJnZXRDdXJyZW50VGltZSIsImNsZWFySW50ZXJ2YWwiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwid2luZG93Iiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJZVCIsIlBsYXllciIsImhlaWdodCIsIndpZHRoIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblBsYXllclN0YXRlQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9