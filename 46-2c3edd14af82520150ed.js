webpackJsonp([46],{1616:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n){return b.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return b.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return b.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=t(7),u=s(l),i=t(1),r=s(i),d=t(4),k=s(d),m=t(2),f=s(m),g=t(3),h=s(g),v=t(0),b=s(v),y=t(229),_=s(y),w=t(350),z=function(){var n=["http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png","http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png","http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png","http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png"],a=function(a){function t(){var a,s,e,p;(0,r.default)(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return s=e=(0,f.default)(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(c))),e.handlePreview=function(a){(0,w.previewImage)({images:n,index:n.indexOf(a.target.src),parentComponent:e,scaleRatio:3})},p=s,(0,f.default)(e,p)}return(0,h.default)(t,a),(0,k.default)(t,[{key:"render",value:function(){var a=this;return b.default.createElement("div",{className:"image-preview-demo"},n.map(function(n,t){return b.default.createElement("img",{src:n,key:t,onClick:a.handlePreview,alt:"",width:"160"})}))}}]),t}(b.default.Component);return b.default.createElement(a,null)},E=function(n){function a(){var n,t,s,e;(0,r.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},e=t,(0,f.default)(s,e)}return(0,h.default)(a,n),(0,k.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,p=a.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},p),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,t||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(e,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),C=function(n){function a(){return(0,r.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,k.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,_.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(o,{style:""}),b.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#previewimage">¶</a><a href="javascript:void(0)" id="previewimage" class="anchor-point"></a>previewImage</h2>\n<p>This component is used to preview images.</p>\n<h3 class="anchor-heading"><a href="#guide">¶</a><a href="javascript:void(0)" id="guide" class="anchor-point"></a>Guide</h3>\n<ul>\n<li>It\'s used to zoom thumbnail.</li>\n<li>Next image and previous image can be selected.</li>\n<li>Images can be rotated.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.default.createElement(E,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> previewImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> imgArr <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handlePreview</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      images<span class="token punctuation">:</span> imgArr<span class="token punctuation">,</span>\n      index<span class="token punctuation">:</span> imgArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      scaleRatio<span class="token punctuation">:</span> <span class="token number">3</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image-preview-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          imgArr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>image<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlePreview<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(z)),b.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>images</td>\n<td>Urls for images</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>index</td>\n<td>Start index</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>showRotateBtn</td>\n<td>Show rotate button</td>\n<td>bool</td>\n<td>true</td>\n<td>true,false</td>\n</tr>\n<tr>\n<td>scaleRatio</td>\n<td>Custom scale Ratio</td>\n<td>number</td>\n<td>1.5</td>\n<td></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>Parent component instance，i18n needs this to pass context through</td>\n<td>ReactInstance</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Optional. Custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Optional. Custom prefix.</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(v.Component);a.default=C}});