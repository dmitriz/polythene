"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneRippleRipple=require("polythene/ripple/ripple");var _polytheneRippleRipple2=_interopRequireDefault(_polytheneRippleRipple);var _polytheneShadowShadow=require("polythene/shadow/shadow");var _polytheneShadowShadow2=_interopRequireDefault(_polytheneShadowShadow);require("polythene/base-button/base-button");require("polythene/button/theme/theme");var CSS_CLASSES={block:"pe-button pe-button--text",content:"pe-button__content",label:"pe-button__label",raised:"pe-button--raised",wash:"pe-button__wash",selected:"pe-button--selected",disabled:"pe-button--disabled",borders:"pe-button--borders",inactive:"pe-button--inactive"};var MAX_Z=5;var startType=window.PointerEvent?"pointerdown":"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?"touchstart":"mousedown";var endType=window.PointerEvent?"pointerup":"ontouchend"in window||window.DocumentTouch&&document instanceof DocumentTouch?"touchend":"mouseup";var tapStart=undefined,tapEnd=undefined;var initTapEvents=function initTapEvents(el,ctrl,opts){var animateOnTap=opts.animateOnTap&&!_polythenePolythenePolythene2["default"].isTouch;var tapHandler=function tapHandler(evt){if(!animateOnTap){return}var baseZ=ctrl.baseZ();if(baseZ===5){return}var increase=opts.increase||1;var z=ctrl.z();if(evt==="down"){z=z+increase;z=Math.min(z,MAX_Z)}else if(evt==="up"){z=z-increase;z=Math.max(z,baseZ)}if(z!==ctrl.z()){ctrl.z(z);_mithril2["default"].redraw()}};tapStart=function(){tapHandler("down")};tapEnd=function(){tapHandler("up")};el.addEventListener(startType,tapStart);el.addEventListener(endType,tapEnd);document.body.addEventListener(endType,tapEnd)};var clearTapEvents=function clearTapEvents(el){el.removeEventListener(startType,tapStart);el.removeEventListener(endType,tapEnd);document.body.removeEventListener(endType,tapEnd)};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var noink=opts.ink!==undefined&&!opts.ink;var disabled=opts.disabled;var inactive=opts.inactive;var tag=opts.tag||"a";var buttonConfig=function buttonConfig(el,isInited,context){if(isInited){return}if(!disabled&&!inactive){initTapEvents(el,ctrl,Object.assign({},opts,{animateOnTap:opts.animateOnTap!==undefined?opts.animateOnTap:true}));context.onunload=function(){clearTapEvents(el)}}};var optsConfig=opts.config||function(){};var urlConfig=opts.url&&opts.url.config?opts.url.config:function(){};var props=Object.assign({},{"class":[opts.parentClass||CSS_CLASSES.block,opts.selected?CSS_CLASSES.selected:null,disabled?CSS_CLASSES.disabled:null,inactive?CSS_CLASSES.inactive:null,opts.borders?CSS_CLASSES.borders:null,opts.raised?CSS_CLASSES.raised:null,opts["class"]].join(" "),id:opts.id||""},opts.url?opts.url:null,opts.formaction?{formaction:opts.formaction}:null,opts.type?{type:opts.type}:null,opts.events?opts.events:null,{config:function config(){return[buttonConfig.apply(undefined,arguments),optsConfig.apply(undefined,arguments),urlConfig.apply(undefined,arguments)]}});var label=opts.content?opts.content:opts.label?typeof opts.label==="object"?opts.label:(0,_mithril2["default"])("div",{"class":CSS_CLASSES.label},opts.label):null;var content=(0,_mithril2["default"])("div",{"class":CSS_CLASSES.content},[opts.raised&&!disabled?_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:ctrl.z(),animated:true}):null,inactive||disabled||noink?null:_mithril2["default"].component(_polytheneRippleRipple2["default"],opts.ripple||{}),inactive||disabled||opts.wash!==undefined&&!opts.wash?null:(0,_mithril2["default"])("div",{"class":CSS_CLASSES.wash}),label]);return(0,_mithril2["default"])(tag,props,[opts.before,content,opts.after])};var component={controller:function controller(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var z=opts.z!==undefined?opts.z:1;return{baseZ:_mithril2["default"].prop(z),z:_mithril2["default"].prop(z)}},view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];