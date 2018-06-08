webpackJsonp([114],{1609:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n){return b.default.createElement(n.tag,(0,h.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return b.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return b.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(1),u=t(l),r=s(4),i=t(r),k=s(2),d=t(k),m=s(3),g=t(m),f=s(7),h=t(f),y=s(0),b=t(y),A=s(229),E=t(A),v=s(350),w=function(){return b.default.createElement(v.Alert,null,"Alert Content")},z=function(){return b.default.createElement(v.Alert,null,b.default.createElement(v.Icon,{type:"error-circle"}),b.default.createElement("span",null,"Warning! SMS notifications in the process of trading, will be pushed by news push function of marketing center."),b.default.createElement("a",{href:"",onClick:function(n){return n.preventDefault()}},"Buy Now"))},N=function(){return b.default.createElement("div",{className:"zent-alert-example"},b.default.createElement(v.Alert,{type:"info"},"Default info style"),b.default.createElement(v.Alert,{type:"warning"},"Warning style"),b.default.createElement(v.Alert,{type:"danger"},"Danger style"))},_=function(){return b.default.createElement("div",{className:"zent-alert-example"},b.default.createElement(v.Alert,null,"This is normal size."),b.default.createElement(v.Alert,{size:"large"},b.default.createElement("p",{className:"text"},"This is large size."),b.default.createElement("p",null,"Messages during the transacation will be pushed through the Marketing Center."),b.default.createElement("br",null),b.default.createElement("p",null,"Tel: 0571-88888888")))},D=function(){return b.default.createElement(v.Alert,{type:"warning",rounded:!0},"This Alert has rounded border.")},C=function(){return b.default.createElement(v.Alert,{size:"large",closable:!0},b.default.createElement("div",{className:"content"},b.default.createElement("p",{className:"text"},"Messages during the transacation will be pushed through the Marketing Center."),b.default.createElement("p",null,"Tel: 0571-88888888")),b.default.createElement("br",null),b.default.createElement(v.Button,null,"Learn more"))},x=function(){return b.default.createElement(v.Alert,{type:"info",closable:!0,onClose:function(){return v.Sweetalert.alert({content:"Aler closed"})}},"This Alert has a close callback.")},M=function(n){function a(){var n,s,t,e;(0,u.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return s=t=(0,d.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},e=s,(0,d.default)(t,e)}return(0,g.default)(a,n),(0,i.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},p),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,s||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(e,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),T=function(n){function a(){return(0,u.default)(this,a),(0,d.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,g.default)(a,n),(0,i.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,E.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(o,{style:".zenticon-error-circle {\n\tcolor: #FF4343;\n\tmargin-right: 5px;\n}\n\n.zent-alert-example {\n    padding-right: 32px;\n}\n\n.zent-alert-example .zent-alert {\n        margin-bottom: 20px\n    }\n\n.zent-alert-example .zent-alert:last-child {\n\tmargin-bottom: 0;\n}\n\n.zent-alert-example .zent-alert a {\n            color: #3388FF;\n            margin-left: 10px;\n}\n\n.zent-alert .text {\n\t\tmargin-bottom: 5px;\n\t}"}),b.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#alert">¶</a><a href="javascript:void(0)" id="alert" class="anchor-point"></a>Alert</h2>\n<p>Alert is used to provide eye-catching information.</p>\n<h3 class="anchor-heading"><a href="#guide">¶</a><a href="javascript:void(0)" id="guide" class="anchor-point"></a>Guide</h3>\n<ul>\n<li>Content should be as simple as possible to make it easier to be read.</li>\n<li>The number of buttons should be less than 2 in order to keep logic simple.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.default.createElement(M,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span><span class="token punctuation">></span></span>Alert Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(w)),b.default.createElement(M,{title:"Support React Component as content of Alert",id:"Democontent",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error-circle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Warning<span class="token operator">!</span> SMS notifications <span class="token keyword">in</span> the process <span class="token keyword">of</span> trading<span class="token punctuation">,</span> will be pushed by news push <span class="token keyword">function</span> <span class="token keyword">of</span> marketing center<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Buy Now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},b.default.createElement(z)),b.default.createElement(M,{title:"Three styles: info, warning and danger",id:"Demostyles",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-alert-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default info style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Warning style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(N)),b.default.createElement(M,{title:"Two different sizes",id:"Demosizes",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-alert-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span><span class="token punctuation">></span></span>This is normal size<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is large size<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Messages during the transacation will be pushed through the Marketing Center<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Tel<span class="token punctuation">:</span> <span class="token number">0571</span><span class="token operator">-</span><span class="token number">88888888</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},b.default.createElement(_)),b.default.createElement(M,{title:"Supports rounded border",id:"Demoround",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token punctuation">></span></span>This Alert has rounded border<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},b.default.createElement(D)),b.default.createElement(M,{title:"Close button",id:"Democlose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Messages during the transacation will be pushed through the Marketing Center<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Tel<span class="token punctuation">:</span> <span class="token number">0571</span><span class="token operator">-</span><span class="token number">88888888</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Learn more<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},b.default.createElement(C)),b.default.createElement(M,{title:"Close callback",id:"Democallback",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Sweetalert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Alert\n    type<span class="token operator">=</span><span class="token string">"info"</span>\n    closable\n    onClose<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Sweetalert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Aler closed\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    This Alert has a close callback<span class="token punctuation">.</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},b.default.createElement(x)),b.default.createElement(p,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>style of the Alert</td>\n<td>string</td>\n<td><code>'info'</code></td>\n<td><code>'info'</code>\n, \n<code>'warning'</code>\n, \n<code>'danger'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>size of the Alert</td>\n<td>string</td>\n<td><code>'normal'</code></td>\n<td><code>'normal'</code>\n, \n<code>'large'</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>determines whether the corners are rounded or not</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>determines whether the Alert can be closed or not</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>callback for close</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom extra class name</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(y.Component);a.default=T}});