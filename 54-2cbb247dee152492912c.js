webpackJsonp([54],{1626:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function s(t){return y.default.createElement(t.tag,(0,g.default)({},t.attributes,{dangerouslySetInnerHTML:{__html:t.html}}))}function o(t){return y.default.createElement(s,{tag:"section",html:t.html,attributes:{className:"zandoc-react-markdown"}})}function d(t){return y.default.createElement(s,{tag:"style",html:t.style})}function c(t,n){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(n+=t.offsetTop),c(t.parentNode,n);return n}Object.defineProperty(n,"__esModule",{value:!0});var p=a(1),l=e(p),r=a(4),i=e(r),u=a(2),h=e(u),k=a(3),m=e(k),f=a(7),g=e(f),b=a(0),y=e(b),x=a(229),v=e(x),w=a(351),N=function(){return y.default.createElement(w.Placeholder.TextBlock,{rows:8})},E=function(){return y.default.createElement(w.Placeholder.TextBlock,{rows:5,dashed:!1})},P=function(){return y.default.createElement(w.Placeholder.RichTextBlock,{rows:4})},T=function(){return y.default.createElement(w.Placeholder.RichTextBlock,{rows:7,shape:"rect",size:160,dashed:!1})},R=function(){return y.default.createElement("div",{style:{display:"flex",alignItems:"center"}},y.default.createElement(w.Placeholder.Circle,{diameter:160}),y.default.createElement(w.Placeholder.TextBlock,{rows:6,style:{margin:"0 10px"}}),y.default.createElement(w.Placeholder.Rectangle,{width:160,height:160}))},j=function(t){function n(){var t,a,e,s;(0,l.default)(this,n);for(var o=arguments.length,d=Array(o),c=0;c<o;c++)d[c]=arguments[c];return a=e=(0,h.default)(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(d))),e.state={showCode:!1},e.toggle=function(){e.setState({showCode:!e.state.showCode})},s=a,(0,h.default)(e,s)}return(0,m.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){var t=this.state.showCode,n=this.props,a=n.title,e=n.src,o=n.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},o),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,a||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(t?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),t&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(s,{tag:"code",html:e,attributes:{className:"language-jsx"}})))}}]),n}(b.Component),D=function(t){function n(){return(0,l.default)(this,n),(0,h.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,m.default)(n,t),(0,i.default)(n,[{key:"componentDidMount",value:function(){var t=location.hash;if(t){var n=document.querySelector('a[href="'+t+'"]');n&&(0,v.default)(document.documentElement,0,c(n,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(d,{style:""}),y.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#placeholder">¶</a><a href="javascript:void(0)" id="placeholder" class="anchor-point"></a>Placeholder</h2>\n<p>Placeholder is used as loading state in sections.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>You can use this component to reduce users\' anxiety when the part of page is loading.</li>\n<li>Includes building block components and some presets.</li>\n<li>Build your own placeholder using the building block components when presets does not meet your requirements.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.default.createElement(j,{title:"Text blocks",id:"Demotext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.TextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(N)),y.default.createElement(j,{title:"Solid line text rows",id:"Demotextnodashed",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.TextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(E)),y.default.createElement(j,{title:"Richtext blocks",id:"Demorichtext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.RichTextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(P)),y.default.createElement(j,{title:"Richtext blocks(Rectangle)",id:"Demorichtextrect",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.RichTextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(T)),y.default.createElement(j,{title:"Custom placeholder",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.Circle</span> <span class="token attr-name">diameter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token operator">&lt;</span>Placeholder<span class="token punctuation">.</span>TextBlock rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0 10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.Rectangle</span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(R)),y.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Presets：<code>TextBlock</code>, <code>RichTextBlock</code>。</p>\n<p>Components: <code>TextRow</code>, <code>TextRowDashed</code>, <code>Circle</code> and <code>Rectangle</code>. Use these components to build your own placeholder.</p>\n<h3 class="anchor-heading"><a href="#textblock">¶</a><a href="javascript:void(0)" id="textblock" class="anchor-point"></a>TextBlock</h3>\n<p>Text block, lines can be dashed.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>Text rows</td>\n<td><code>number</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>widths</td>\n<td>Tow width pool, each number is a percentage</td>\n<td><code>number[]</code></td>\n<td>No</td>\n<td>Omitted</td>\n<td></td>\n</tr>\n<tr>\n<td>dashed</td>\n<td>Dashed</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dashSegments</td>\n<td>Dashed line segments, each segment can be a percent or fixed width</td>\n<td><code>(number | string)[][]</code></td>\n<td>No</td>\n<td>Omitted</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom class name prefix</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#richtextblock">¶</a><a href="javascript:void(0)" id="richtextblock" class="anchor-point"></a>RichTextBlock</h3>\n<p>Supports all props in <code>TextBlock</code>, with the following extra props.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>Shape name, circle or rectangle</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'rect\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Shape size</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrow">¶</a><a href="javascript:void(0)" id="textrow" class="anchor-point"></a>TextRow</h3>\n<p>Solid text row.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom class name prefix</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrowdashed">¶</a><a href="javascript:void(0)" id="textrowdashed" class="anchor-point"></a>TextRowDashed</h3>\n<p>Dashed text row.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>segments</td>\n<td>Line segments, each segment can be a percent or fixed width</td>\n<td><code>(number | string)[]</code></td>\n<td>No</td>\n<td>Random</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom class name prefix</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#circle">¶</a><a href="javascript:void(0)" id="circle" class="anchor-point"></a>Circle</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>diameter</td>\n<td>Circle diameter</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom class name prefix</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#rectangle">¶</a><a href="javascript:void(0)" id="rectangle" class="anchor-point"></a>Rectangle</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>Rectangle width</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Rectangle height</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom class name prefix</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),n}(b.Component);n.default=D}});