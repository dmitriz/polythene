"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneConfigConfig=require("polythene/config/config");var _polytheneConfigConfig2=_interopRequireDefault(_polytheneConfigConfig);var _polytheneCommonMixin=require("polythene/common/mixin");var _polytheneCommonMixin2=_interopRequireDefault(_polytheneCommonMixin);var _polytheneLayoutThemeFlex=require("polythene/layout/theme/flex");var _polytheneLayoutThemeFlex2=_interopRequireDefault(_polytheneLayoutThemeFlex);var createStyles=function createStyles(config){var padding=config.padding;return[{".pe-dialog":[_polytheneLayoutThemeFlex2["default"].layout,_polytheneLayoutThemeFlex2["default"].layoutCenterCenter,_polytheneCommonMixin2["default"].vendorize({"transition-timing-function":"ease-out"},_polytheneConfigConfig2["default"].prefixes_transition),_polytheneCommonMixin2["default"].vendorize({"transition-property":"opacity"},_polytheneConfigConfig2["default"].prefixes_transition),{position:"fixed",top:0,left:0,right:0,bottom:0,"z-index":_polytheneConfigConfig2["default"].z_dialog,height:"100%",padding:padding+"px 40px",opacity:0,"&.pe-dialog--visible":{opacity:1},"&.pe-dialog--fullscreen":{padding:0," .pe-dialog__content":{"border-radius":0,"max-width":"none",height:"100%",width:"100%"," .pe-dialog__header, .pe-dialog__footer":{display:"none"}," .pe-dialog__body":{padding:0,height:"100vh",border:"none","max-height":"calc(100vh)"}}}," .pe-dialog__content":[_polytheneLayoutThemeFlex2["default"].layout,_polytheneLayoutThemeFlex2["default"].layoutVertical,{position:"relative","max-height":"100%","min-width":56*5+"px","max-width":7*_polytheneConfigConfig2["default"].grid_unit_menu+"px","border-radius":config.border_radius+"px"," > .shadow":{"z-index":-1},"&.pe-menu__content":{" .pe-dialog__body":{padding:0,border:"none"}}}]," .pe-dialog__title":{"font-size":_polytheneConfigConfig2["default"].font_size_title+"px","line-height":"24px","font-weight":_polytheneConfigConfig2["default"].font_weight_medium,display:"block","& + div":{"margin-top":"16px"}}," .pe-dialog__header":{padding:[padding-4,padding,config.header_bottom-4,padding].map(function(v){return v+"px"}).join(" "),"min-height":config.header_height+"px"," .pe-dialog__title":[_polytheneCommonMixin2["default"].ellipsis(),{display:"block",width:"100%"}]}," .pe-dialog__body":[_polytheneLayoutThemeFlex2["default"].selfStretch,_polytheneCommonMixin2["default"].hairline("border-top"),{"border-top-style":"solid"},_polytheneCommonMixin2["default"].hairline("border-top"),{"border-bottom-style":"solid"},{padding:[padding,padding,padding-5,padding].map(function(v){return v+"px"}).join(" "),"overflow-y":"auto","-webkit-overflow-scrolling":"touch","border-width":"1px","border-style":"solid none","border-color":"transparent","max-height":"calc(100vh - "+padding+"px - "+(config.header_height+config.footer_height)+"px)"}]," .pe-dialog__header + .pe-dialog__body":{"padding-top":0}," .pe-dialog__footer":{padding:"2px 8px","min-height":config.footer_height+"px","font-size":0,"&.pe-dialog__footer--high":{"padding-bottom":"8px"}}," .pe-dialog__actions":[_polytheneLayoutThemeFlex2["default"].layout,_polytheneLayoutThemeFlex2["default"].layoutHorizontal,_polytheneLayoutThemeFlex2["default"].layoutEndJustified,_polytheneLayoutThemeFlex2["default"].layoutWrap,{margin:"0 -4px"," .pe-button":{height:"36px","margin-top":"6px","margin-bottom":"6px",padding:0}}]}]," body.pe-dialog--open":{overflow:"hidden",left:0,"-webkit-overflow-scrolling":"touch",position:"fixed",top:0,width:"100%"}}]};exports["default"]=function(config){return _polytheneCommonMixin2["default"].createStyles(config,createStyles)};module.exports=exports["default"];