(this.webpackJsonppong=this.webpackJsonppong||[]).push([[0],{17:function(t,n,e){t.exports=e(24)},24:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),i=e(10),a=e.n(i),c=e(1),s=e(14),X=e(3),l=e(4),u=e(16),h=e(15),p=e(7),v=e(2),d=function(){function t(n,e,r){Object(X.a)(this,t),this.board=n,this.position=e,this.vector=r}return Object(l.a)(t,[{key:"borderCheck",value:function(){var t=this.position.x,n=this.position.y,e=this.position.x+this.vector.x,r=this.position.y+this.vector.y;"X"===this.board[n][e]&&(this.vector.x=-this.vector.x),"X"===this.board[r][t]&&(this.vector.y=-this.vector.y),"0"===this.board[n][e]&&"0"===this.board[r][t]&&"X"===this.board[r][e]&&(this.vector.x=-this.vector.x,this.vector.y=-this.vector.y)}},{key:"rotator",value:function(){var t=Math.random()>.5?1:-1,n=Math.random()>.5?1:-1;"Y"===this.board[this.position.y][this.position.x]&&(this.board[this.position.y][this.position.x]="0",this.vector.x=t,this.vector.y=n)}},{key:"move",value:function(){this.rotator(),this.borderCheck(),"1"===this.board[this.position.y][this.position.x]&&(this.board[this.position.y][this.position.x]="0"),this.position.x+=this.vector.x,this.position.y+=this.vector.y,"0"===this.board[this.position.y][this.position.x]&&(this.board[this.position.y][this.position.x]="1")}}]),t}(),f=[["X","X","X","X","X","X","X","X","X","X","X","X"],["X","1","0","X","X","X","X","X","X","X","X","X"],["X","0","0","0","X","X","X","X","X","X","X","X"],["X","0","0","0","0","X","X","X","X","X","X","X"],["X","0","0","0","0","0","X","X","X","X","X","X"],["X","0","0","0","0","0","0","X","X","X","X","X"],["X","0","0","0","0","0","0","0","X","X","X","X"],["X","0","0","0","0","0","0","0","0","0","0","X"],["X","0","0","0","0","0","0","0","0","0","0","X"],["X","0","0","0","X","0","0","0","0","Y","0","X"],["X","0","0","X","X","X","0","0","0","0","0","X"],["X","0","0","0","X","0","0","0","0","0","0","X"],["X","0","0","0","0","0","0","0","0","0","0","X"],["X","0","0","Y","0","0","0","0","0","0","0","X"],["X","0","0","0","0","0","0","0","0","0","0","X"],["X","X","X","X","X","X","X","X","X","X","X","X"]],b={x:1,y:1};function x(){var t=Object(c.a)(["\n  background-color: #fff;\n  color: #000;\n  padding: 5px 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  margin-top: 10px;\n  border: none;\n  cursor: pointer;\n  flex: 1;\n"]);return x=function(){return t},t}var y=v.a.button(x());function m(){var t=Object(c.a)(["\n  background-color: #fff;\n  width: 50px;\n  height: 50px;\n"]);return m=function(){return t},t}var g=v.a.div(m());function j(){var t=Object(c.a)(["\n  width: 50px;\n  height: 50px;\n"]);return j=function(){return t},t}var O=v.a.div(j());function k(){var t=Object(c.a)(["\n  background-color: #fff;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n"]);return k=function(){return t},t}var w=v.a.div(k());function E(){var t=Object(c.a)(['\n  border: 25px solid transparent;\n  border-bottom-color: red;\n  position: relative;\n  top: -25px;\n\n  &:after {\n    content: "";\n    position: absolute;\n    left: -25px;\n    top: 25px;\n    border: 25px solid transparent;\n    border-top-color: red;\n  }\n']);return E=function(){return t},t}var C=v.a.div(E());function S(){var t=Object(c.a)(["\n  display: flex;\n  width: ","px;\n  height: ","px;\n  flex-wrap: wrap;\n"]);return S=function(){return t},t}var Y=v.a.div(S(),50*f[0].length,50*f.length),A=function(t){var n=t.ball;return o.a.createElement(Y,null,n.map((function(t){return t.map((function(t){return"X"===t&&o.a.createElement(g,null)||"0"===t&&o.a.createElement(O,null)||"1"===t&&o.a.createElement(w,null)||"Y"===t&&o.a.createElement(C,null)}))})))};function I(){var t=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return I=function(){return t},t}var J=v.a.div(I()),M=Object(p.a)({},b),T=Object(p.a)({},b),z=new d(f,T,{x:1,y:1}),B=function(t){Object(u.a)(e,t);var n=Object(h.a)(e);function e(){var t;Object(X.a)(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))).state={board:z.board,play:!1},t.handleClick=function(){t.setState({play:!t.state.play});if(t.state.play)var n=setInterval((function(){z.move(),t.setState({board:Object(s.a)(z.board)}),z.position.x===M.x&&z.position.y===M.y&&(z.vector.x=1,z.vector.y=1,clearInterval(n),t.setState({play:!1}))}),100)},t}return Object(l.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(J,null,o.a.createElement(A,{ball:f}),o.a.createElement(y,{onClick:function(){return t.handleClick()}},"START"))}}]),e}(o.a.Component);function H(){var t=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return H=function(){return t},t}var R=v.a.div(H());var q=function(){return o.a.createElement(R,null,o.a.createElement(B,null))};a.a.render(o.a.createElement(q,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.341d2389.chunk.js.map