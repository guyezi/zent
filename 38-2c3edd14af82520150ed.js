webpackJsonp([38],{1603:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n){return y.default.createElement(n.tag,(0,l.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return y.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function p(n){return y.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var u=t(7),l=s(u),r=t(1),i=s(r),k=t(4),d=s(k),f=t(2),h=s(f),m=t(3),g=s(m),v=t(0),y=s(v),_=t(229),E=s(_),w=t(350),C=function(){var n=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var o=arguments.length,p=Array(o),c=0;c<o;c++)p[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),s.state={value:""},s.onChange=function(n){s.setState({value:n.target.value})},s.onPressEnter=function(){var n=s.state.value;n?w.Notify.success("Your enter content: "+n):w.Notify.error("Please input search content")},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.value;return y.default.createElement(w.SearchInput,{value:n,onChange:this.onChange,placeholder:"Search",onPressEnter:this.onPressEnter})}}]),a}(v.Component);return y.default.createElement(n,null)},N=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var o=arguments.length,p=Array(o),c=0;c<o;c++)p[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,o=a.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},o),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,t||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(e,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),S=function(n){function a(){return(0,i.default)(this,a),(0,h.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,g.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,E.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(p,{style:""}),y.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#searchinput">¶</a><a href="javascript:void(0)" id="searchinput" class="anchor-point"></a>SearchInput</h2>\n<p>SearchInput is a special Input with search box.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.default.createElement(N,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchInput<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SearchInputExample</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> evt <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> evt<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onPressEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Your enter content: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'Please input search content\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchInput</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onPressEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPressEnter<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchInputExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(C)),y.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>The API of SearchInput is consistent with Input, <code>type</code> not included.</p>\n<p>Use <code>evt.fromClearButton</code> to tell if <code>onChange</code> is triggered by clicking clear button.</p>'}))}}]),a}(v.Component);a.default=S}});