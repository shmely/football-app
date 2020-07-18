(this["webpackJsonpfootball-app"]=this["webpackJsonpfootball-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=a(16),s=(a(65),a(48)),u=a(4),i=a(10),m=Object(i.a)();function p(e){return r.a.createElement("header",{className:"nav-header flex space-between align-center"},r.a.createElement("a",{href:"http://localhost:3000/football-app"},"Football App."))}var f=a(44),d=a(45),v=a(52),h=a(50),E=a(124);var b={on:function(e,t){var a=function(e){var a=e.detail;t(a)};return window.addEventListener(e,a),function(){window.removeEventListener(e,a)}},emit:function(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}},g=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={msg:null,type:"error"},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromEventBus=b.on("show-msg",(function(t){e.setState({msg:t.txt,type:t.type}),setTimeout((function(){e.setState({msg:null,type:null})}),3e3)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromEventBus()}},{key:"render",value:function(){var e=this.state,t=e.msg,a=e.type;return t?(console.log(t),r.a.createElement("div",{className:"user-message"},r.a.createElement(E.a,{variant:"filled",severity:a},t))):""}}]),a}(n.Component),y=a(5),w=a.n(y),O=a(13),x=a(46),j="https://api.sportsdata.io/v3/soccer/scores/json/",N=a.n(x).a.create({}),T=function(e,t,a){return k(e,"GET",t,a)};function k(e){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(w.a.mark((function e(t){var a,n,r,c,o=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"get",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:null,console.log("".concat(j).concat(t)),e.prev=4,e.next=7,N({url:"".concat(j).concat(t),method:a,data:n,headers:r});case 7:return c=e.sent,e.abrupt("return",c.data);case 11:throw e.prev=11,e.t0=e.catch(4),console.dir(e.t0),console.log(e.t0.response),e.t0;case 16:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}var A={saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},removeFromStorage:function(e){localStorage.removeItem(e)}};var I="5c458d8273b14258986fc51cb35ad662",L="TEAMS";function F(){return(F=Object(O.a)(w.a.mark((function e(){var t,a,n,r=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:"",a=A.loadFromStorage(L)){e.next=7;break}return e.next=5,T("Teams?key=".concat(I));case 5:n=e.sent,A.saveToStorage(L,n);case 7:if(!t){e.next=9;break}return e.abrupt("return",a.filter((function(e){return e.AreaId===t})));case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(O.a)(w.a.mark((function e(t){var a,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=A.loadFromStorage(L+t)){e.next=9;break}return n=A.loadFromStorage(L),a=n.find((function(e){return e.TeamId===+t})),e.next=6,T("playersByTeam/".concat(t,"?key=").concat(I));case 6:r=e.sent,a.players=r,A.saveToStorage(L+t,a);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=A.loadFromStorage("LOCATIONS")){e.next=6;break}return e.next=4,T("areas?key=".concat(I));case 4:a=e.sent,A.saveToStorage("LOCATIONS",a);case 6:return a=t?a.filter((function(e){return e.Name.toLowerCase().includes(t.toLowerCase())})):a,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W={getTeams:function(){return F.apply(this,arguments)},getTeamWithPlayers:function(e){return C.apply(this,arguments)},getLocations:function(e){return _.apply(this,arguments)}};var M=a(51);function J(){Object(l.c)((function(e){return e.footballApp.teams}));var e=Object(l.b)(),t=Object(n.useState)({txt:"",options:[],showOptions:!1}),a=Object(M.a)(t,2),c=a[0],o=a[1];function s(t){o({txt:t.Name,showOptions:!1});try{e((a=t.AreaId,function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"FILTER",filter:a});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}catch(n){b.emit("show-msg",{type:"error",txt:n.message})}var a}function u(){return(u=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,e.prev=1,e.next=4,i(a.value);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b.emit("show-msg",{type:"error",txt:e.t0.message});case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function i(e){return m.apply(this,arguments)}function m(){return(m=Object(O.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getLocations(t);case 2:a=e.sent,n=0!==a.length&&0!==t.length,o({txt:t,options:a,showOptions:n}),""===t&&s(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=c.showOptions,f=c.options,d=c.txt;return r.a.createElement("div",{className:"autocomplete-cont flex column align-center"},r.a.createElement("input",{type:"text",value:d,onChange:function(e){return u.apply(this,arguments)},placeholder:"teams by  location e.g spain"}),r.a.createElement("ul",{className:"autocomplete-results align-start clean-list flex column align-"},p&&f.map((function(e,t){return r.a.createElement("li",{onClick:function(){return s(e)},value:e.AreaId,key:t},e.Name)}))))}var P=a(123),B=a(29);function U(e){var t=e.team;return r.a.createElement("section",{className:"card flex column "},r.a.createElement(B.LazyLoadImage,{src:t.WikipediaLogoUrl,alt:t.Name}),r.a.createElement("h1",null,t.Name),r.a.createElement("h2",null,"Founded: ".concat(t.Founded)),r.a.createElement("p",null,"Address: ".concat(t.Address,", ").concat(t.City,", ").concat(t.AreaName)),r.a.createElement("div",{className:"actions"},r.a.createElement(P.a,{variant:"contained",color:"primary",href:"/football-app/team/".concat(t.TeamId)},"Team Details")))}var D=function(){var e=Object(l.c)((function(e){return e.footballApp.teams})),t=Object(l.c)((function(e){return e.footballApp.filter})),a=Object(l.b)();return Object(n.useEffect)((function(){var e;a((e=t,function(){var t=Object(O.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.getTeams(e);case 2:n=t.sent,a({type:"GET_TEAMS",teams:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[a,t]),r.a.createElement("main",{className:"teams-cont flex column"},r.a.createElement(J,null),r.a.createElement("div",{className:"teams-list"},e&&e.map((function(e,t){return r.a.createElement(U,{team:e,key:t})}))))},G=a(47),R=a.n(G);function z(){var e=Object(u.f)().id,t=Object(l.c)((function(e){return e.footballApp.currTeam})),a=Object(l.b)();return Object(n.useEffect)((function(){var t;a((t=e,function(){var e=Object(O.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getTeamWithPlayers(t);case 2:n=e.sent,a({type:"SET_TEAM",team:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[a,e]),t?r.a.createElement("section",{className:"team-details"},r.a.createElement("div",{className:" flex column"},r.a.createElement("header",{className:"flex align-center justify-center"},r.a.createElement(B.LazyLoadImage,{src:t.WikipediaLogoUrl,alt:t.Name,title:t.Name}),r.a.createElement("h1",null,t.Name)),r.a.createElement("div",{className:"flex space-evenly wrap"},r.a.createElement("div",null,r.a.createElement("h2",null,"Founded: ".concat(t.Founded)),r.a.createElement("div",{className:"content flex wrap"},r.a.createElement("p",null,"Website:"),r.a.createElement("a",{href:t.Website},t.Website)),r.a.createElement("div",{className:"content flex wrap"},r.a.createElement("p",null,"Address: ".concat(t.Address,", ").concat(t.City,", ").concat(t.AreaName)))),r.a.createElement("div",null,r.a.createElement("h2",null,"Players:"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Jersey"))),r.a.createElement("tbody",null,t.players.map((function(e){return r.a.createElement("tr",{key:e.PlayerId},r.a.createElement("td",null,r.a.createElement("img",{src:e.PhotoUrl,alt:e.Name})),r.a.createElement("td",null,e.CommonName),r.a.createElement("td",null,e.Jersey))})))))))):r.a.createElement("div",{className:"flex column align-center"},r.a.createElement(R.a,{secondaryColor:"#2196f3d9",type:"Circles",color:"#2196F3",className:"loader",height:60,width:60}),r.a.createElement("p",null,"Loading..."))}function X(){return r.a.createElement("div",{className:"football-cont"},r.a.createElement(p,null),r.a.createElement(s.a,{basename:"/football-app",history:m},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:D}),r.a.createElement(u.a,{path:"/team/:id",component:z}))),r.a.createElement(g,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(20),$=a(49),q=a(22),H={teams:[],currTeam:null,filterdTeams:[],filter:""};var K=Object(V.c)({footballApp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TEAMS":return Object(q.a)(Object(q.a)({},e),{},{teams:t.teams});case"SET_TEAM":return Object(q.a)(Object(q.a)({},e),{},{currTeam:t.team});case"FILTER":return Object(q.a)(Object(q.a)({},e),{},{filter:t.filter,filterTeams:e.teams.filter((function(e){return e.AreaId===t.filter}))});default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,Y=Object(V.e)(K,Q(Object(V.a)($.a)));o.a.render(r.a.createElement(l.a,{store:Y},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){e.exports=a(104)},65:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.f550ba49.chunk.js.map