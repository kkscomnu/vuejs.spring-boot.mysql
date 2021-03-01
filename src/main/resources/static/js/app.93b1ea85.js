(function(e){function t(t){for(var s,o,i=t[0],l=t[1],u=t[2],m=0,f=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},n=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;n.push(["56d7","chunk-vendors"]),r()})({2809:function(e,t,r){},"48ec":function(e,t,r){"use strict";r("2809")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7");var s=r("2b0e"),a=r("bc3a"),n=r.n(a),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],l={name:"App"},u=l,c=r("2877"),m=Object(c["a"])(u,o,i,!1,null,null,null),f=m.exports,p=r("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("TaskAgile")])])}],g={name:"LoginPage"},h=g,b=Object(c["a"])(h,d,v,!1,null,null,null),_=b.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"register-form"},[e._m(0),r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"alert alert-danger failed"},[e._v(e._s(e.errorMessage))]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-contorl",attrs:{type:"text",id:"username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"emailAddress"}},[e._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.emailAddress,expression:"form.emailAddress"}],staticClass:"form-contorl",attrs:{type:"email",id:"emailAddress"},domProps:{value:e.form.emailAddress},on:{input:function(t){t.target.composing||e.$set(e.form,"emailAddress",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-contorl",attrs:{type:"password",id:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("Create account")])])])]),e._m(1)])},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-wrapper"},[r("img",{staticClass:"logo",attrs:{src:"/static/images/logo.png"}}),r("div",{staticClass:"tagline"},[e._v("Open source task management tool")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("span",{staticClass:"copyright"},[e._v("© 2018 TaskAgile.com")]),r("ul",{staticClass:"footer-links list-inline float-right"},[r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[e._v("About")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[e._v("Terms of Service")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[e._v("Privacy Policy")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"https://github.com/taskagile/vuejs.spring-boot.mysql",target:"_blank"}},[e._v("GitHub")])])])])}],C={register:function(e){return new Promise((function(t,r){n.a.post("/registrations",e).then((function(e){var r=e.data;t(r)})).catch((function(e){r(e)}))}))}},P={name:"RegisterPage",data:function(){return{form:{username:"",emailAddress:"",password:""},errorMessage:""}},methods:{submitForm:function(){var e=this;C.register(this.form).then((function(){e.$router.push({name:"LoginPage"})})).catch((function(t){e.errorMessage="Failed to register user. Reason: "+(t.message?t.message:"Unknown")+"."}))}}},j=P,O=(r("48ec"),Object(c["a"])(j,w,y,!1,null,"ffc38462",null)),x=O.exports;s["a"].use(p["a"]);var A=new p["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"LoginPage",component:_},{path:"/register",name:"RegisterPage",component:x}]}),k=r("2f62");s["a"].use(k["a"]);var $=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,n.a.defaults.baseURL="/api",n.a.defaults.headers.common.Accept="applicaiton/json",n.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),new s["a"]({router:A,store:$,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.93b1ea85.js.map