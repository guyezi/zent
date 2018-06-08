webpackJsonp([14],{1621:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n){return b.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return b.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return b.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=t(7),u=s(l),i=t(1),d=s(i),r=t(4),k=s(r),m=t(2),h=s(m),g=t(3),f=s(g),y=t(0),b=s(y),v=t(229),T=s(v),E=t(350),z=function(){return b.default.createElement("div",null,b.default.createElement("h3",null,"Horizontal"),b.default.createElement(E.Timeline.Legend,null,"Sample"),b.default.createElement(E.Timeline,{type:"horizontal"},b.default.createElement(E.Timeline.Item,{label:"Time 1"}),b.default.createElement(E.Timeline.Item,{label:"Time 2",tip:"hello"}),b.default.createElement(E.Timeline.Item,{label:"Time 3"}),b.default.createElement(E.Timeline.Item,{size:0,label:"Custom length"})),b.default.createElement("h3",null,"Vertical"),b.default.createElement(E.Timeline.Legend,null,"Sample"),b.default.createElement(E.Timeline,{type:"vertical"},b.default.createElement(E.Timeline.Item,{label:"Time 1"}),b.default.createElement(E.Timeline.Item,{label:"Time 2",tip:"hello"}),b.default.createElement(E.Timeline.Item,{label:"Time 3"}),b.default.createElement(E.Timeline.Item,{label:"No dot, custom color",showDot:!1,lineColor:"red"}),b.default.createElement(E.Timeline.Item,{label:"No label",showLabel:!1}),b.default.createElement(E.Timeline.Item,{label:"Custom dot color",dotColor:"#5197FF"}),b.default.createElement(E.Timeline.Item,{size:0,label:"Custom length"})))},w=function(){var n=["hello","world",{label:"blue",dotColor:"#5197FF"},{label:"red",lineColor:"#E70000"},{label:"color",color:"#E70000"}];return b.default.createElement("div",null,b.default.createElement(E.Timeline,{type:"horizontal",timeline:n}))},C=function(){var n=[{label:"online",color:"#00b90e",percent:.3},{label:"unknown",percent:.2,showDot:!1,showLabel:!1},{label:"offline",color:"#E70000",percent:.5}],a=function(a){function t(){var n,a,s,e;(0,d.default)(this,t);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return a=s=(0,h.default)(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(o))),s.state={size:500},s.onChange=function(n){s.setState({size:n.target.value})},e=a,(0,h.default)(s,e)}return(0,f.default)(t,a),(0,k.default)(t,[{key:"render",value:function(){var a=this.state.size;return b.default.createElement("div",null,b.default.createElement(E.NumberInput,{value:a,onChange:this.onChange,showStepper:!0}),b.default.createElement(E.Timeline,{size:a,timeline:n}))}}]),t}(b.default.Component);return b.default.createElement(a,null)},_=function(n){function a(){var n,t,s,e;(0,d.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return t=s=(0,h.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},e=t,(0,h.default)(s,e)}return(0,f.default)(a,n),(0,k.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,p=a.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},p),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,t||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(e,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),I=function(n){function a(){return(0,d.default)(this,a),(0,h.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,f.default)(a,n),(0,k.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,T.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(o,{style:""}),b.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h2>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.default.createElement(_,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Horizontal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Legend</span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Legend</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom length<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Vertical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Legend</span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Legend</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>No dot, custom color<span class="token punctuation">"</span></span> <span class="token attr-name">showDot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>No label<span class="token punctuation">"</span></span> <span class="token attr-name">showLabel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom dot color<span class="token punctuation">"</span></span> <span class="token attr-name">dotColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#5197FF<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom length<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(z)),b.default.createElement(_,{title:"Use Array",id:"Demoarray",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'hello\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'world\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n    dotColor<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n    lineColor<span class="token punctuation">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'color\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(w)),b.default.createElement(_,{title:"Dynamic Size",id:"Demodynamic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline<span class="token punctuation">,</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'online\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#00b90e\'</span><span class="token punctuation">,</span>\n    percent<span class="token punctuation">:</span> <span class="token number">0.3</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'unknown\'</span><span class="token punctuation">,</span>\n    percent<span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>\n    showDot<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    showLabel<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'offline\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n    percent<span class="token punctuation">:</span> <span class="token number">0.5</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    size<span class="token punctuation">:</span> <span class="token number">500</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      size<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(C)),b.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<h3 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>horizontal or vertical</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>size</td>\n<td>size</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>timeline</td>\n<td>pass an array as data</td>\n<td>Array</td>\n<td></td>\n<td>yes</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom className</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom className prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-item">¶</a><a href="javascript:void(0)" id="timeline-item" class="anchor-point"></a>Timeline Item</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>label</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>tip</td>\n<td>hover pop content</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>color</td>\n<td>color, higher priority than \n<code>lineColor</code>\n and \n<code>dotColor</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>lineColor</td>\n<td>line color</td>\n<td>string</td>\n<td><code>#999</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>dotColor</td>\n<td>dot color</td>\n<td>string</td>\n<td><code>#00B90E</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>type</td>\n<td>horizontal or vertical</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>showLabel</td>\n<td>should display the label</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>showDot</td>\n<td>should display the dot</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>size</td>\n<td>size</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom className</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom className prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-array">¶</a><a href="javascript:void(0)" id="timeline-array" class="anchor-point"></a>Timeline Array</h3>\n<p>Support all properties of <code>Timeline Item</code>.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Extra Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>default \n<code>key</code>\n, or the array index will be used as \n<code>key</code></td>\n<td>string</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>percent</td>\n<td>percent of total size when using dynamic size (0 &#x3C;= percent &#x3C;= 1)</td>\n<td>number</td>\n<td>yes</td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(y.Component);a.default=I}});