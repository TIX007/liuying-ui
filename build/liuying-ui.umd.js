(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e["liuying-ui"]={},e.Vue))})(this,function(e,t){"use strict";const l={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},block:{type:Boolean,default:!1}};var u=t.defineComponent({name:"LyButton",props:l,setup(n,{slots:o}){const{type:d,size:f,block:r}=t.toRefs(n);return()=>{const c=o.default?o.default():"\u6309\u94AE",p=r.value?"ly-btn--block":"";return t.createVNode("button",{class:`ly-btn ly-btn--${d.value} ly-btn--${f.value} ${p}`},[c])}}}),i={install(n){n.component(u.name,u)}};const s=[i];var a={version:"0.0.1",install(n){s.forEach(o=>n.use(o))}};e.Button=u,e.default=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});