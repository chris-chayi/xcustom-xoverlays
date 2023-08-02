!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(self.webpackChunkcustomOverlays=self.webpackChunkcustomOverlays||[]).push([[592],{592:function(n,r,o){"use strict";o.r(r),o.d(r,{ion_select:function(){return h},ion_select_option:function(){return w},ion_select_popover:function(){return O}});var a=o(6304),s=o(245),l=o(6374),c=o(8146),u=o(1104),d=o(1269),p=function(e,t){if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(function(t){return t.value===e.value})},h=function(){function n(e){var i=this;t(this,n),(0,s.r)(this,e),this.ionChange=(0,s.e)(this,"ionChange",7),this.ionCancel=(0,s.e)(this,"ionCancel",7),this.ionFocus=(0,s.e)(this,"ionFocus",7),this.ionBlur=(0,s.e)(this,"ionBlur",7),this.ionStyle=(0,s.e)(this,"ionStyle",7),this.inputId="ion-sel-"+y++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=function(e){i.setFocus(),i.open(e)},this.onFocus=function(){i.ionFocus.emit()},this.onBlur=function(){i.ionBlur.emit()}}return i(n,[{key:"styleChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}},{key:"connectedCallback",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.updateOverlayOptions(),e.emitStyle(),e.mutationO=function(e,t,n){if("undefined"!=typeof MutationObserver){var i=new MutationObserver(function(e){n(function(e,t){var n;return e.forEach(function(e){for(var t=0;t<e.addedNodes.length;t++)n=p(e.addedNodes[t],"ion-select-option")||n}),n}(e))});return i.observe(e,{childList:!0,subtree:!0}),i}}(e.el,0,(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.updateOverlayOptions();case 1:case"end":return t.stop()}},t)})));case 1:case"end":return t.stop()}},t)}))()}},{key:"disconnectedCallback",value:function(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}},{key:"componentDidLoad",value:function(){this.didInit=!0}},{key:"open",value:function(e){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function n(){var i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.disabled&&!t.isExpanded){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.createOverlay(e);case 4:if(i=t.overlay=n.sent,t.isExpanded=!0,i.onDidDismiss().then(function(){t.overlay=void 0,t.isExpanded=!1,t.setFocus()}),"popover"!==t.interface){n.next=12;break}return n.next=10,i.presentFromTrigger(e,!0);case 10:n.next=14;break;case 12:return n.next=14,i.present();case 14:return n.abrupt("return",i);case 15:case"end":return n.stop()}},n)}))()}},{key:"createOverlay",value:function(e){var t=this.interface;return"action-sheet"===t&&this.multiple&&(console.warn('Select interface cannot be "'.concat(t,'" with a multi-value select. Using the "alert" interface instead.')),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "'.concat(t,'" without passing an event. Using the "alert" interface instead.')),t="alert"),"action-sheet"===t?this.openActionSheet():"popover"===t?this.openPopover(e):this.openAlert()}},{key:"updateOverlayOptions",value:function(){var e=this.overlay;if(e){var t=this.childOpts,n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":var i=e.querySelector("ion-select-popover");i&&(i.options=this.createPopoverOptions(t,n));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",n)}}}},{key:"createActionSheetButtons",value:function(e,t){var n=this,i=e.map(function(e){var i=v(e),r=Array.from(e.classList).filter(function(e){return"hydrated"!==e}).join(" "),o="".concat(k," ").concat(r);return{role:f(i,t,n.compareWith)?"selected":"",text:e.textContent,cssClass:o,handler:function(){n.value=i}}});return i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}}),i}},{key:"createAlertInputs",value:function(e,t,n){var i=this;return e.map(function(e){var r=v(e),o=Array.from(e.classList).filter(function(e){return"hydrated"!==e}).join(" ");return{type:t,cssClass:"".concat(k," ").concat(o),label:e.textContent||"",value:r,checked:f(r,n,i.compareWith),disabled:e.disabled}})}},{key:"createPopoverOptions",value:function(e,t){var n=this;return e.map(function(e){var i=v(e),r=Array.from(e.classList).filter(function(e){return"hydrated"!==e}).join(" ");return{text:e.textContent||"",cssClass:"".concat(k," ").concat(r),value:i,checked:f(i,t,n.compareWith),disabled:e.disabled,handler:function(e){n.value=e,n.multiple||n.close()}}})}},{key:"openPopover",value:function(e){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function n(){var i,r,o,a,s,c,d,p,h;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.interfaceOptions,r=(0,l.b)(t),o="md"!==r,a=t.multiple,s=t.value,c=e,d="auto",(p=t.el.closest("ion-item"))&&(p.classList.contains("item-label-floating")||p.classList.contains("item-label-stacked"))&&(c=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:p}}),d="cover"),h=Object.assign(Object.assign({mode:r,event:c,alignment:"center",size:d,showBackdrop:o},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,multiple:a,value:s,options:t.createPopoverOptions(t.childOpts,s)}}),n.abrupt("return",u.c.create(h));case 6:case"end":return n.stop()}},n)}))()}},{key:"openActionSheet",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function t(){var n,i,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,l.b)(e),i=e.interfaceOptions,r=Object.assign(Object.assign({mode:n},i),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",i.cssClass]}),t.abrupt("return",u.b.create(r));case 2:case"end":return t.stop()}},t)}))()}},{key:"openAlert",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function t(){var n,i,r,o,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.getLabel(),i=n?n.textContent:null,r=e.interfaceOptions,o=e.multiple?"checkbox":"radio",a=(0,l.b)(e),s=Object.assign(Object.assign({mode:a},r),{header:r.header?r.header:i,inputs:e.createAlertInputs(e.childOpts,o,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:function(){e.ionCancel.emit()}},{text:e.okText,handler:function(t){e.value=t}}],cssClass:["select-alert",r.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]}),t.abrupt("return",u.a.create(s));case 2:case"end":return t.stop()}},t)}))()}},{key:"close",value:function(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}},{key:"getLabel",value:function(){return(0,c.h)(this.el)}},{key:"hasValue",value:function(){return""!==this.getText()}},{key:"childOpts",get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))}},{key:"getText",value:function(){var e=this.selectedText;return null!=e&&""!==e?e:b(this.childOpts,this.value,this.compareWith)}},{key:"setFocus",value:function(){this.focusEl&&this.focusEl.focus()}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})}},{key:"render",value:function(){var t,n=this,i=this.disabled,r=this.el,o=this.inputId,a=this.isExpanded,u=this.name,p=this.placeholder,h=this.value,f=(0,l.b)(this),v=(0,c.d)(r,o),g=v.labelText,b=v.labelId;(0,c.e)(!0,r,u,m(h),i);var x=!1,y=this.getText();""===y&&void 0!==p&&(y=p,x=!0);var k={"select-text":!0,"select-placeholder":x},w=x?"placeholder":"text",C=void 0!==g?""!==y?"".concat(y,", ").concat(g):g:y;return(0,s.h)(s.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":i?"true":null,"aria-label":C,class:(t={},e(t,f,!0),e(t,"in-item",(0,d.h)("ion-item",r)),e(t,"select-disabled",i),e(t,"select-expanded",a),t)},(0,s.h)("div",{"aria-hidden":"true",class:k,part:w},y),(0,s.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,s.h)("div",{class:"select-icon-inner"})),(0,s.h)("label",{id:b},C),(0,s.h)("button",{type:"button",disabled:i,id:o,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":"".concat(a),onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return n.focusEl=e}}))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}}}]),n}(),f=function(e,t,n){return void 0!==e&&(Array.isArray(e)?e.some(function(e){return g(e,t,n)}):g(e,t,n))},v=function(e){var t=e.value;return void 0===t?e.textContent||"":t},m=function(e){if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},g=function(e,t,n){return"function"==typeof n?n(e,t):"string"==typeof n?e[n]===t[n]:Array.isArray(t)?t.includes(e):e===t},b=function(e,t,n){return void 0===t?"":Array.isArray(t)?t.map(function(t){return x(e,t,n)}).filter(function(e){return null!==e}).join(", "):x(e,t,n)||""},x=function(e,t,n){var i=e.find(function(e){return g(v(e),t,n)});return i?i.textContent:null},y=0,k="select-interface-option";h.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};var w=function(){function e(n){t(this,e),(0,s.r)(this,n),this.inputId="ion-selopt-"+C++,this.disabled=!1}return i(e,[{key:"render",value:function(){return(0,s.h)(s.H,{role:"option",id:this.inputId,class:(0,l.b)(this)})}},{key:"el",get:function(){return(0,s.i)(this)}}]),e}(),C=0;w.style=":host{display:none}";var O=function(){function e(n){t(this,e),(0,s.r)(this,n),this.options=[]}return i(e,[{key:"onSelect",value:function(e){this.setChecked(e),this.callOptionHandler(e)}},{key:"callOptionHandler",value:function(e){var t=this,n=this.options.find(function(n){return t.getValue(n.value)===e.target.value}),i=this.getValues(e);n&&n.handler&&(0,u.s)(n.handler,i)}},{key:"rbClick",value:function(e){this.callOptionHandler(e)}},{key:"setChecked",value:function(e){var t=this,n=this.multiple,i=this.options.find(function(n){return t.getValue(n.value)===e.target.value});n&&i&&(i.checked=e.detail.checked)}},{key:"getValues",value:function(e){var t=this,n=this.multiple,i=this.options;if(n)return i.filter(function(e){return e.checked}).map(function(e){return e.value});var r=i.find(function(n){return t.getValue(n.value)===e.target.value});return r?r.value:void 0}},{key:"getValue",value:function(e){return"number"==typeof e?e.toString():e}},{key:"renderOptions",value:function(e){switch(this.multiple){case!0:return this.renderCheckboxOptions(e);default:return this.renderRadioOptions(e)}}},{key:"renderCheckboxOptions",value:function(e){return e.map(function(e){return(0,s.h)("ion-item",{class:(0,d.g)(e.cssClass)},(0,s.h)("ion-checkbox",{slot:"start",value:e.value,disabled:e.disabled,checked:e.checked}),(0,s.h)("ion-label",null,e.text))})}},{key:"renderRadioOptions",value:function(e){var t=this,n=e.filter(function(e){return e.checked}).map(function(e){return e.value})[0];return(0,s.h)("ion-radio-group",{value:n},e.map(function(e){return(0,s.h)("ion-item",{class:(0,d.g)(e.cssClass)},(0,s.h)("ion-label",null,e.text),(0,s.h)("ion-radio",{value:e.value,disabled:e.disabled,onClick:function(e){return t.rbClick(e)}}))}))}},{key:"render",value:function(){var e=this.header,t=this.message,n=this.options,i=this.subHeader,r=void 0!==i||void 0!==t;return(0,s.h)(s.H,{class:(0,l.b)(this)},(0,s.h)("ion-list",null,void 0!==e&&(0,s.h)("ion-list-header",null,e),r&&(0,s.h)("ion-item",null,(0,s.h)("ion-label",{class:"ion-text-wrap"},void 0!==i&&(0,s.h)("h3",null,i),void 0!==t&&(0,s.h)("p",null,t))),this.renderOptions(n)))}}]),e}();O.style={ios:"ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",md:"ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}"}}}])}();