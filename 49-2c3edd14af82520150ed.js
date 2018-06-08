webpackJsonp([49],{1510:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function o(n){return b.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return b.default.createElement(o,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function p(n){return b.default.createElement(o,{tag:"style",html:n.style})}function c(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),c(n.parentNode,t);return t}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=s(l),i=a(1),d=s(i),r=a(4),k=s(r),g=a(2),h=s(g),f=a(3),v=s(f),m=a(0),b=s(m),P=a(229),y=s(P),C=a(350),B=function(){return b.default.createElement(C.Popover,{className:"zent-doc-popover",position:C.Popover.Position.BottomLeft,display:"inline",cushion:5},b.default.createElement(C.Popover.Trigger.Click,null,b.default.createElement(C.Button,{type:"primary"},"点击打开")),b.default.createElement(C.Popover.Content,null,b.default.createElement("div",null,"Popover 弹层内容"),b.default.createElement("div",null,"可以添加任意内容")))},w=function(){var n=function(n){function t(){var n,a,s,o;(0,d.default)(this,t);for(var e=arguments.length,p=Array(e),c=0;c<e;c++)p[c]=arguments[c];return a=s=(0,h.default)(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(p))),s.state={visible:!1},o=a,(0,h.default)(s,o)}return(0,v.default)(t,n),(0,k.default)(t,[{key:"render",value:function(){var n=this;return b.default.createElement("div",{className:"zent-doc-popover-container"},b.default.createElement(C.Popover,{className:"zent-doc-popover",visible:this.state.visible,onVisibleChange:function(t){return n.setState({visible:t})},position:C.Popover.Position.BottomLeft,display:"inline",cushion:5},b.default.createElement(C.Popover.Trigger.Base,null,b.default.createElement(C.Button,{type:"primary",onClick:function(){return n.setState({visible:!0})}},"点击打开")),b.default.createElement(C.Popover.Content,null,b.default.createElement("div",null,"Popover 弹层内容"),b.default.createElement("div",null,"可以添加任意内容"))),b.default.createElement(C.Button,{onClick:function(){return n.setState({visible:!1})}},"关闭"))}}]),t}(m.Component);return b.default.createElement(n,null)},x=function(n){function t(){var n,a,s,o;(0,d.default)(this,t);for(var e=arguments.length,p=Array(e),c=0;c<e;c++)p[c]=arguments[c];return a=s=(0,h.default)(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(p))),s.state={showCode:!1},s.toggle=function(){s.setState({showCode:!s.state.showCode})},o=a,(0,h.default)(s,o)}return(0,v.default)(t,n),(0,k.default)(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},e),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,a||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(o,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(m.Component),j=function(n){function t(){return(0,d.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,v.default)(t,n),(0,k.default)(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'+n+'"]');t&&(0,y.default)(document.documentElement,0,c(t,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(p,{style:".zent-doc-popover {\n\tborder: 1px solid #e5e5e5;\n\tpadding: 10px;\n\tborder-radius: 4px;\n\tbackground: #fff;\n\tfont-size: 14px;\n}\n\n.zent-doc-popover-container .zent-popover-wrapper {\n\t\tmargin-right: 10px;\n\t}"}),b.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#popover-dan-ceng">¶</a><a href="javascript:void(0)" id="popover-dan-ceng" class="anchor-point"></a>Popover 弹层</h2>\n<p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>\n<p>组件支持自身多层嵌套。</p>\n<p><strong>这个组件不提供样式, 气泡提示组件请使用 <code>Pop</code>。</strong></p>\n<h3 class="anchor-heading"><a href="#shi-yong-chang-jing">¶</a><a href="javascript:void(0)" id="shi-yong-chang-jing" class="anchor-point"></a>使用场景</h3>\n<ul>\n<li>如果 <code>Pop</code> 组件提供的功能无法满足你的需求，需要实现自定义的触发式弹层时可以使用 <code>Popover</code> 来简化开发。</li>\n<li>可以当做 <code>Dropdown</code> 使用。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),b.default.createElement(x,{title:"基本使用方式",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>\n    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-doc-popover<span class="token punctuation">"</span></span>\n    <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>BottomLeft<span class="token punctuation">}</span></span>\n    <span class="token attr-name">display</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>\n    <span class="token attr-name">cushion</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Popover 弹层内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>可以添加任意内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(B)),b.default.createElement(x,{title:"外部控制打开／关闭",id:"Democontrolled",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopoverDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-doc-popover-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Popover\n          className<span class="token operator">=</span><span class="token string">"zent-doc-popover"</span>\n          visible<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span>\n          onVisibleChange<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>BottomLeft<span class="token punctuation">}</span>\n          display<span class="token operator">=</span><span class="token string">"inline"</span>\n          cushion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Base</span><span class="token punctuation">></span></span>\n            <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>点击打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Base</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Popover 弹层内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>可以添加任意内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n\n        <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverDemo</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(w)),b.default.createElement(e,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>position</td>\n<td>定位的方式, 参见 \n<code>Popover.Positon</code></td>\n<td>Positon</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>cushion</td>\n<td>定位的偏移量, 通常用来预留空间给小箭头等东西</td>\n<td>number</td>\n<td><code>0</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>display</td>\n<td>在文档流里的出现形式</td>\n<td>string</td>\n<td><code>\'block\'</code></td>\n<td>所有CSS中合法的 \n<code>display</code>\n 值</td>\n<td>否</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>弹层显示后的回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>弹层关闭后的回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onBeforeShow</td>\n<td>弹层打开前的回调函数, 只有用户触发的打开操作才会调用, 外部设置 \n<code>visible</code>\n 不会调用</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onBeforeClose</td>\n<td>弹层关闭后的回调函数, 只有用户触发的关闭操作才会调用, 外部设置 \n<code>visible</code>\n 不会调用</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>containerSelector</td>\n<td>弹层的父节点CSS selector</td>\n<td>string</td>\n<td><code>\'body\'</code></td>\n<td>所有合法的CSS selector</td>\n<td>否</td>\n</tr>\n<tr>\n<td>visible</td>\n<td>手动控制弹层的显示隐藏, 必须和 \n<code>onVisibleChange</code>\n 一起使用</td>\n<td>bool</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onVisibleChange</td>\n<td>手动控制时的回调函数, 必须和\n<code>visible</code>\n一起使用, 只有用户手动触发的打开／关闭操作才会调用</td>\n<td>func</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onPositionUpdated</td>\n<td>位置更新时的回调，不保证调用这个函数时位置一定变化</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onPositionReady</td>\n<td>content 位置进入窗口时的回调，生命周期内只调用一次</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>wrapperClassName</td>\n<td>trigger外层包裹div的类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td>string or number</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<p><code>onBeforeShow</code> 和 <code>onBeforeClose</code> 可以返回一个 <code>Promise</code>，<code>Popover</code> 会在 <code>Promise</code> resolve 后打开/关闭，如果 <code>Promise</code> reject 的话打开/关闭操作终止。</p>\n<p>如果你不使用 <code>Promise</code>，<code>onBeforeShow</code> 和 <code>onBeforeClose</code> 也提供两个可选的参数 <code>callback</code> 以及 <code>escapse</code>，如果有这两参数的话，你必须在 <code>onBeforeShow</code> 和 <code>onBeforeClose</code> 里面手动调用 <code>callback</code> 才会打开/关闭，如果要终止打开/关闭操作需要手动调用 <code>escape</code>。</p>\n<p><code>onBeforeShow(callback: ?function, escape: ?escape): ?Promise</code></p>\n<p>每种 trigger 都有特有的 API 来控制组件行为, 自定义 trigger 可以按需指定 trigger 的参数.</p>\n<h4 class="anchor-heading"><a href="#trigger-click">¶</a><a href="javascript:void(0)" id="trigger-click" class="anchor-point"></a>Trigger.Click</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>autoClose</td>\n<td>是否点击‘外面’自动关闭弹层</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>isOutside</td>\n<td>判断一个节点是否在‘外面’, 点击在外面会关闭弹层。默认trigger和弹层以外的节点都是‘外面’</td>\n<td>func: (node, data) => bool</td>\n<td><code>() => false</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<p>isOutside 的 <code>data</code> 包含两个属性：<code>contentNode</code> 和 <code>triggerNode</code>。</p>\n<h4 class="anchor-heading"><a href="#trigger-hover">¶</a><a href="javascript:void(0)" id="trigger-hover" class="anchor-point"></a>Trigger.Hover</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showDelay</td>\n<td>打开弹层前的延迟（单位毫秒）, 如果在这段时间内鼠标移出弹层范围, 弹层不会打开</td>\n<td>number</td>\n<td><code>150</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>hideDelay</td>\n<td>关闭弹层前的延迟（单位毫秒）, 如果在这段时间内鼠标重新移入弹层范围, 弹层不会关闭</td>\n<td>number</td>\n<td><code>150</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>isOutside</td>\n<td>判断一个节点是否在‘外面’。默认 trigger 和弹层以外的节点都是‘外面’</td>\n<td>func: (node, data) => bool</td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>quirk</td>\n<td>quirk 模式，该模式下触发关闭时不要求鼠标先从 trigger 和弹层里面出去</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<p>isOutside 的 <code>data</code> 包含两个属性：<code>contentNode</code> 和 <code>triggerNode</code>。</p>\n<h4 class="anchor-heading"><a href="#trigger-focus">¶</a><a href="javascript:void(0)" id="trigger-focus" class="anchor-point"></a>Trigger.Focus</h4>\n<p>当获取焦点时显示，失去焦点时关闭，没有参数。</p>\n<h4 class="anchor-heading"><a href="#trigger-base">¶</a><a href="javascript:void(0)" id="trigger-base" class="anchor-point"></a>Trigger.Base</h4>\n<p>所有trigger的基类, 实现自定义 trigger 需继承这个类, 继承时一般需要重写 <code>getTriggerProps</code> 方法给 trigger 添加事件, 然后在事件处理函数控制弹层的开/闭。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getTriggerNode</td>\n<td>获取 trigger 的 DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>getContentNode</td>\n<td>获取弹层的 DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>open</td>\n<td>打开弹层</td>\n<td>func</td>\n</tr>\n<tr>\n<td>close</td>\n<td>关闭弹层</td>\n<td>func</td>\n</tr>\n<tr>\n<td>contentVisible</td>\n<td>弹层当前是否打开</td>\n<td>bool</td>\n</tr>\n<tr>\n<td>onTriggerRefChange</td>\n<td>trigger的ref改变的时候需要调用的回掉函数, 只有在重写 render 函数的时候需要这个函数</td>\n<td>func:(instance)</td>\n</tr>\n<tr>\n<td>getNodeForTriggerRefChange</td>\n<td>当 ref 改变时获取实际 trigger DOM 节点的回调函数</td>\n<td>(HTMLElement) => HTMLELement</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#position-api">¶</a><a href="javascript:void(0)" id="position-api" class="anchor-point"></a>Position API</h3>\n<p>Positon用于给弹层提供定位的, 内置12种基础定位, 可以添加自定义定位算法. Popover 上的 <code>cushion</code> 参数会影响定位, 通常用来提供一定量的偏移量。</p>\n<pre><code class="language-text"><span class="token comment">// 基础定位</span>\n\n                    TopLeft     TopCenter     TopRight\n\nLeftTop                                                             RightTop\n\n\nLeftCenter                                                          RightCenter\n\n\nLeftBottom                                                          RightBottom\n\n                BottomLeft     BottomCenter     BottomRight</code></pre>\n<p>除了这12种基础定位算法外，还提供了6个会自动根据屏幕剩余空间自动判断合适位置的定位算法: <code>AutoBottomLeft</code>，<code>AutoBottomCenter</code>, <code>AutoBottomRight</code>, <code>AutoTopLeft</code>, <code>AutoTopCenter</code> 以及 <code>AutoTopRight</code>，这些算法适用于下拉式组件。</p>\n<p>每个定位算法的对象上都有一个 <code>locate</code> 函数，通过这个函数可以实现定位算法的组合。</p>\n<pre><code class="language-jsx">Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span>anchorBoundingBox<span class="token punctuation">,</span> containerBoundingBox<span class="token punctuation">,</span> contentDimension<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>someCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>BottomLeft<span class="token punctuation">.</span><span class="token function">locate</span><span class="token punctuation">(</span>anchorBoundingBox<span class="token punctuation">,</span> containerBoundingBox<span class="token punctuation">,</span> contentDimension<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>TopRight<span class="token punctuation">.</span><span class="token function">locate</span><span class="token punctuation">(</span>anchorBoundingBox<span class="token punctuation">,</span> containerBoundingBox<span class="token punctuation">,</span> contentDimension<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h4 class="anchor-heading"><a href="#position-create">¶</a><a href="javascript:void(0)" id="position-create" class="anchor-point"></a>Position.create</h4>\n<p>通过这个工厂函数创建自定义的 position, 这个函数接受一个函数作为参数，示例：</p>\n<pre><code class="language-jsx"><span class="token comment">// a bounding box is an object with these fields: {top, left, right, bottom, width, height}</span>\n<span class="token keyword">const</span> position <span class="token operator">=</span> Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span>anchorBoundingBox<span class="token punctuation">,</span> containerBoundingBox<span class="token punctuation">,</span> contentDimension<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token function">getCSSStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        position<span class="token punctuation">:</span> <span class="token string">\'fixed\'</span><span class="token punctuation">,</span>\n        left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        opacity<span class="token punctuation">:</span> <span class="token number">0</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    name<span class="token punctuation">:</span> <span class="token string">\'position-example\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>anchor 是指 trigger，container 是指离弹层最近的有定位的父节点。</p>\n<p><code>anchorBoundingBox</code> 和 <code>containerBoundingBox</code> 是相对于 container 左上角的坐标。</p>\n<p><code>contentDimension</code> 是弹层的宽高.</p>\n<p><code>options</code> 包含了其它可能有用的参数:</p>\n<ul>\n<li><code>options.cushion</code> Props 上传进来的定位偏移量</li>\n<li><code>options.anchor</code> anchor 的 DOM 节点</li>\n<li><code>options.container</code> container 的 DOM 节点</li>\n<li><code>options.anchorBoundingBoxViewport</code> anchor 相对于 viewport 的坐标</li>\n<li><code>options.containerBoundingBoxViewport</code> container 相对于 viewport 的坐标</li>\n</ul>\n<h4 class="anchor-heading"><a href="#withpopover-gao-jie-zu-jian">¶</a><a href="javascript:void(0)" id="withpopover-gao-jie-zu-jian" class="anchor-point"></a>withPopover 高阶组件</h4>\n<p>这个高阶组件暴露了 <code>Popover</code> 内部的几个重要方法, 可能的使用场景: 在 <code>Content</code> 内部手动关闭弹层.</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getTriggerNode</td>\n<td>获取 trigger 的 DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>getContentNode</td>\n<td>获取弹层的 DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>open</td>\n<td>打开弹层</td>\n<td>func</td>\n</tr>\n<tr>\n<td>close</td>\n<td>关闭弹层</td>\n<td>func</td>\n</tr>\n</tbody>\n</table>\n<p>示例：</p>\n<pre><code class="language-jsx"><span class="token comment">// 点击close按钮可以关闭弹层</span>\n<span class="token keyword">const</span> HoverContent <span class="token operator">=</span> <span class="token function">withPopover</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">HoverContent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> popover <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span><span class="token punctuation">></span></span>popover content<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>popover<span class="token punctuation">.</span>close<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>close<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Popover</span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>RightTop<span class="token punctuation">}</span></span> <span class="token attr-name">display</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Popover.Trigger.Hover</span> <span class="token attr-name">showDelay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span> <span class="token attr-name">hideDelay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token operator">&#x3C;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>hover on me<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>Popover.Trigger.Hover</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>PopoverContent</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>HoverContent</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>PopoverContent</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>Popover</span><span class="token punctuation">></span></span></code></pre>\n<h4 class="anchor-heading"><a href="#adjustposition-fang-fa">¶</a><a href="javascript:void(0)" id="adjustposition-fang-fa" class="anchor-point"></a><code>adjustPosition</code> 方法</h4>\n<p>可以通过这个方法调整 <code>Popover</code> 的位置。</p>\n<p>一般是用于某些特殊场合，<code>Popover</code> 无法自动更新位置时手动调用。</p>'}))}}]),t}(m.Component);t.default=j}});