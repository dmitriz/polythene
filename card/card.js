"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),require("polythene/common/object.assign");var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_shadow=require("polythene/shadow/shadow"),_shadow2=_interopRequireDefault(_shadow),_icon=require("polythene/icon/icon"),_icon2=_interopRequireDefault(_icon),_listTile=require("polythene/list-tile/list-tile"),_listTile2=_interopRequireDefault(_listTile);require("polythene/card/theme/theme");var CSS_CLASSES={block:"pe-card",overlay:"pe-card__overlay",overlaySheet:"pe-card__overlay--sheet",overlayContent:"pe-card__overlay__content",mediaDimmer:"pe-card__media__dimmer",mediaCropX:"pe-card__media--crop-x",mediaCropY:"pe-card__media--crop-y",media:"pe-card__media",header:"pe-card__header",headerTitle:"pe-card__header-title",title:"pe-card__title",subtitle:"pe-card__subtitle",text:"pe-card__text",primary:"pe-card__primary",primaryMedia:"pe-card__primary__media",actions:"pe-card__actions",actionsHorizontal:"pe-card__actions--horizontal",actionsVertical:"pe-card__actions--vertical",actionsJustified:"pe-card__actions--justified",actionsBordered:"pe-card__actions--borders",mediaRatioSquare:"pe-card__media--square",mediaRatioLandscape:"pe-card__media--landscape",primaryHasMedia:"pe-card__primary--media",mediaSmall:"pe-card__media--small",mediaRegular:"pe-card__media--regular",mediaMedium:"pe-card__media--medium",mediaLarge:"pe-card__media--large"},imageRatios={landscape:16/9,square:1},createOverlay=function(){var opts=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],tag=opts.tag||"div",content=opts.content.map(function(o){var key=Object.keys(o)[0];return contentMap[key](o)});return({ tag: "div", attrs: { "class": [CSS_CLASSES.overlay,opts.sheet?CSS_CLASSES.overlaySheet:null].join(" ") }, children: [ (0,_mithril2["default"])(tag,{"class":[CSS_CLASSES.overlayContent,opts["class"]].join(" ")},content),({ tag: "div", attrs: { "class": CSS_CLASSES.mediaDimmer }, children: [] }) ] })},createText=function(o){var opts=o.text||{},tag=opts.tag||"div";return(0,_mithril2["default"])(tag,{"class":[CSS_CLASSES.text,opts["class"]].join(" ")},opts.content)},mediaTypeClasses={small:CSS_CLASSES.mediaSmall,regular:CSS_CLASSES.mediaRegular,medium:CSS_CLASSES.mediaMedium,large:CSS_CLASSES.mediaLarge},mediaClassForType=function(){var mode=arguments.length<=0||void 0===arguments[0]?"regular":arguments[0];return mediaTypeClasses[mode]},createMedia=function(o){var opts=o.media||{},ratio=opts.ratio||"landscape",origin=opts.origin||"center",tag=opts.tag||"div",initImage=function(el,inited){if(!inited){var img=el.querySelector("img");img&&(img.onload=function(){var w=this.naturalWidth,h=this.naturalHeight,naturalRatio=w/h,cropClass=naturalRatio<imageRatios[ratio]?CSS_CLASSES.mediaCropX:CSS_CLASSES.mediaCropY;if(img.className=cropClass,"start"!==origin){var clientWidth=el.clientWidth,clientHeight=el.clientHeight;if(naturalRatio<imageRatios[ratio]){var imageHeight=clientWidth/naturalRatio,diff=clientHeight-imageHeight,offset=Math.ceil("center"===origin?diff/2:diff);this.style.marginTop=offset+"px"}else{var imageWidth=clientHeight*naturalRatio,_diff=clientWidth-imageWidth,_offset=Math.ceil("center"===origin?_diff/2:_diff);this.style.marginLeft=_offset+"px"}}})}};return(0,_mithril2["default"])(tag,{"class":[CSS_CLASSES.media,mediaClassForType(opts.type),"landscape"===ratio?CSS_CLASSES.mediaRatioLandscape:CSS_CLASSES.mediaRatioSquare].join(" "),config:initImage},[opts.content,opts.overlay?createOverlay(opts.overlay):({ tag: "div", attrs: { "class": CSS_CLASSES.mediaDimmer }, children: [] })])},createHeader=function(o){var opts=o.header||{};return _mithril2["default"].component(_listTile2["default"],Object.assign({},opts,{"class":[CSS_CLASSES.header,opts["class"]].join(" ")},opts.icon?{front:_mithril2["default"].component(_icon2["default"],opts.icon)}:null))},actionLayoutClasses={horizontal:CSS_CLASSES.actionsHorizontal,vertical:CSS_CLASSES.actionsVertical,justified:CSS_CLASSES.actionsJustified},actionClassForLayout=function(){var layout=arguments.length<=0||void 0===arguments[0]?"horizontal":arguments[0];return actionLayoutClasses[layout]},createActions=function(o){var opts=o.actions||{},tag=opts.tag||"div";return(0,_mithril2["default"])(tag,{"class":[CSS_CLASSES.actions,actionClassForLayout(opts.layout),opts["class"]].join(" ")},opts.content)},createPrimary=function(o){var content=void 0,key=void 0,partOpts=void 0,opts=o.primary||{},tag=opts.tag||"div",primaryHasMedia=!1,lookup={title:function(pops){return pops.attrs?pops:({ tag: "div", attrs: { "class": CSS_CLASSES.title }, children: [ pops.title?pops.title:null,pops.subtitle?({ tag: "div", attrs: { "class": CSS_CLASSES.subtitle }, children: [ pops.subtitle ] }):null ] })},media:function(pops){return primaryHasMedia=!0,({ tag: "div", attrs: { "class": CSS_CLASSES.primaryMedia }, children: [ createMedia({media:pops}) ] })},actions:function(pops){return createActions({actions:pops})}};return content=Array.isArray(opts.content)?opts.content.map(function(part){return key=Object.keys(part)[0],partOpts=part[key],lookup[key]?lookup[key](partOpts):part}):[opts.title?lookup.title({title:opts.title,subtitle:opts.subtitle}):null,opts.media?lookup.media(opts.media):null,opts.actions?lookup.actions(opts.actions):null,opts.content?opts.content:null],(0,_mithril2["default"])(tag,{"class":[CSS_CLASSES.primary,primaryHasMedia?CSS_CLASSES.primaryHasMedia:null].join(" ")},content)},contentMap={text:createText,media:createMedia,header:createHeader,primary:createPrimary,actions:createActions},createView=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],tag=opts.tag||opts.url?"a":"div",props=Object.assign({"class":[CSS_CLASSES.block,opts["class"]].join(" "),id:opts.id||"",config:opts.config},opts.url?opts.url:null,opts.events?opts.events:null),content=void 0;return Array.isArray(opts.content)?(content=opts.content.map(function(o){var key=Object.keys(o)[0];return contentMap[key](o)}),content.unshift(_mithril2["default"].component(_shadow2["default"],{z:ctrl.z(),animated:!0}))):content=[_mithril2["default"].component(_shadow2["default"],{z:ctrl.z(),animated:!0}),opts.content],(0,_mithril2["default"])(tag,props,[opts.before,content,opts.after])},component={controller:function(){var opts=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],z=void 0!==opts.z?opts.z:1;return{z:_mithril2["default"].prop(z)}},view:function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=card.js.map