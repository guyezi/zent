webpackJsonp([117],{1504:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return b.default.createElement(e.tag,(0,_.default)({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function c(e){return b.default.createElement(o,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function r(e){return b.default.createElement(o,{tag:"style",html:e.style})}function l(e,t){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(t+=e.offsetTop),l(e.parentNode,t);return t}Object.defineProperty(t,"__esModule",{value:!0});var d=a(1),u=n(d),s=a(4),i=n(s),f=a(2),h=n(f),m=a(3),p=n(m),g=a(7),_=n(g),v=a(0),b=n(v),y=a(229),z=n(y),E=(function(e){function t(){var e,a,n,o;(0,u.default)(this,t);for(var c=arguments.length,r=Array(c),l=0;l<c;l++)r[l]=arguments[l];return a=n=(0,h.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.state={showCode:!1},n.toggle=function(){n.setState({showCode:!n.state.showCode})},o=a,(0,h.default)(n,o)}(0,p.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props,a=t.title,n=t.src,c=t.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},c),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,a||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(e?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),e&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(o,{tag:"code",html:n,attributes:{className:"language-jsx"}})))}}])}(v.Component),function(e){function t(){return(0,u.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var t=document.querySelector('a[href="'+e+'"]');t&&(0,z.default)(document.documentElement,0,l(t,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(r,{style:""}),b.default.createElement(c,{html:'<h2 class="anchor-heading"><a href="#zent-2-1-0-sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="zent-2-1-0-sheng-ji-zhi-nan" class="anchor-point"></a>Zent 2.1.0 升级指南</h2>\n<p>这个版本主要升级了 React 版本到 15.5.x。</p>\n<h3 class="anchor-heading"><a href="#react-sheng-ji-dao-15-5-x">¶</a><a href="javascript:void(0)" id="react-sheng-ji-dao-15-5-x" class="anchor-point"></a>React 升级到 15.5.x</h3>\n<p>从 2.1.0 开始 Zent 的开发都是基于 React 15.5.x，和老版本的 React 一起使用时可能会在开发时出现 warning。</p>\n<p>详细的 React 升级方案请看<a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">官方的说明文档</a>。</p>\n<p>推荐使用 Facebook 提供的 <a href="https://github.com/reactjs/react-codemod">codemod</a> 来自动化迁移工作。</p>\n<h3 class="anchor-heading"><a href="#button-mo-ren-de-type-bian-geng">¶</a><a href="javascript:void(0)" id="button-mo-ren-de-type-bian-geng" class="anchor-point"></a>Button 默认的 <code>type</code> 变更</h3>\n<p>Button 提供了一个 <code>htmlType</code> 属性，这个属性在 2.1.0 之前是没有默认值的，行为和原生的 button 一致，会在 form 里触发 submit。</p>\n<p>在 2.1.0 版本开始，<code>htmlType</code> 设置了默认值为 <code>"button"</code>，所以原来在表单里依赖 submit 行为的地方需要加上 <code>htmlType="submit"</code>。</p>'}))}}]),t}(v.Component));t.default=E}});