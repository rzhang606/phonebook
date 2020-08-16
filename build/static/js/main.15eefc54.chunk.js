(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{32:function(e,t,n){e.exports=n(62)},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),u=n.n(c),o=n(5),i=n.n(o),l=n(8),s=n(6),d=function(e){var t=e.input,n=e.inputHandler;return r.a.createElement("form",null,r.a.createElement("div",null,"Filter by name: ",r.a.createElement("input",{value:t,onChange:n})))},p=n(9),f=n.n(p),m="/api/persons",b=null,g={getAll:function(){return console.log("Getting all from server ... "),f.a.get(m).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,f.a.post(m,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(e){return f.a.delete("".concat(m,"/").concat(e))},update:function(e,t){return f.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){b="bearer ".concat(e)}},v=n(11),h=n(28),E=function(e){return function(t){t(O(e)),setTimeout((function(){return t(O(""))}),5e3)}},w=function(e){return function(t){t(O(e.message)),setTimeout((function(){return t(O(""))}),5e3)}},O=function(e){return{type:"E_SET",data:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"E_SET":return t.data;default:return e}},j=function(){return function(e){g.getAll().then((function(t){return e({type:"P_SET",data:t})})).catch((function(t){return e(w(t))}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action:",t),t.type){case"P_SET":return t.data;default:return e}},k=function(e){return function(t){t(x(e)),setTimeout((function(){return t(x(""))}),5e3)}},x=function(e){return{type:"N_SET",data:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"N_SET":return t.data;default:return e}},U={getUsers:function(){return console.log("Retrieving users ..."),f.a.get("/api/users").then((function(e){return e.data}))},addUser:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Adding new user: ",t.name),e.next=3,f.a.post("/api/users",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action:",t),t.type){case"U_SET":return t.data;default:return e}},L=Object(v.c)({people:y,error:S,notification:T,users:C}),N=Object(v.d)(L,Object(v.a)(h.a));console.log("State:",N.getState());var H=N,P=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=H.getState().people,0===(a=n.filter((function(e){return e.name===t.name}))).length){e.next=24;break}if(a[0].number!==t.number){e.next=7;break}H.dispatch(E("".concat(t.name," is already added to phonebook."))),e.next=22;break;case 7:if(!window.confirm("Update ".concat(t.name,"'s number with ").concat(t.number,"?"))){e.next=22;break}return console.log("Updating new number"),e.prev=10,e.next=13,g.update(a[0].id,t);case 13:r=e.sent,H.dispatch(j()),H.dispatch(k("".concat(r.name,"'s number has been updated"))),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0),H.dispatch(E("Update unsuccessful: ".concat(e.t0)));case 22:e.next=36;break;case 24:return e.prev=24,e.next=27,g.create(t);case 27:c=e.sent,H.dispatch(j()),H.dispatch(k("".concat(c.name," has been added"))),e.next=36;break;case 32:e.prev=32,e.t1=e.catch(24),console.log(e.t1),H.dispatch(E("".concat(t.name," could not be added: ").concat(e.t1)));case 36:case"end":return e.stop()}}),e,null,[[10,18],[24,32]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=H.getState().people,(a=n.find((function(e){return e.id===t})))||H.dispatch(E("Does not exist")),!window.confirm("Delete ".concat(a.name,"'s record?"))){e.next=16;break}return console.log("Deleting: ",t,a.name),e.prev=6,e.next=9,g.remove(t);case 9:H.dispatch(j()),H.dispatch(k("Successfully Deleted")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),H.dispatch(E("".concat(e.t0)));case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}(),_=n(63),D=function(e){var t=e.persons,n=void 0===t?[]:t,c=Object(a.useState)(""),u=Object(s.a)(c,2),o=u[0],i=u[1],l=n;return""!==o&&(l=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}))),r.a.createElement("div",null,r.a.createElement(_.a,{striped:!0},r.a.createElement("tbody",null,l.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return A(e.id)}},"delete")))})))),r.a.createElement(d,{input:o,inputHandler:function(e){i(e.target.value)}}))},V=function(){var e=H.getState().notification;return""===e?null:r.a.createElement("div",{className:"notification"},e)},I=function(e){e.message;var t=H.getState().error;return""===t?null:r.a.createElement("div",{className:"error"},t)},J=n(64),F=function(e){var t=e.title,n=e.input,a=e.inputHandler;return r.a.createElement(J.a.Group,null,r.a.createElement(J.a.Label,null,t),r.a.createElement(J.a.Control,{type:"text",value:n,onChange:a}))},G=n(65),z=function(e){var t={display:e.visible?"none":""},n={display:e.visible?"":"none"};return r.a.createElement("div",null,r.a.createElement("div",{style:t},r.a.createElement(G.a,{onClick:e.toggleVisibility},e.buttonLabel)),r.a.createElement("div",{style:n},e.children,r.a.createElement(G.a,{onClick:e.toggleVisibility},"Cancel")))},B=function(e){var t=e.login,n=Object(a.useState)(""),c=Object(s.a)(n,2),u=c[0],o=c[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],p=l[1],f=Object(a.useState)(!1),m=Object(s.a)(f,2),b=m[0],g=m[1],v=function(){g(!b)};return r.a.createElement(z,{buttonLabel:"Login here",visible:b,toggleVisibility:v},r.a.createElement(J.a,{onSubmit:function(e){e.preventDefault(),console.log("Logging in for",u),t({username:u,password:d}),o(""),p(""),v()}},r.a.createElement(F,{title:"Username",input:u,inputHandler:function(e){o(e.target.value)}}),r.a.createElement(F,{title:"Password",input:d,inputHandler:function(e){p(e.target.value)}}),r.a.createElement(G.a,{type:"submit"},"Login")))},R=function(e){var t=e.user,n=Object(a.useState)(""),c=Object(s.a)(n,2),u=c[0],o=c[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],p=l[1],f=Object(a.useState)(!1),m=Object(s.a)(f,2),b=m[0],g=m[1];return r.a.createElement(z,{buttonLabel:"Create New Note",visible:b,toggleVisibility:function(){g(!b)}},r.a.createElement("h2",null,"Add New as ",t.name,":"),r.a.createElement(J.a,{onSubmit:function(e){e.preventDefault(),P({name:u,number:d}),o(""),p("")}},r.a.createElement(F,{title:"Name",input:u,inputHandler:function(e){o(e.target.value)}}),r.a.createElement(F,{title:"Number",input:d,inputHandler:function(e){p(e.target.value)}}),r.a.createElement(G.a,{type:"submit"},"add")))},W=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),i=o[0],l=o[1],d=Object(a.useState)(""),p=Object(s.a)(d,2),f=p[0],m=p[1],b=Object(a.useState)(!1),g=Object(s.a)(b,2),v=g[0],h=g[1],E=function(){h(!v)};return r.a.createElement("div",null,r.a.createElement(z,{buttonLabel:"Create User Account",visible:v,toggleVisibility:E},r.a.createElement("h2",null,"Create new user"),r.a.createElement(J.a,{onSubmit:function(e){e.preventDefault(),U.addUser({name:n,username:i,password:f}),c(""),l(""),m(""),E()}},r.a.createElement(F,{title:"Name",input:n,inputHandler:function(e){c(e.target.value)}}),r.a.createElement(F,{title:"Username",input:i,inputHandler:function(e){l(e.target.value)}}),r.a.createElement(F,{title:"Password",input:f,inputHandler:function(e){m(e.target.value)}}),r.a.createElement(G.a,{type:"submit"},"add"))))},q={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],u=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.login(t);case 3:n=e.sent,window.localStorage.setItem("loggedPersonUser",JSON.stringify(n)),g.setToken(n.token),c(n),H.dispatch(k("Logged in as ".concat(n.name))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),H.dispatch(E("Wrong Credentials"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log("Fetching data ... "),H.dispatch(j()),H.dispatch((function(e){U.getUsers().then((function(t){return e({type:"U_SET",data:t})})).catch((function(t){return e(w(t))}))}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedPersonUser");if(e){var t=JSON.parse(e);c(t),H.dispatch(k("Logged in as ".concat(t.name))),g.setToken(t.token)}}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(V,null),r.a.createElement(I,null),null===n?r.a.createElement("div",null,r.a.createElement(B,{login:u}),r.a.createElement(W,null),r.a.createElement("h2",null,"Please log in to view numbers")):r.a.createElement("div",null,r.a.createElement(R,{user:n}),r.a.createElement(G.a,{onClick:function(){window.localStorage.removeItem("loggedPersonUser"),g.setToken(null),c(null),H.dispatch(k("Logged Out"))}},"Log Out"),r.a.createElement("h2",null,"Numbers"),r.a.createElement(D,{persons:H.getState().people})))},M=(n(60),n(31)),Q=function(){u.a.render(r.a.createElement(M.a,{store:H},r.a.createElement(K,null)),document.getElementById("root"))};Q(),H.subscribe(Q)}},[[32,1,2]]]);
//# sourceMappingURL=main.15eefc54.chunk.js.map