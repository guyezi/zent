webpackJsonp([115],{1512:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return v.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return v.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return v.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),i=s(1),k=t(i),r=s(4),d=t(r),f=s(2),m=t(f),g=s(3),h=t(g),y=s(0),v=t(y),E=s(229),x=t(E),b=s(350),_=function(){var n=b.Layout.Row,a=b.Layout.Col;return v.default.createElement(n,{style:{margin:"10px 0"}},v.default.createElement(a,{span:8},v.default.createElement(b.Button,{type:"primary",size:"large"},"首页")),v.default.createElement(a,{span:8,offset:8},v.default.createElement(b.Affix,{offsetTop:135},v.default.createElement(b.Button,{type:"primary",size:"large"},"固钉"))))},w=function(){var n=function(n){function a(){var n,s,t,p;(0,k.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,m.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={text:"固钉"},t.onPin=function(){t.setState({text:"已经固定啦"})},t.onUnpin=function(){t.setState({text:"取消固定啦"})},p=s,(0,m.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return v.default.createElement(b.Affix,{offsetTop:200,onPin:this.onPin,onUnpin:this.onUnpin},v.default.createElement(b.Alert,{type:"warning"},this.state.text))}}]),a}(v.default.Component);return v.default.createElement(n,null)},A=function(){return v.default.createElement("div",{className:"demo-bottom"},v.default.createElement(b.Affix,{offsetBottom:60},v.default.createElement(b.Alert,{type:"warning"},v.default.createElement("p",null,"设置距离底部值"))))},z=function(n){function a(){var n,s,t,p;(0,k.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,m.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,m.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},e),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,s||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),C=function(n){function a(){return(0,k.default)(this,a),(0,m.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,x.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(o,{style:".demo-nav {\n    width: 100%;\n    height: 60px;\n    background-color: #ededed;\n    line-height: 60px;\n    text-align: center;\n    border: 1px solid #2B90ED;\n}\n\n.demo-bottom {\n\topacity: 0.8;\n}"}),v.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#affix-gu-ding">¶</a><a href="javascript:void(0)" id="affix-gu-ding" class="anchor-point"></a>Affix 固钉</h2>\n<p>将元素固定在特定区域，一般用于导航栏固钉。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),v.default.createElement(z,{title:"通过 offsetTop 设置到顶部距离",id:"Demooffsettop",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Row style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'10px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">135</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>固钉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},v.default.createElement(_)),v.default.createElement(z,{title:"设置回调函数",id:"Democallback",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'固钉\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onPin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'已经固定啦\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">onUnpin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'取消固定啦\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPin</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPin<span class="token punctuation">}</span></span> <span class="token attr-name">onUnpin</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onUnpin<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(w)),v.default.createElement(z,{title:"设置距离底部值：`offsetBottom`",id:"Demooffsetbottom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>设置距离底部值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(A)),v.default.createElement(e,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>offsetTop</td>\n<td>距离窗口顶部指定偏移量后触发</td>\n<td>number</td>\n<td>0</td>\n<td>\'\'</td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>距离窗口底部指定偏移量后触发</td>\n<td>number</td>\n<td>null</td>\n<td>null</td>\n</tr>\n<tr>\n<td>onPin</td>\n<td>触发固定后执行的回调函数</td>\n<td>function</td>\n<td>null</td>\n<td>null</td>\n</tr>\n<tr>\n<td>onUnpin</td>\n<td>固定消失后执行的回调函数</td>\n<td>function</td>\n<td>null</td>\n<td>null</td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>固钉的z-index</td>\n<td>number</td>\n<td>10</td>\n<td>null</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>placeHoldClassName</td>\n<td>占位容器的类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>如果 <code>offsetTop</code> 和 <code>offsetBottom</code> 同时设置，优先使用 <code>offsetBottom</code></p>'}))}}]),a}(y.Component);a.default=C}});