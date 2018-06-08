webpackJsonp([16],{1620:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n){return T.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return T.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return T.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),i=s(1),k=t(i),r=s(4),d=t(r),g=s(2),f=t(g),m=s(3),h=t(m),b=s(0),T=t(b),v=s(229),y=t(v),E=s(350),C=function(){return T.default.createElement("div",null,T.default.createElement(E.Tag,null,"tag content"),T.default.createElement(E.Tag,null,T.default.createElement("a",{href:"#"},"link")))},w=function(){return T.default.createElement("div",null,T.default.createElement(E.Tag,{color:"red"},"red"),T.default.createElement(E.Tag,{color:"green"},"green"),T.default.createElement(E.Tag,{color:"yellow"},"yellow"),T.default.createElement(E.Tag,{color:"blue"},"blue"),T.default.createElement(E.Tag,{color:"darkgreen"},"darkgreen"),T.default.createElement(E.Tag,{color:"red",outline:!0},"red"),T.default.createElement(E.Tag,{color:"green",outline:!0},"green"),T.default.createElement(E.Tag,{color:"yellow",outline:!0},"yellow"),T.default.createElement(E.Tag,{color:"blue",outline:!0},"blue"),T.default.createElement(E.Tag,{color:"darkgreen",outline:!0},"darkgreen"))},_=function(){return T.default.createElement("div",null,T.default.createElement(E.Tag,{color:"#9370db"},"#9370db"),T.default.createElement(E.Tag,{color:"#9370db",outline:!0},"#9370db"),T.default.createElement(E.Tag,{borderColor:"#87d068",bgColor:"#cfefdf",fontColor:"#00a854"},"custom color"),T.default.createElement(E.Tag,{color:"#778899",rounded:!1},"rectangle"),T.default.createElement(E.Tag,{color:"#48d1cc",style:{fontSize:20}},"custom size"))},z=function(){var n=function(n){E.Notify.success("Close tag")},a=function(n){E.Notify.success("Close tag2")};return T.default.createElement("div",null,T.default.createElement(E.Tag,{closable:!0,onClose:n,outline:!0},"custom color"),T.default.createElement(E.Tag,{closable:!0,onClose:a},"rectangle"),T.default.createElement(E.Tag,{closable:!0},"custom size"))},N=function(){var n=function(n){function a(){var n,s,t,e;(0,k.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={visible:!0},t.onVisibleChange=function(n){t.setState({visible:n})},e=s,(0,f.default)(t,e)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"onClose",value:function(){E.Notify.success("Tag closed")}},{key:"render",value:function(){return T.default.createElement("div",null,T.default.createElement(E.Tag,{closable:!0,visible:this.state.visible,onVisibleChange:this.onVisibleChange,onClose:this.onClose},"tag content"))}}]),a}(T.default.Component);return T.default.createElement(n,null)},D=function(n){function a(){var n,s,t,e;(0,k.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},e=s,(0,f.default)(t,e)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return T.default.createElement("div",{className:"zandoc-react-demo"},T.default.createElement("div",{className:"zandoc-react-demo__preview"},p),T.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},T.default.createElement("div",{className:"zandoc-react-demo__title"},T.default.createElement("p",null,s||"")),T.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&T.default.createElement("pre",{className:"zandoc-react-demo__code"},T.default.createElement(e,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),j=function(n){function a(){return(0,k.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,y.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return T.default.createElement("div",{className:"zandoc-react-container",key:null},T.default.createElement(o,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),T.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#tag">¶</a><a href="javascript:void(0)" id="tag" class="anchor-point"></a>Tag</h2>\n<p>Tag is suitable for marking and sorting。</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Tag is usually used as special marks or sorting marks.</li>\n<li>You can add multiple tags for one item.</li>\n<li>The text in tag should not more than four words.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),T.default.createElement(D,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span>tag content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.default.createElement(C)),T.default.createElement(D,{title:"Two styles and five default colors",id:"Demostyle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>darkgreen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>darkgreen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>darkgreen<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>darkgreen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.default.createElement(w)),T.default.createElement(D,{title:"Support custom color, rectangle style and custom size",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#9370db<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>#9370db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#9370db<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>#9370db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">borderColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#87d068<span class="token punctuation">"</span></span> <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#cfefdf<span class="token punctuation">"</span></span> <span class="token attr-name">fontColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#00a854<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>custom color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#778899<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>rectangle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag color<span class="token operator">=</span><span class="token string">"#48d1cc"</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>custom size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.default.createElement(_)),T.default.createElement(D,{title:"Support the callback function that is trigger",id:"Demoonclose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"Close tag"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"Close tag2"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>custom color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>rectangle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>custom size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.default.createElement(z)),T.default.createElement(D,{title:"Controlled",id:"Democontrolled",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onVisibleChange</span> <span class="token operator">=</span> visible <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      visible\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Tag closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span>\n          <span class="token attr-name">closable</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onVisibleChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClose<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          tag content\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.default.createElement(N)),T.default.createElement(p,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>The color of tag</td>\n<td>string</td>\n<td><code>'red'</code></td>\n<td><code>'red'</code>\n \n|\n \n<code>'green'</code>\n \n|\n \n<code>'yellow'</code>\n \n|\n \n<code>'blue'</code>\n \n|\n \n<code>'darkgreen'</code></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>The style with colorful border and transparent backgound.</td>\n<td>bool</td>\n<td><code>'false'</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>Whether the tag is rounded or not</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>Whether the tag can be closed</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>The callback function that is trigged when the tag is closed</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>Controlled visibility</td>\n<td>bool</td>\n<td></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>onVisibleChange</td>\n<td>Visibility change callback</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>borderColor</td>\n<td>The color of tag's border</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bgColor</td>\n<td>The color of tag's background</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>fontColor</td>\n<td>The color of tag's content</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>All props are optional, visibility can be controlled by using <code>visible</code> and <code>onVisibleChange</code> together.</p>\n</blockquote>"}))}}]),a}(b.Component);a.default=j}});