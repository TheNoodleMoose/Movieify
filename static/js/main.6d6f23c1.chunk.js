(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(45)},33:function(e,t,n){},35:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(33),n(5)),u=n(6),s=n(47),l=n(46),p=n(49),m=n(48),d=(n(35),n(7)),h=n.n(d),v=n(9),b=n(10),f=n(11),g=n(16),w=n(12),x=n(17),E=n(13),k=n.n(E);function j(){var e=Object(i.a)(["\n  box-shadow: 0 0 35px black;\n"]);return j=function(){return e},e}var y=function(e){var t=e.movie;return r.a.createElement(l.a,{to:"/id/".concat(t.id)},r.a.createElement(k.a,{id:t.id},r.a.createElement(O,{src:"".concat("http://image.tmdb.org/t/p/w154").concat(t.poster_path),alt:t.title})))},O=u.a.img(j());function S(){var e=Object(i.a)(["\n  border: none;\n  color: white;\n  height: 20px;\n  border-radius: 10px;\n  background: #551a8b;\n"]);return S=function(){return e},e}function _(){var e=Object(i.a)(["\n  border: none;\n  height: 20px;\n  border-radius: 10px;\n  margin: 5px;\n"]);return _=function(){return e},e}function A(){var e=Object(i.a)(["\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: repeat(4, 1fr);\n  grid-row-gap: 1rem;\n  @media (max-width: 700px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return A=function(){return e},e}var C=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],movieSearch:""},n.updateInput=function(e){n.setState({movieSearch:e.target.value})},n.Search=Object(v.a)(h.a.mark(function e(){var t,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.movieSearch,e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=2a208bd9217b421273ab1506025ce6e6&query=".concat(t));case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,n.setState({movies:r.results,movieSearch:""}),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}},e,this,[[1,11]])})),n}return Object(x.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?api_key=2a208bd9217b421273ab1506025ce6e6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({movies:n.results}),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.movieSearch;return r.a.createElement("div",null,r.a.createElement(D,{type:"text",onChange:this.updateInput,value:n}),r.a.createElement(M,{type:"submit",onClick:this.Search},"Search"),r.a.createElement(I,null,t.map(function(e){return r.a.createElement(y,{key:e.id,movie:e})})))}}]),t}(a.Component),I=u.a.div(A()),D=u.a.input(_()),M=u.a.button(S());function B(){var e=Object(i.a)(["\n  background: white;\n  text-align: left;\n  padding: 2rem 10%;\n  display: flex;\n  > div {\n    margin-left: 20px;\n  }\n  img {\n    position: relative;\n    top: -5rem;\n  }\n"]);return B=function(){return e},e}function J(){var e=Object(i.a)(["\n    position: relative;\n    padding-top: 50vh;\n    background: url(",") no-repeat\n    background-size: cover \n"]);return J=function(){return e},e}var N=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},n}return Object(x.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark(function e(){var t,n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=2a208bd9217b421273ab1506025ce6e6&language=en-US"));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,this.setState({movie:a}),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie;return r.a.createElement(U,{backdrop:"".concat("http://image.tmdb.org/t/p/w1280").concat(e.backdrop_path)},r.a.createElement(W,null,r.a.createElement(k.a,{id:e.id},r.a.createElement(O,{src:"".concat("http://image.tmdb.org/t/p/w154").concat(e.poster_path),alt:e.title})),r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.overview),r.a.createElement("h3",null,"ReleaseDate: ".concat(e.release_date)))))}}]),t}(a.Component),U=u.a.div(J(),function(e){return e.backdrop}),W=u.a.div(B());function q(){var e=Object(i.a)(["\n  text-decoration: none;\n  color: white;\n"]);return q=function(){return e},e}var z=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(l.a,{to:"/"},r.a.createElement(F,null,"MOVIEFY"))),r.a.createElement(p.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:C}),r.a.createElement(m.a,{path:"/id/:id",component:N}),r.a.createElement(m.a,{path:"/*",component:C}))))},F=u.a.h1(q());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.6d6f23c1.chunk.js.map