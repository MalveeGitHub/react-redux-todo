(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(61)},35:function(t,e,n){},37:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(24),c=n.n(r),i=(n(35),n(6)),l=n(7),u=n(9),s=n(8),d=n(10),p=(n(37),n(11)),m=n(5),f=n(29),b=n(13),h={books:[]},O=Object(m.c)({books:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TODO":return Object(b.a)({},t,{books:e.payload});case"ADD_TODO":return Object(b.a)({},t,{books:[e.payload].concat(Object(f.a)(t.books))});case"DELETE_TODO":return Object(b.a)({},t,{books:t.books.filter(function(t){return t.id!==e.payload})});case"UPDATE_TODO":return Object(b.a)({},t,{books:t.books.map(function(t){return t.id===e.id?t===e.payload:t})});default:return t}}}),E=n(28),j=Object(m.e)(O,{},Object(m.d)(Object(m.a)(E.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),y=n(12),v=n.n(y),T=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={edit:!1,id:"",newInput:""},n.updateEdit=function(t){n.setState({edit:!n.state.edit,id:t})},n.updateTodo=function(t,e){e.preventDefault();var a=n.state.newInput;n.props.updateTodo(t,a),n.setState({edit:!1})},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.getTodo()}},{key:"deleteItem",value:function(t){this.props.deleteTodo(t)}},{key:"render",value:function(){var t=this,e=this.props.books,n="";return""!==this.state.id&&e.map(function(e){e.id===t.state.id&&(n=o.a.createElement("li",{className:"list-group-item"},o.a.createElement("form",{onSubmit:t.updateTodo.bind(t,e.id)},o.a.createElement("input",{onChange:function(e){return t.setState({newInput:e.target.value})},className:"form-control",defaultValue:e.title}))))}),o.a.createElement("div",{className:"container text-center text-light"},o.a.createElement("h1",{className:""},"Todo List (Made by M.Alvee)"),o.a.createElement("ul",{class:"list-group text-dark my-2"},0==this.state.edit?e.map(function(e){return o.a.createElement("li",{className:"list-group-item"}," ",e.title," ",o.a.createElement("a",{onClick:t.updateEdit.bind(t,e.id),href:"#!",className:"float-right ml-3"},o.a.createElement("i",{class:"fas fa-marker"})),o.a.createElement("a",{href:"#!",className:"float-right",onClick:t.deleteItem.bind(t,e.id)},o.a.createElement("i",{class:"far fa-trash-alt"}))," ")}):n))}}]),e}(a.Component),k=Object(p.b)(function(t){return{books:t.books.books}},{getTodo:function(){return function(t){v.a.get("https://jsonplaceholder.typicode.com/todos").then(function(e){return t({type:"GET_TODO",payload:e.data})})}},deleteTodo:function(t){return function(e){v.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)),e({type:"DELETE_TODO",payload:t})}},updateTodo:function(t,e){return function(n){v.a.put("https://jsonplaceholder.typicode.com/todos/".concat(t),e).then(function(e){return n({type:"UPDATE_TODO",payload:e.data,id:t})})}}})(T),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={todo:""},n.handleSubmit=function(t){t.preventDefault();var e=n.state.todo;n.props.addTodo(e)},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{onChange:function(e){return t.setState({todo:e.target.value})},type:"text",className:"form-control form-control-lg",placeholder:"Enter todo and press Enter"}))}}]),e}(a.Component),D=Object(p.b)(null,{addTodo:function(t){return function(e){v.a.post("https://jsonplaceholder.typicode.com/todos",{title:t}).then(function(t){return e({type:"ADD_TODO",payload:t.data})})}}})(g),w=n(63),_=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,null),o.a.createElement(k,null))}}]),e}(a.Component),N=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(p.a,{store:j},o.a.createElement(w.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(_,null))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.bc68ad42.chunk.js.map