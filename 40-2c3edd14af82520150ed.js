webpackJsonp([40],{1602:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n){return y.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return y.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return y.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=t(7),u=s(l),r=t(1),i=s(r),k=t(4),d=s(k),f=t(2),h=s(f),m=t(3),g=s(m),v=t(0),y=s(v),w=t(229),C=s(w),_=t(350),b=function(){var n=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={value:2},s.onChange=function(n){s.setState({value:n})},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return y.default.createElement(_.Rate,{value:this.state.value,onChange:this.onChange})}}]),a}(v.Component);return y.default.createElement(n,null)},E=function(){var n=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={value:2.5},s.onChange=function(n){s.setState({value:n})},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return y.default.createElement(_.Rate,{allowHalf:!0,value:this.state.value,onChange:this.onChange})}}]),a}(v.Component);return y.default.createElement(n,null)},N=function(){var n=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={value:2.5},s.onChange=function(n){s.setState({value:n})},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return y.default.createElement(_.Rate,{disabled:!0,allowHalf:!0,value:this.state.value,onChange:this.onChange})}}]),a}(v.Component);return y.default.createElement(n,null)},R=function(){var n=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={value:2.5},s.onChange=function(n){s.setState({value:n})},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return y.default.createElement("ul",null,y.default.createElement("li",null,y.default.createElement(_.Rate,{character:y.default.createElement(_.Icon,{type:"youzan"}),allowHalf:!0,value:this.state.value,onChange:this.onChange})),y.default.createElement("li",null,y.default.createElement(_.Rate,{character:"赞",allowHalf:!0,value:this.state.value,onChange:this.onChange})))}}]),a}(v.Component);return y.default.createElement(n,null)},j=function(n){function a(){var n,t,s,e;(0,i.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},e=t,(0,h.default)(s,e)}return(0,g.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,p=a.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},p),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,t||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(e,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),z=function(n){function a(){return(0,i.default)(this,a),(0,h.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,g.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,C.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(o,{style:""}),y.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#rate">¶</a><a href="javascript:void(0)" id="rate" class="anchor-point"></a>Rate</h2>\n<p>Rate component.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.default.createElement(j,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">2</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(b)),y.default.createElement(j,{title:"allow half",id:"Demoallowhalf",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">2.5</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(E)),y.default.createElement(j,{title:"disabled",id:"Demodisabled",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">2.5</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">disabled</span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(N)),y.default.createElement(j,{title:"custom character",id:"Democharacter",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">2.5</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>youzan<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> allowHalf value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>赞<span class="token punctuation">"</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(R)),y.default.createElement(p,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>allback when select value</td>\n<td><code>Function(value: number)</code></td>\n<td>Yes</td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>current value</td>\n<td><code>number</code></td>\n<td>No</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>allowClear</td>\n<td>whether to allow clear when click again</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>allowHalf</td>\n<td>whether to allow semi selection</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>character</td>\n<td>custom character of rate</td>\n<td><code>ReactNode</code></td>\n<td>No</td>\n<td><code>&#x3C;Icon type="star" /></code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom class name of rate</td>\n<td><code>string</code></td>\n<td>No</td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>count</td>\n<td>star count</td>\n<td><code>number</code></td>\n<td>No</td>\n<td>5</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>read only, unable to interact</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style object of rate</td>\n<td><code>object</code></td>\n<td>No</td>\n<td>-</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(v.Component);a.default=z}});