webpackJsonp([121],{1501:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n){return v.default.createElement(n.tag,(0,g.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return v.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return v.default.createElement(e,{tag:"style",html:n.style})}function c(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),c(n.parentNode,s);return s}Object.defineProperty(s,"__esModule",{value:!0});var l=a(1),u=t(l),i=a(4),r=t(i),k=a(2),d=t(k),m=a(3),f=t(m),h=a(7),g=t(h),y=a(0),v=t(y),z=a(229),_=t(z),b=(function(n){function s(){var n,a,t,e;(0,u.default)(this,s);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return a=t=(0,d.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},e=a,(0,d.default)(t,e)}(0,f.default)(s,n),(0,r.default)(s,[{key:"render",value:function(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},p),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,a||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(e,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}])}(y.Component),function(n){function s(){return(0,u.default)(this,s),(0,d.default)(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return(0,f.default)(s,n),(0,r.default)(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var s=document.querySelector('a[href="'+n+'"]');s&&(0,_.default)(document.documentElement,0,c(s,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(o,{style:'img[alt="zent-theme"] {\n    width: 514px;\n    height: 319px;\n  }'}),v.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#ding-zhi-zhu-ti">¶</a><a href="javascript:void(0)" id="ding-zhi-zhu-ti" class="anchor-point"></a>定制主题</h2>\n<p>Zent 支持主题定制，目前仅支持组件库颜色的定制。</p>\n<p><img src="https://img.yzcdn.cn/zanui/react/zent-theme.png" alt="zent-theme"></p>\n<h3 class="anchor-heading"><a href="#ding-zhi-fang-fa">¶</a><a href="javascript:void(0)" id="ding-zhi-fang-fa" class="anchor-point"></a>定制方法</h3>\n<p>Zent 的样式使用 <a href="http://postcss.org/">postcss</a> 开发，我们提供了一个 postcss 的插件 <a href="https://www.npmjs.com/package/postcss-theme-variables">postcss-theme-variables</a> 来支持主题定制。</p>\n<p>有两种定制方式：</p>\n<ol>\n<li>通过在 Zent 仓库中修改配置，生成一份定制的 css 样式。</li>\n<li>直接在业务项目中引用 Zent 的 postcss 源文件并配置自定义主题，在业务项目打包过程中自动生成定制后的样式。</li>\n</ol>\n<p>两种方式各有优劣。</p>\n<p>第一种方式对业务项目是非侵入式的，样式的定制和业务项目完全独立，这种方案的问题是每次更新 Zent 组件库都要重新生成一份定制主题。</p>\n<p>第二种方式对业务项目是侵入式的，需要修改业务项目的打包配置，支持 Zent 的 postcss 源文件，好处是更新 Zent 后不需要单独去重新生成定制主题。</p>\n<p>我们的建议：如果你的项目使用 postcss 那么可以考虑方案2，否则推荐方案1。</p>\n<h4 class="anchor-heading"><a href="#fang-an-1">¶</a><a href="javascript:void(0)" id="fang-an-1" class="anchor-point"></a>方案1</h4>\n<ol>\n<li>克隆 Zent <a href="https://github.com/youzan/zent">源码</a>并安装依赖</li>\n<li>在 <code>packages/zent</code> 目录下新建一个文件，例如 <code>custom-theme.js</code>，并设置要覆盖的主题颜色，颜色的名字及默认值请参考<a href="colors">色彩</a></li>\n<li>在 <code>packages/zent</code> 目录下面执行 <code>yarn theme custom-theme.js</code></li>\n<li>定制的主题会生成在 <code>packages/zent/css</code> 目录下</li>\n</ol>\n<pre><code class="language-text"><span class="token comment">/* custom-theme.js */</span>\n\n<span class="token comment">// 只自定义主色</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'theme-primary-1\'</span><span class="token punctuation">:</span> <span class="token string">\'#72f\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-2\'</span><span class="token punctuation">:</span> <span class="token string">\'#83f\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-3\'</span><span class="token punctuation">:</span> <span class="token string">\'#95f\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-4\'</span><span class="token punctuation">:</span> <span class="token string">\'#dbf\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-5\'</span><span class="token punctuation">:</span> <span class="token string">\'#f7e8fd\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-6\'</span><span class="token punctuation">:</span> <span class="token string">\'#f3eaff\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 class="anchor-heading"><a href="#fang-an-2">¶</a><a href="javascript:void(0)" id="fang-an-2" class="anchor-point"></a>方案2</h4>\n<p>首先，项目的样式文件里需要直接引入 Zent 的样式源文件，源文件在 <code>zent/assets</code> 目录下。\n一般直接引入 <code>zent/assets/index.pcss</code> 即可，如果你希望只引入使用到的组件样式的话可以使用 <a href="babel-plugin-zent">babel-plugin-zent</a> 的 <code>useRawStyle</code> 参数。</p>\n<p>请参考如下配置，确保 postcss-theme-variables 这个插件配置正确，注意事项请看 <a href="https://www.npmjs.com/package/postcss-theme-variables">postcss-theme-variables 文档</a>。</p>\n<pre><code class="language-text">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-easy-import\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      prefix<span class="token punctuation">:</span> <span class="token string">\'_\'</span><span class="token punctuation">,</span>\n      extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'pcss\'</span><span class="token punctuation">,</span> <span class="token string">\'css\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-theme-variables\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// ... your overrides here</span>\n      vars<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'theme-primary-1\'</span><span class="token punctuation">:</span> <span class="token string">\'#72f\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-2\'</span><span class="token punctuation">:</span> <span class="token string">\'#83f\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-3\'</span><span class="token punctuation">:</span> <span class="token string">\'#95f\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-4\'</span><span class="token punctuation">:</span> <span class="token string">\'#dbf\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-5\'</span><span class="token punctuation">:</span> <span class="token string">\'#f7e8fd\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-6\'</span><span class="token punctuation">:</span> <span class="token string">\'#f3eaff\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// precss variables starts with $</span>\n      prefix<span class="token punctuation">:</span> <span class="token string">\'$\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'precss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 可选压缩</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cssnano\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span> safe<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>'}))}}]),s}(y.Component));s.default=b}});