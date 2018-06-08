webpackJsonp([118],{1571:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return y.default.createElement(e.tag,(0,v.default)({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function c(e){return y.default.createElement(n,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function r(e){return y.default.createElement(n,{tag:"style",html:e.style})}function d(e,t){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(t+=e.offsetTop),d(e.parentNode,t);return t}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),u=o(l),i=a(4),s=o(i),f=a(2),h=o(f),m=a(3),p=o(m),g=a(7),v=o(g),_=a(0),y=o(_),b=a(229),E=o(b),z=(function(e){function t(){var e,a,o,n;(0,u.default)(this,t);for(var c=arguments.length,r=Array(c),d=0;d<c;d++)r[d]=arguments[d];return a=o=(0,h.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.state={showCode:!1},o.toggle=function(){o.setState({showCode:!o.state.showCode})},n=a,(0,h.default)(o,n)}(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props,a=t.title,o=t.src,c=t.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},c),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,a||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(e?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),e&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(n,{tag:"code",html:o,attributes:{className:"language-jsx"}})))}}])}(_.Component),function(e){function t(){return(0,u.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var t=document.querySelector('a[href="'+e+'"]');t&&(0,E.default)(document.documentElement,0,d(t,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(r,{style:""}),y.default.createElement(c,{html:'<h2 class="anchor-heading"><a href="#upgrade-to-zent-2-1-0">¶</a><a href="javascript:void(0)" id="upgrade-to-zent-2-1-0" class="anchor-point"></a>Upgrade to Zent 2.1.0</h2>\n<p>We upgraded React to 15.5.x in this version.</p>\n<h3 class="anchor-heading"><a href="#react-15-5-x">¶</a><a href="javascript:void(0)" id="react-15-5-x" class="anchor-point"></a>React 15.5.x</h3>\n<p>All development of Zent will be based on React 15.5.x starting from 2.1.0.</p>\n<p>There may be warnings if you use Zent with old version of React.</p>\n<p>You can read the <a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">offical React upgrade guide</a>.</p>\n<p>We recommend Facebook\'s <a href="https://github.com/reactjs/react-codemod">codemod</a> to automate the upgrade.</p>\n<h3 class="anchor-heading"><a href="#button">¶</a><a href="javascript:void(0)" id="button" class="anchor-point"></a>Button</h3>\n<p><code>Button</code>\'s default <code>htmlType</code> has changed. <code>htmlType</code> defaults to <code>"button"</code> starting from 2.1.0.</p>\n<p><code>Button</code> has an <code>htmlType</code> prop，this prop has no default value before 2.1.0, just like the native <code>button</code>\'s <code>type</code> attribute. So if you put a <code>Button</code> into a <code>form</code>, it will trigger form submition when clicked before 2.1.0.</p>\n<p>You may need to add <code>htmlType="submit"</code> in your forms if you relied on old behavior.</p>'}))}}]),t}(_.Component));t.default=z}});