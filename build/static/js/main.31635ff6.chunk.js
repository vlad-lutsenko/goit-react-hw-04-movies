(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{10:function(e,t,a){e.exports={navigation:"Header_navigation__2_3Ol",navLink:"Header_navLink__315gw",active:"Header_active__3z9UV"}},12:function(e,t,a){e.exports={title:"HomePage_title__3qU3J",list:"HomePage_list__33I59",link:"HomePage_link__1StzC"}},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return E})),a.d(t,"g",(function(){return g}));var n=a(11),c=a.n(n),r="e957ae1fc7e7aba41e512fcab1905da1",i="https://api.themoviedb.org/3/",l=function(){return c.a.get("".concat(i,"trending/all/day?api_key=").concat(r))},o=function(e){return c.a.get("".concat(i,"search/movie?query=").concat(e,"&api_key=").concat(r,"&language=en-US&page=1&include_adult=false"))},u=function(e){return c.a.get("".concat(i,"movie/").concat(e,"?api_key=").concat(r,"&language=en-US"))},m=function(e){return c.a.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(r))},s=function(e){return c.a.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))},E="https://image.tmdb.org/t/p/w500",g="http://image.tmdb.org/t/p/w185"},32:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),l=a(8),o=a(2),u={HOME:"/",MOVIES:"/movies",MOVIE_DETAILS_PAGE:"/movies/:movieId",MOVIE_DETAILS_CAST:"/cast",MOVIE_DETAILS_REVIEWS:"/reviews"},m=a(18),s=a.n(m),E=(a(31),a(10)),g=a.n(E),d=function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("ul",{className:g.a.navigation},c.a.createElement(l.c,{exact:!0,to:"/",className:g.a.navLink,activeClassName:g.a.active},c.a.createElement("li",null,"Home")),c.a.createElement(l.c,{to:"/movies",className:g.a.navLink,activeClassName:g.a.active},c.a.createElement("li",null,"Movies")))))},f=a(13),v=a(17),p=a(12),_=a.n(p),b=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),u=Object(f.a)(i,2),m=u[0],s=u[1],E=Object(o.g)();return Object(n.useEffect)((function(){Object(v.a)().then((function(e){r(e.data.results)})).catch((function(e){s(!0)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:_.a.title},"Trending today"),m&&c.a.createElement("p",null,"something gone wrong"),!!a.length&&c.a.createElement("ul",{className:_.a.list},a.map((function(e){return c.a.createElement(l.b,{key:e.id,to:{pathname:"/movies/".concat(e.id),state:{from:E}},className:_.a.link},c.a.createElement("li",null,e.title||e.name))}))))},h=Object(n.lazy)((function(){return Promise.all([a.e(7),a.e(1)]).then(a.bind(null,105))})),O=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,106))}));var k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(n.Suspense,{fallback:c.a.createElement(s.a,{type:"TailSpin",color:"#red"})},c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:u.HOME,component:b}),c.a.createElement(o.a,{path:u.MOVIES,component:h}),c.a.createElement(o.a,{component:O}))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(k,null))),document.getElementById("root"))}},[[32,5,6]]]);
//# sourceMappingURL=main.31635ff6.chunk.js.map