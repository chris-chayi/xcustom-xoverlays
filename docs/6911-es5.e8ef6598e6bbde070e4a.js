!function(){function t(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function r(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function i(t,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,r,n){return r&&i(t.prototype,r),n&&i(t,n),t}(self.webpackChunkcustomOverlays=self.webpackChunkcustomOverlays||[]).push([[6911],{6911:function(i,o,e){"use strict";e.r(o),e.d(o,{ion_card:function(){return l},ion_card_content:function(){return c},ion_card_header:function(){return p},ion_card_subtitle:function(){return g},ion_card_title:function(){return h}});var a=e(245),s=e(6374),d=e(1269),l=function(){function i(t){r(this,i),(0,a.r)(this,t),this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}return n(i,[{key:"isClickable",value:function(){return void 0!==this.href||this.button}},{key:"renderCard",value:function(t){var r=this.isClickable();if(!r)return[(0,a.h)("slot",null)];var i=this.href,n=this.routerAnimation,o=this.routerDirection,e=r?void 0===i?"button":"a":"div";return(0,a.h)(e,Object.assign({},"button"===e?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target},{class:"card-native",part:"native",disabled:this.disabled,onClick:function(t){return(0,d.o)(i,t,o,n)}}),(0,a.h)("slot",null),r&&"md"===t&&(0,a.h)("ion-ripple-effect",null))}},{key:"render",value:function(){var r,i=(0,s.b)(this);return(0,a.h)(a.H,{class:(0,d.c)(this.color,(r={},t(r,i,!0),t(r,"card-disabled",this.disabled),t(r,"ion-activatable",this.isClickable()),r))},this.renderCard(i))}}]),i}();l.style={ios:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}",md:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"};var c=function(){function i(t){r(this,i),(0,a.r)(this,t)}return n(i,[{key:"render",value:function(){var r,i=(0,s.b)(this);return(0,a.h)(a.H,{class:(r={},t(r,i,!0),t(r,"card-content-".concat(i),!0),r)})}}]),i}();c.style={ios:"ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}ion-card-header+.card-content-ios{padding-top:0}",md:"ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"};var p=function(){function i(t){r(this,i),(0,a.r)(this,t),this.translucent=!1}return n(i,[{key:"render",value:function(){var r=(0,s.b)(this);return(0,a.h)(a.H,{class:(0,d.c)(this.color,t({"card-header-translucent":this.translucent,"ion-inherit-color":!0},r,!0))},(0,a.h)("slot",null))}}]),i}();p.style={ios:":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}",md:":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}"};var g=function(){function i(t){r(this,i),(0,a.r)(this,t)}return n(i,[{key:"render",value:function(){var r=(0,s.b)(this);return(0,a.h)(a.H,{role:"heading","aria-level":"3",class:(0,d.c)(this.color,t({"ion-inherit-color":!0},r,!0))},(0,a.h)("slot",null))}}]),i}();g.style={ios:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}",md:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}"};var h=function(){function i(t){r(this,i),(0,a.r)(this,t)}return n(i,[{key:"render",value:function(){var r=(0,s.b)(this);return(0,a.h)(a.H,{role:"heading","aria-level":"2",class:(0,d.c)(this.color,t({"ion-inherit-color":!0},r,!0))},(0,a.h)("slot",null))}}]),i}();h.style={ios:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}",md:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"}}}])}();