(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e.index={},e.Vue))})(this,function(e,t){"use strict";const l={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},block:{type:Boolean,default:!1}};var n=t.defineComponent({name:"LyButton",props:l,setup(o,{slots:u}){const{type:i,size:s,block:a}=t.toRefs(o);return()=>{const f=u.default?u.default():"\u6309\u94AE",r=a.value?"ly-btn--block":"";return t.createVNode("button",{class:`ly-btn ly-btn--${i.value} ly-btn--${s.value} ${r}`},[f])}}}),d={install(o){o.component(n.name,n)}};e.Button=n,e.default=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
